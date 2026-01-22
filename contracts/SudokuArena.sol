// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ArcadeEscrow {
    function finalize(uint256 matchId, address winner, bytes32 metaHash) external;
}

contract SudokuArena {
    enum State {
        NONE,
        CREATED,
        ACCEPTED,
        IN_PROGRESS,
        SUBMISSION_OPEN,
        FINALIZED,
        REFUNDED,
        CANCELED
    }

    struct Match {
        address creator;
        address opponent;
        bool isPvp;
        State state;
        uint64 createdAt;
        uint64 acceptBy;
        uint64 resolveBy;
        uint32 gameId;
        uint256 startBlock;
        uint256 creatorFinishBlock;
        uint256 opponentFinishBlock;
        uint8 puzzleIndex;
        bytes32 puzzleHash;
    }

    ArcadeEscrow public immutable escrow;
    address public admin;
    address public relayer;
    uint256 public nextMatchId;
    bytes[] private puzzles;

    mapping(uint256 => Match) public matches;
    mapping(uint256 => mapping(address => mapping(uint8 => uint8))) private grids;

    event MatchCreated(
        uint256 indexed matchId,
        address indexed creator,
        address indexed opponent,
        bool isPvp,
        uint32 gameId,
        uint64 acceptBy,
        uint64 resolveBy,
        uint8 puzzleIndex,
        bytes32 puzzleHash
    );
    event MatchAccepted(uint256 indexed matchId, address indexed opponent);
    event MatchStateUpdated(uint256 indexed matchId, State state);
    event MoveSubmitted(uint256 indexed matchId, address indexed player, uint8 row, uint8 col, uint8 value);
    event MatchFinalized(uint256 indexed matchId, address indexed winner, uint256 winnerDelta);

    modifier onlyAdmin() {
        require(msg.sender == admin, "SudokuArena: not admin");
        _;
    }

    modifier onlyRelayer() {
        require(msg.sender == relayer, "SudokuArena: not relayer");
        _;
    }

    constructor(address escrowAddress) {
        require(escrowAddress != address(0), "SudokuArena: escrow is zero");
        escrow = ArcadeEscrow(escrowAddress);
        admin = msg.sender;
        relayer = msg.sender;
        _seedPuzzles();
    }

    function puzzleCount() external view returns (uint256) {
        return puzzles.length;
    }

    function getPackedPuzzle(uint8 index) external view returns (bytes memory) {
        require(index < puzzles.length, "SudokuArena: puzzle out of range");
        return puzzles[index];
    }

    function getGiven(uint256 matchId, uint8 row, uint8 col) external view returns (uint8) {
        Match storage m = matches[matchId];
        require(m.state != State.NONE, "SudokuArena: match missing");
        return _getPackedCell(puzzles[m.puzzleIndex], row, col);
    }

    function getCell(uint256 matchId, address player, uint8 row, uint8 col) external view returns (uint8) {
        return grids[matchId][player][_cellIndex(row, col)];
    }

    function setRelayer(address nextRelayer) external onlyAdmin {
        require(nextRelayer != address(0), "SudokuArena: relayer is zero");
        relayer = nextRelayer;
    }

    function createPveMatch(uint32 gameId) external returns (uint256 matchId) {
        matchId = ++nextMatchId;
        _createMatch(matchId, msg.sender, address(0), false, gameId, 0, 0);
    }

    function createPvpMatch(
        uint256 escrowMatchId,
        address opponent,
        uint32 gameId,
        uint64 acceptBy,
        uint64 resolveBy
    ) external returns (uint256 matchId) {
        require(opponent != address(0), "SudokuArena: opponent is zero");
        require(acceptBy > block.timestamp, "SudokuArena: acceptBy in past");
        require(resolveBy > acceptBy, "SudokuArena: resolveBy too early");
        require(matches[escrowMatchId].state == State.NONE, "SudokuArena: match exists");

        matchId = escrowMatchId;
        _createMatch(matchId, msg.sender, opponent, true, gameId, acceptBy, resolveBy);
    }

    function acceptMatch(uint256 matchId) external {
        Match storage m = matches[matchId];
        require(m.state == State.CREATED, "SudokuArena: not created");
        require(m.isPvp, "SudokuArena: not pvp");
        require(msg.sender == m.opponent, "SudokuArena: not opponent");
        require(block.timestamp < m.acceptBy, "SudokuArena: accept expired");

        m.state = State.ACCEPTED;
        emit MatchAccepted(matchId, msg.sender);
        emit MatchStateUpdated(matchId, State.ACCEPTED);
    }

    function submitMove(uint256 matchId, uint8 row, uint8 col, uint8 value) external {
        _submitMove(matchId, msg.sender, row, col, value);
    }

    function submitMoveFor(
        uint256 matchId,
        address player,
        uint8 row,
        uint8 col,
        uint8 value
    ) external onlyRelayer {
        require(player != address(0), "SudokuArena: player is zero");
        _submitMove(matchId, player, row, col, value);
    }

    function _submitMove(
        uint256 matchId,
        address player,
        uint8 row,
        uint8 col,
        uint8 value
    ) internal {
        Match storage m = matches[matchId];
        require(m.state != State.NONE, "SudokuArena: match missing");
        require(row < 9 && col < 9, "SudokuArena: invalid cell");
        require(value <= 9, "SudokuArena: invalid value");
        require(_isParticipant(m, player), "SudokuArena: not participant");
        require(m.state != State.FINALIZED, "SudokuArena: finalized");

        if (m.isPvp) {
            require(m.state == State.ACCEPTED || m.state == State.IN_PROGRESS, "SudokuArena: not accepted");
        } else {
            require(m.state == State.CREATED || m.state == State.IN_PROGRESS, "SudokuArena: not active");
        }

        if (m.startBlock == 0) {
            m.startBlock = block.number;
        }
        if (m.state != State.IN_PROGRESS) {
            m.state = State.IN_PROGRESS;
            emit MatchStateUpdated(matchId, State.IN_PROGRESS);
        }

        uint8 given = _getPackedCell(puzzles[m.puzzleIndex], row, col);
        require(given == 0, "SudokuArena: fixed cell");

        if (value > 0) {
            _validateMove(matchId, m.puzzleIndex, player, row, col, value);
        }

        grids[matchId][player][_cellIndex(row, col)] = value;
        emit MoveSubmitted(matchId, player, row, col, value);

        if (value > 0 && _isComplete(matchId, m.puzzleIndex, player)) {
            _setFinishBlock(m, player);
            _maybeFinalize(matchId, m);
        }
    }

    function _createMatch(
        uint256 matchId,
        address creator,
        address opponent,
        bool isPvp,
        uint32 gameId,
        uint64 acceptBy,
        uint64 resolveBy
    ) internal {
        uint8 puzzleIndex = _selectPuzzleIndex(matchId, creator);
        bytes32 puzzleHash = keccak256(puzzles[puzzleIndex]);

        matches[matchId] = Match({
            creator: creator,
            opponent: opponent,
            isPvp: isPvp,
            state: State.CREATED,
            createdAt: uint64(block.timestamp),
            acceptBy: acceptBy,
            resolveBy: resolveBy,
            gameId: gameId,
            startBlock: 0,
            creatorFinishBlock: 0,
            opponentFinishBlock: 0,
            puzzleIndex: puzzleIndex,
            puzzleHash: puzzleHash
        });

        emit MatchCreated(
            matchId,
            creator,
            opponent,
            isPvp,
            gameId,
            acceptBy,
            resolveBy,
            puzzleIndex,
            puzzleHash
        );
    }

    function _maybeFinalize(uint256 matchId, Match storage m) internal {
        if (!m.isPvp) {
            m.state = State.FINALIZED;
            emit MatchStateUpdated(matchId, State.FINALIZED);
            emit MatchFinalized(matchId, m.creator, _delta(m.creatorFinishBlock, m.startBlock));
            return;
        }

        if (m.creatorFinishBlock == 0 || m.opponentFinishBlock == 0) {
            return;
        }

        uint256 creatorDelta = _delta(m.creatorFinishBlock, m.startBlock);
        uint256 opponentDelta = _delta(m.opponentFinishBlock, m.startBlock);
        address winner = creatorDelta <= opponentDelta ? m.creator : m.opponent;
        uint256 winnerDelta = creatorDelta <= opponentDelta ? creatorDelta : opponentDelta;

        m.state = State.FINALIZED;
        emit MatchStateUpdated(matchId, State.FINALIZED);
        emit MatchFinalized(matchId, winner, winnerDelta);

        bytes32 metaHash = keccak256(
            abi.encodePacked(winner, creatorDelta, opponentDelta, m.startBlock)
        );
        escrow.finalize(matchId, winner, metaHash);
    }

    function _setFinishBlock(Match storage m, address player) internal {
        if (player == m.creator && m.creatorFinishBlock == 0) {
            m.creatorFinishBlock = block.number;
        }
        if (player == m.opponent && m.opponentFinishBlock == 0) {
            m.opponentFinishBlock = block.number;
        }
    }

    function _isParticipant(Match storage m, address player) internal view returns (bool) {
        if (player == m.creator) return true;
        if (m.isPvp && player == m.opponent) return true;
        return false;
    }

    function _validateMove(
        uint256 matchId,
        uint8 puzzleIndex,
        address player,
        uint8 row,
        uint8 col,
        uint8 value
    ) internal view {
        // Check row - both givens and player moves
        for (uint8 c = 0; c < 9; c += 1) {
            if (c == col) continue;
            uint8 given = _getPackedCell(puzzles[puzzleIndex], row, c);
            uint8 played = grids[matchId][player][_cellIndex(row, c)];
            uint8 cellValue = given > 0 ? given : played;
            if (cellValue == value) {
                revert("SudokuArena: row conflict");
            }
        }

        // Check column - both givens and player moves
        for (uint8 r = 0; r < 9; r += 1) {
            if (r == row) continue;
            uint8 given = _getPackedCell(puzzles[puzzleIndex], r, col);
            uint8 played = grids[matchId][player][_cellIndex(r, col)];
            uint8 cellValue = given > 0 ? given : played;
            if (cellValue == value) {
                revert("SudokuArena: column conflict");
            }
        }

        // Check box - both givens and player moves
        uint8 boxRow = (row / 3) * 3;
        uint8 boxCol = (col / 3) * 3;
        for (uint8 r = boxRow; r < boxRow + 3; r += 1) {
            for (uint8 c = boxCol; c < boxCol + 3; c += 1) {
                if (r == row && c == col) continue;
                uint8 given = _getPackedCell(puzzles[puzzleIndex], r, c);
                uint8 played = grids[matchId][player][_cellIndex(r, c)];
                uint8 cellValue = given > 0 ? given : played;
                if (cellValue == value) {
                    revert("SudokuArena: box conflict");
                }
            }
        }
    }

    // FIXED: Now checks both givens AND player moves
    function _isComplete(uint256 matchId, uint8 puzzleIndex, address player) internal view returns (bool) {
        for (uint8 i = 0; i < 81; i += 1) {
            uint8 row = i / 9;
            uint8 col = i % 9;
            uint8 given = _getPackedCell(puzzles[puzzleIndex], row, col);
            uint8 played = grids[matchId][player][i];
            // Cell is filled if it's either a given OR the player filled it
            if (given == 0 && played == 0) {
                return false;
            }
        }
        return true;
    }

    function _cellIndex(uint8 row, uint8 col) internal pure returns (uint8) {
        return uint8(row * 9 + col);
    }

    function _delta(uint256 finishBlock, uint256 startBlock) internal pure returns (uint256) {
        if (finishBlock < startBlock) return 0;
        return finishBlock - startBlock;
    }

    function _selectPuzzleIndex(uint256 matchId, address creator) internal view returns (uint8) {
        uint256 seed = uint256(keccak256(abi.encodePacked(blockhash(block.number - 1), matchId, creator)));
        return uint8(seed % puzzles.length);
    }

    function _getPackedCell(bytes storage packed, uint8 row, uint8 col) internal view returns (uint8) {
        uint8 index = _cellIndex(row, col);
        uint8 packedByte = uint8(packed[index / 2]);
        if (index % 2 == 0) {
            return packedByte >> 4;
        }
        return packedByte & 0x0f;
    }

    function _packPuzzle(uint8[81] memory puzzle) internal pure returns (bytes memory) {
        bytes memory packed = new bytes(41);
        for (uint8 i = 0; i < 81; i += 1) {
            uint8 value = puzzle[i];
            require(value <= 9, "SudokuArena: invalid puzzle value");
            uint8 index = i / 2;
            uint8 current = uint8(packed[index]);
            if (i % 2 == 0) {
                packed[index] = bytes1((value << 4) | (current & 0x0f));
            } else {
                packed[index] = bytes1((current & 0xf0) | value);
            }
        }
        return packed;
    }

    function _seedPuzzles() internal {
        uint8[81] memory puzzle1 = [
            uint8(5), 3, 0, 6, 7, 0, 9, 1, 2,
            6, 7, 2, 1, 0, 5, 3, 0, 8,
            1, 0, 8, 3, 4, 2, 5, 6, 0,
            8, 5, 9, 0, 6, 1, 4, 0, 3,
            4, 2, 6, 8, 5, 3, 0, 9, 0,
            7, 0, 3, 9, 2, 0, 8, 5, 6,
            0, 6, 1, 5, 0, 7, 2, 8, 4,
            2, 8, 7, 0, 1, 9, 6, 3, 5,
            3, 0, 5, 2, 8, 6, 0, 7, 0
        ];
        uint8[81] memory puzzle2 = [
            uint8(4), 0, 5, 2, 0, 9, 7, 8, 1,
            6, 8, 0, 5, 7, 1, 0, 9, 3,
            0, 9, 7, 8, 3, 4, 5, 0, 2,
            8, 2, 6, 0, 9, 5, 3, 4, 0,
            3, 0, 4, 6, 8, 0, 9, 1, 5,
            9, 5, 0, 7, 0, 3, 6, 2, 8,
            5, 1, 9, 0, 2, 6, 8, 0, 4,
            0, 4, 8, 9, 5, 0, 1, 3, 6,
            7, 0, 3, 4, 1, 8, 0, 5, 9
        ];

        puzzles.push(_packPuzzle(puzzle1));
        puzzles.push(_packPuzzle(puzzle2));
    }
}
