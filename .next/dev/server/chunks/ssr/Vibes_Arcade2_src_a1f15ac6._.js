module.exports = [
"[project]/Vibes/Arcade2/src/components/WalletStatus.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WalletStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useConnection.js [app-ssr] (ecmascript) <export useConnection as useAccount>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useBalance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useConnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/wagmi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function WalletStatus() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__["useAccount"])();
    const { data: balance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBalance"])({
        address,
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monadTestnet"].id,
        query: {
            enabled: Boolean(address)
        }
    });
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    const { connect, connectors, isPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnect"])();
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDisconnect"])();
    const isCorrectChain = chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monadTestnet"].id;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Wallet"
                }, void 0, false, {
                    fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "muted",
                    children: "Loading wallet status..."
                }, void 0, false, {
                    fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Wallet"
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: [
                            "Connected: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                children: address
                            }, void 0, false, {
                                fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                                lineNumber: 42,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: [
                            "Balance:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                children: balance?.formatted ? `${Number(balance.formatted).toFixed(4)} ${balance.symbol || "MON"}` : "Loading..."
                            }, void 0, false, {
                                fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: isCorrectChain ? "success" : "error",
                        children: isCorrectChain ? "Monad Testnet" : `Wrong network (${chainId})`
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "secondary",
                        onClick: ()=>disconnect(),
                        children: "Disconnect"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: "Connect your wallet to view challenges."
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>connect({
                                connector: connectors[0]
                            }),
                        disabled: isPending,
                        children: "Connect Wallet"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/Vibes/Arcade2/src/lib/contracts/arcadeEscrow.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ESCROW_STATE",
    ()=>ESCROW_STATE,
    "arcadeEscrowAbi",
    ()=>arcadeEscrowAbi,
    "getArcadeEscrowAddress",
    ()=>getArcadeEscrowAddress
]);
const arcadeEscrowAbi = [
    {
        inputs: [
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
            },
            {
                internalType: "bytes32",
                name: "metaHash",
                type: "bytes32"
            }
        ],
        name: "createChallenge",
        outputs: [
            {
                internalType: "uint256",
                name: "matchId",
                type: "uint256"
            }
        ],
        stateMutability: "payable",
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
        name: "acceptChallenge",
        outputs: [],
        stateMutability: "payable",
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
        name: "refund",
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
                internalType: "uint96",
                name: "wager",
                type: "uint96"
            },
            {
                internalType: "uint32",
                name: "gameId",
                type: "uint32"
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
                internalType: "uint8",
                name: "state",
                type: "uint8"
            },
            {
                internalType: "address",
                name: "winner",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "metaHash",
                type: "bytes32"
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
                internalType: "uint256",
                name: "wager",
                type: "uint256"
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
                internalType: "bytes32",
                name: "metaHash",
                type: "bytes32"
            }
        ],
        name: "ChallengeCreated",
        type: "event"
    }
];
const ESCROW_STATE = {
    NONE: 0,
    OPEN: 1,
    ACCEPTED: 2,
    FINALIZED: 3,
    REFUNDED: 4,
    CANCELED: 5
};
function getArcadeEscrowAddress() {
    const value = process.env.NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS;
    if (!value) return null;
    return value;
}
}),
"[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PendingChallenges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/utils/unit/formatEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/abitype/dist/esm/human-readable/parseAbiItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useConnection.js [app-ssr] (ecmascript) <export useConnection as useAccount>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/contracts/arcadeEscrow.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const MIN_WAGER_WEI = 10n ** 18n;
function PendingChallenges() {
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__["useAccount"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const escrowAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArcadeEscrowAddress"])();
    const [challenges, setChallenges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Idle");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const isReady = Boolean(address && publicClient && escrowAddress);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isReady) {
            setChallenges([]);
            return;
        }
        let cancelled = false;
        const load = async ()=>{
            if (!publicClient || !escrowAddress || !address) return;
            setStatus("Loading...");
            setError("");
            try {
                const logs = await publicClient.getLogs({
                    address: escrowAddress,
                    event: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbiItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAbiItem"])("event ChallengeCreated(uint256 indexed matchId,address indexed creator,address indexed opponent,uint256 wager,uint32 gameId,uint64 acceptBy,uint64 resolveBy,bytes32 metaHash)"),
                    fromBlock: 0n
                });
                const decoded = logs.map((log)=>{
                    const event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeEventLog"])({
                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arcadeEscrowAbi"],
                        data: log.data,
                        topics: log.topics
                    });
                    return {
                        matchId: event.args.matchId,
                        creator: event.args.creator,
                        opponent: event.args.opponent,
                        wager: event.args.wager,
                        acceptBy: event.args.acceptBy,
                        resolveBy: event.args.resolveBy
                    };
                }).filter((event)=>event.opponent.toLowerCase() === address.toLowerCase());
                const withState = await Promise.all(decoded.map(async (event)=>{
                    const match = await publicClient.readContract({
                        address: escrowAddress,
                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arcadeEscrowAbi"],
                        functionName: "matches",
                        args: [
                            event.matchId
                        ]
                    });
                    return {
                        event,
                        state: match[7]
                    };
                }));
                const pending = withState.filter((item)=>item.state === __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ESCROW_STATE"].OPEN && item.event.wager >= MIN_WAGER_WEI).map((item)=>item.event).sort((a, b)=>a.wager > b.wager ? -1 : 1);
                if (!cancelled) {
                    setChallenges(pending);
                    setStatus("Loaded");
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err?.shortMessage || err?.message || "Failed to load challenges");
                    setStatus("Error");
                }
            }
        };
        load();
        return ()=>{
            cancelled = true;
        };
    }, [
        address,
        escrowAddress,
        isReady,
        publicClient,
        refreshKey
    ]);
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!escrowAddress) return "Missing NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS";
        if (!address) return "Connect wallet to view pending challenges.";
        if (error) return error;
        if (status === "Loading...") return "Loading challenges...";
        if (!challenges.length) return "No pending challenges.";
        return null;
    }, [
        address,
        challenges.length,
        error,
        escrowAddress,
        status
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Pending Challenges"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "secondary",
                        onClick: ()=>setRefreshKey((prev)=>prev + 1),
                        children: "Refresh"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            content ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: content
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                lineNumber: 135,
                columnNumber: 18
            }, this) : null,
            challenges.map((challenge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "challenge-item",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mono",
                            children: [
                                "Match #",
                                challenge.matchId.toString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "muted",
                            children: [
                                "From: ",
                                challenge.creator
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "Wager: ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(challenge.wager),
                                        " MON"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                                    lineNumber: 142,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, challenge.matchId.toString(), true, {
                    fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
"[project]/Vibes/Arcade2/src/lib/contracts/sudokuArena.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    }
];
function getSudokuArenaAddress() {
    const value = process.env.NEXT_PUBLIC_SUDOKU_ARENA_ADDRESS;
    if (!value) return null;
    return value;
}
}),
"[project]/Vibes/Arcade2/src/components/SudokuGame.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SudokuGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/contracts/sudokuArena.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const emptyGrid = ()=>Array.from({
        length: 9
    }, ()=>Array(9).fill(0));
function SudokuGame({ matchId }) {
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>emptyGrid());
    const [pendingCells, setPendingCells] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [txHash, setTxHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { writeContractAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { isLoading: isConfirming } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: txHash || undefined
    });
    const arenaAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSudokuArenaAddress"])();
    const canSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Boolean(arenaAddress && Number.isFinite(matchId));
    }, [
        arenaAddress,
        matchId
    ]);
    const handleChange = async (row, col, value)=>{
        if (!canSubmit) {
            setError("Missing NEXT_PUBLIC_SUDOKU_ARENA_ADDRESS");
            return;
        }
        setError("");
        setStatus("");
        const digit = value === "" ? 0 : Number(value);
        if (Number.isNaN(digit) || digit < 0 || digit > 9) return;
        const key = `${row}-${col}`;
        setPendingCells((prev)=>new Set(prev).add(key));
        try {
            setStatus("Submitting move...");
            const hash = await writeContractAsync({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sudokuArenaAbi"],
                address: arenaAddress,
                functionName: "submitMove",
                args: [
                    BigInt(matchId),
                    row,
                    col,
                    digit
                ]
            });
            setTxHash(hash);
            setStatus("Move submitted. Waiting for confirmation...");
            setGrid((prev)=>{
                const next = prev.map((r)=>[
                        ...r
                    ]);
                next[row][col] = digit;
                return next;
            });
        } catch (err) {
            setError(err?.shortMessage || err?.message || "Move failed");
        } finally{
            setPendingCells((prev)=>{
                const next = new Set(prev);
                next.delete(key);
                return next;
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Sudoku (On-chain moves)"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "muted",
                        children: [
                            "Match #",
                            matchId
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            !arenaAddress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "error",
                children: "Missing NEXT_PUBLIC_SUDOKU_ARENA_ADDRESS"
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sudoku-grid",
                children: grid.map((row, r)=>row.map((value, c)=>{
                        const key = `${r}-${c}`;
                        const isPending = pendingCells.has(key);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: `sudoku-cell ${isPending ? "pending" : ""}`,
                            inputMode: "numeric",
                            maxLength: 1,
                            value: value === 0 ? "" : value,
                            onChange: (event)=>handleChange(r, c, event.target.value),
                            disabled: !canSubmit || isConfirming
                        }, key, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                            lineNumber: 91,
                            columnNumber: 15
                        }, this);
                    }))
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: status
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 105,
                columnNumber: 17
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "error",
                children: error
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 106,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[project]/Vibes/Arcade2/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$WalletStatus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/components/WalletStatus.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$PendingChallenges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$SudokuGame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/components/SudokuGame.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container grid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "stack",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Arcade2"
                            }, void 0, false, {
                                fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: "Connect your wallet to see incoming wagers."
                            }, void 0, false, {
                                fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$WalletStatus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$SudokuGame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        matchId: 1
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$PendingChallenges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Vibes_Arcade2_src_a1f15ac6._.js.map