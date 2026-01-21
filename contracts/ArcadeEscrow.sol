// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract ArcadeEscrow is AccessControl, ReentrancyGuard {
    bytes32 public constant REFEREE_ROLE = keccak256("REFEREE_ROLE");
    uint256 public constant MIN_WAGER_WEI = 1 ether;

    enum State {
        NONE,
        OPEN,
        ACCEPTED,
        FINALIZED,
        REFUNDED,
        CANCELED
    }

    struct Match {
        address creator;
        address opponent;
        uint96 wager;
        uint32 gameId;
        uint64 createdAt;
        uint64 acceptBy;
        uint64 resolveBy;
        State state;
        address winner;
        bytes32 metaHash;
    }

    uint256 public nextMatchId;
    mapping(uint256 => Match) public matches;

    event ChallengeCreated(
        uint256 indexed matchId,
        address indexed creator,
        address indexed opponent,
        uint256 wager,
        uint32 gameId,
        uint64 acceptBy,
        uint64 resolveBy,
        bytes32 metaHash
    );
    event ChallengeAccepted(uint256 indexed matchId, address indexed opponent);
    event MatchFinalized(uint256 indexed matchId, address indexed winner, bytes32 metaHash);
    event MatchRefunded(uint256 indexed matchId, address indexed recipient, uint256 amount);
    event MatchCanceled(uint256 indexed matchId);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(REFEREE_ROLE, msg.sender);
    }

    function createChallenge(
        address opponent,
        uint32 gameId,
        uint64 acceptBy,
        uint64 resolveBy,
        bytes32 metaHash
    ) external payable nonReentrant returns (uint256 matchId) {
        require(opponent != address(0), "ArcadeEscrow: opponent is zero");
        require(acceptBy > block.timestamp, "ArcadeEscrow: acceptBy in past");
        require(resolveBy > acceptBy, "ArcadeEscrow: resolveBy too early");
        require(msg.value >= MIN_WAGER_WEI, "ArcadeEscrow: wager too small");

        uint96 wager = uint96(msg.value);
        require(msg.value == uint256(wager), "ArcadeEscrow: wager too large");

        matchId = ++nextMatchId;
        matches[matchId] = Match({
            creator: msg.sender,
            opponent: opponent,
            wager: wager,
            gameId: gameId,
            createdAt: uint64(block.timestamp),
            acceptBy: acceptBy,
            resolveBy: resolveBy,
            state: State.OPEN,
            winner: address(0),
            metaHash: metaHash
        });

        emit ChallengeCreated(
            matchId,
            msg.sender,
            opponent,
            msg.value,
            gameId,
            acceptBy,
            resolveBy,
            metaHash
        );
    }

    function acceptChallenge(uint256 matchId) external payable nonReentrant {
        Match storage m = matches[matchId];
        require(m.state == State.OPEN, "ArcadeEscrow: not open");
        require(msg.sender == m.opponent, "ArcadeEscrow: not opponent");
        require(block.timestamp < m.acceptBy, "ArcadeEscrow: accept expired");
        require(msg.value == uint256(m.wager), "ArcadeEscrow: incorrect wager");

        m.state = State.ACCEPTED;
        emit ChallengeAccepted(matchId, msg.sender);
    }

    function finalize(
        uint256 matchId,
        address winner,
        bytes32 metaHash
    ) external nonReentrant onlyRole(REFEREE_ROLE) {
        Match storage m = matches[matchId];
        require(m.state == State.ACCEPTED, "ArcadeEscrow: not accepted");
        require(winner == m.creator || winner == m.opponent, "ArcadeEscrow: invalid winner");

        m.state = State.FINALIZED;
        m.winner = winner;
        m.metaHash = metaHash;

        uint256 payout = uint256(m.wager) * 2;
        _pay(winner, payout);

        emit MatchFinalized(matchId, winner, metaHash);
    }

    function refund(uint256 matchId) external nonReentrant {
        Match storage m = matches[matchId];

        if (m.state == State.OPEN) {
            require(block.timestamp > m.acceptBy, "ArcadeEscrow: accept window open");
            require(msg.sender == m.creator, "ArcadeEscrow: not creator");
            m.state = State.REFUNDED;
            _pay(m.creator, m.wager);
            emit MatchRefunded(matchId, m.creator, m.wager);
            return;
        }

        if (m.state == State.ACCEPTED) {
            require(block.timestamp > m.resolveBy, "ArcadeEscrow: resolve window open");
            require(msg.sender == m.creator, "ArcadeEscrow: not creator");
            m.state = State.REFUNDED;
            uint256 payout = uint256(m.wager) * 2;
            _pay(m.creator, payout);
            emit MatchRefunded(matchId, m.creator, payout);
            return;
        }

        revert("ArcadeEscrow: refund unavailable");
    }

    function cancel(uint256 matchId) external nonReentrant onlyRole(DEFAULT_ADMIN_ROLE) {
        Match storage m = matches[matchId];
        require(m.state == State.OPEN, "ArcadeEscrow: not open");
        m.state = State.CANCELED;
        _pay(m.creator, m.wager);
        emit MatchCanceled(matchId);
    }

    function _pay(address to, uint256 amount) private {
        (bool ok, ) = to.call{value: amount}("");
        require(ok, "ArcadeEscrow: transfer failed");
    }
}
