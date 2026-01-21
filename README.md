# Arcade2

## Setup

Install deps:

```
npm install
```

Create `.env` in `Arcade2/` with:

```
DEPLOYER_PRIVATE_KEY=0xYOUR_PRIVATE_KEY
MONAD_RPC_URL=https://testnet-rpc.monad.xyz
RELAYER_PRIVATE_KEY=0xYOUR_RELAYER_PRIVATE_KEY
RELAYER_ADDRESS=0xYOUR_RELAYER_ADDRESS

NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS=0xYOUR_ESCROW_ADDRESS
NEXT_PUBLIC_SUDOKU_ARENA_ADDRESS=0xYOUR_SUDOKU_ARENA_ADDRESS
NEXT_PUBLIC_MONAD_RPC_URL=https://testnet-rpc.monad.xyz
```

## Deploy (Monad testnet)

```
npm run deploy:monad
```
