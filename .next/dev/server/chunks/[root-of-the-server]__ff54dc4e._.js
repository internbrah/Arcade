module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Vibes/Arcade2/src/lib/contracts/sudokuArena.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSudokuArenaAddress",
    ()=>getSudokuArenaAddress,
    "sudokuArenaAbi",
    ()=>sudokuArenaAbi
]);
const sudokuArenaAbi = [
    {
        inputs: [
            {
                internalType: "uint32",
                name: "gameId",
                type: "uint32"
            }
        ],
        name: "createPveMatch",
        outputs: [
            {
                internalType: "uint256",
                name: "matchId",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "escrowMatchId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "opponent",
                type: "address"
            },
            {
                internalType: "uint32",
                name: "gameId",
                type: "uint32"
            },
            {
                internalType: "uint64",
                name: "acceptBy",
                type: "uint64"
            },
            {
                internalType: "uint64",
                name: "resolveBy",
                type: "uint64"
            }
        ],
        name: "createPvpMatch",
        outputs: [
            {
                internalType: "uint256",
                name: "matchId",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "matchId",
                type: "uint256"
            },
            {
                internalType: "uint8",
                name: "row",
                type: "uint8"
            },
            {
                internalType: "uint8",
                name: "col",
                type: "uint8"
            },
            {
                internalType: "uint8",
                name: "value",
                type: "uint8"
            }
        ],
        name: "submitMove",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "matchId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "player",
                type: "address"
            },
            {
                internalType: "uint8",
                name: "row",
                type: "uint8"
            },
            {
                internalType: "uint8",
                name: "col",
                type: "uint8"
            },
            {
                internalType: "uint8",
                name: "value",
                type: "uint8"
            }
        ],
        name: "submitMoveFor",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "matchId",
                type: "uint256"
            }
        ],
        name: "matches",
        outputs: [
            {
                internalType: "address",
                name: "creator",
                type: "address"
            },
            {
                internalType: "address",
                name: "opponent",
                type: "address"
            },
            {
                internalType: "bool",
                name: "isPvp",
                type: "bool"
            },
            {
                internalType: "uint8",
                name: "state",
                type: "uint8"
            },
            {
                internalType: "uint64",
                name: "createdAt",
                type: "uint64"
            },
            {
                internalType: "uint64",
                name: "acceptBy",
                type: "uint64"
            },
            {
                internalType: "uint64",
                name: "resolveBy",
                type: "uint64"
            },
            {
                internalType: "uint32",
                name: "gameId",
                type: "uint32"
            },
            {
                internalType: "uint256",
                name: "startBlock",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "creatorFinishBlock",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "opponentFinishBlock",
                type: "uint256"
            },
            {
                internalType: "uint8",
                name: "puzzleIndex",
                type: "uint8"
            },
            {
                internalType: "bytes32",
                name: "puzzleHash",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint8",
                name: "index",
                type: "uint8"
            }
        ],
        name: "getPackedPuzzle",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "matchId",
                type: "uint256"
            },
            {
                internalType: "uint8",
                name: "row",
                type: "uint8"
            },
            {
                internalType: "uint8",
                name: "col",
                type: "uint8"
            }
        ],
        name: "getCell",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "matchId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "creator",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "opponent",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "isPvp",
                type: "bool"
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "gameId",
                type: "uint32"
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "acceptBy",
                type: "uint64"
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "resolveBy",
                type: "uint64"
            },
            {
                indexed: false,
                internalType: "uint8",
                name: "puzzleIndex",
                type: "uint8"
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "puzzleHash",
                type: "bytes32"
            }
        ],
        name: "MatchCreated",
        type: "event"
    },
    {
        inputs: [],
        name: "nextMatchId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
function getSudokuArenaAddress() {
    const value = ("TURBOPACK compile-time value", "0xA975583FE5DeeE7FAf66B7fBf328D897060C7Ed9");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return value;
}
}),
"[project]/Vibes/Arcade2/src/lib/wagmi.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "monadTestnet",
    ()=>monadTestnet,
    "wagmiConfig",
    ()=>wagmiConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/clients/transports/http.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/@wagmi/core/dist/esm/createConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/@wagmi/core/dist/esm/connectors/injected.js [app-route] (ecmascript)");
;
;
const monadTestnet = {
    id: 10143,
    name: "Monad Testnet",
    nativeCurrency: {
        name: "MON",
        symbol: "MON",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                process.env.NEXT_PUBLIC_MONAD_RPC_URL || "https://testnet-rpc.monad.xyz"
            ]
        },
        public: {
            http: [
                process.env.NEXT_PUBLIC_MONAD_RPC_URL || "https://testnet-rpc.monad.xyz"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Monad Explorer",
            url: "https://testnet.monadexplorer.com"
        }
    }
};
const wagmiConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createConfig"])({
    chains: [
        monadTestnet
    ],
    connectors: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$connectors$2f$injected$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["injected"])()
    ],
    transports: {
        [monadTestnet.id]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["http"])()
    }
});
}),
"[project]/Vibes/Arcade2/src/app/api/relay/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/clients/createPublicClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/clients/createWalletClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/clients/transports/http.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$verifyMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/utils/signature/verifyMessage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$privateKeyToAccount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/accounts/privateKeyToAccount.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/contracts/sudokuArena.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/wagmi.ts [app-route] (ecmascript)");
;
;
;
;
;
function buildSessionMessage(player, expiresAt) {
    return `Arcade2 Relayer Session
address:${player}
expiresAt:${expiresAt}
chainId:${__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["monadTestnet"].id}`;
}
async function POST(req) {
    const body = await req.json();
    const { matchId, row, col, value, player, expiresAt, signature } = body;
    if (!process.env.RELAYER_PRIVATE_KEY || !process.env.MONAD_RPC_URL) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Relayer not configured"
        }, {
            status: 500
        });
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!player || !signature || !Number.isFinite(expiresAt)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid session payload"
        }, {
            status: 400
        });
    }
    if (Date.now() > expiresAt) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Session expired"
        }, {
            status: 401
        });
    }
    const message = buildSessionMessage(player, expiresAt);
    const isValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$verifyMessage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyMessage"])({
        address: player,
        message,
        signature
    });
    if (!isValid) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Invalid session signature"
        }, {
            status: 401
        });
    }
    const rawKey = process.env.RELAYER_PRIVATE_KEY || "";
    const normalizedKey = rawKey.startsWith("0x") ? rawKey : `0x${rawKey}`;
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$privateKeyToAccount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["privateKeyToAccount"])(normalizedKey);
    const transport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["http"])(process.env.MONAD_RPC_URL);
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPublicClient"])({
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["monadTestnet"],
        transport
    });
    const walletClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createWalletClient"])({
        account,
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["monadTestnet"],
        transport
    });
    try {
        const hash = await walletClient.writeContract({
            address: ("TURBOPACK compile-time value", "0xA975583FE5DeeE7FAf66B7fBf328D897060C7Ed9"),
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sudokuArenaAbi"],
            functionName: "submitMoveFor",
            args: [
                BigInt(matchId),
                player,
                row,
                col,
                value
            ]
        });
        await publicClient.waitForTransactionReceipt({
            hash
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            hash
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err?.shortMessage || err?.message || "Relay failed"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ff54dc4e._.js.map