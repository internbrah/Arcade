module.exports = [
"[project]/Vibes/Arcade2/src/components/WalletStatus.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WalletStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/utils/unit/formatEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useConnection.js [app-ssr] (ecmascript) <export useConnection as useAccount>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useBalance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useConnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useDisconnect$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useDisconnect.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/wagmi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function WalletStatus() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__["useAccount"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const { data: balance, isLoading: isBalanceLoading, isError: isBalanceError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useBalance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBalance"])({
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
    const [directBalance, setDirectBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted || !address || !publicClient || !isCorrectChain) {
            setDirectBalance(null);
            return;
        }
        let cancelled = false;
        const loadBalance = async ()=>{
            try {
                const value = await publicClient.getBalance({
                    address
                });
                if (!cancelled) {
                    setDirectBalance((0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(value));
                }
            } catch  {
                if (!cancelled) {
                    setDirectBalance(null);
                }
            }
        };
        loadBalance();
        return ()=>{
            cancelled = true;
        };
    }, [
        address,
        isCorrectChain,
        mounted,
        publicClient
    ]);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: "Wallet"
                }, void 0, false, {
                    fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "muted",
                    children: "Loading wallet status..."
                }, void 0, false, {
                    fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card wallet-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Wallet"
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                lineNumber: 74,
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
                                lineNumber: 78,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "muted",
                        children: [
                            "Balance:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mono",
                                children: isBalanceError ? "Unavailable" : isBalanceLoading && !directBalance ? "Loading..." : directBalance ? `${Number(directBalance).toFixed(4)} MON` : balance?.formatted ? `${Number(balance.formatted).toFixed(4)} ${balance.symbol || "MON"}` : "0.0000 MON"
                            }, void 0, false, {
                                fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: isCorrectChain ? "success" : "error",
                        children: isCorrectChain ? "Monad Testnet" : `Wrong network (${chainId})`
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "secondary",
                        onClick: ()=>disconnect(),
                        children: "Disconnect"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
                        lineNumber: 97,
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
                        lineNumber: 103,
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
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/Vibes/Arcade2/src/components/WalletStatus.tsx",
        lineNumber: 73,
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
    const value = ("TURBOPACK compile-time value", "0x1eaC5D89E6e5958d978eeD15CC255B77f668CaF7");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
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
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isReady = Boolean(address && publicClient && escrowAddress && mounted);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
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
        if (!mounted) return "Loading challenges...";
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
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "secondary",
                        onClick: ()=>setRefreshKey((prev)=>prev + 1),
                        children: "Refresh"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            content ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: content
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                lineNumber: 141,
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
                            lineNumber: 145,
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
                            lineNumber: 146,
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
                                    lineNumber: 148,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, challenge.matchId.toString(), true, {
                    fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/Vibes/Arcade2/src/components/PendingChallenges.tsx",
        lineNumber: 133,
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
"[project]/Vibes/Arcade2/src/components/SudokuGame.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SudokuGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useConnection.js [app-ssr] (ecmascript) <export useConnection as useAccount>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useSignMessage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useSwitchChain.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/contracts/sudokuArena.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/wagmi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const emptyGrid = ()=>Array.from({
        length: 9
    }, ()=>Array(9).fill(0));
function unpackPuzzle(packed) {
    const bytes = Array.from(Buffer.from(packed.slice(2), "hex"));
    const flat = [];
    for(let i = 0; i < 81; i += 1){
        const byte = bytes[Math.floor(i / 2)] || 0;
        const value = i % 2 === 0 ? byte >> 4 : byte & 0x0f;
        flat.push(value);
    }
    const grid = [];
    for(let r = 0; r < 9; r += 1){
        grid.push(flat.slice(r * 9, r * 9 + 9));
    }
    return grid;
}
function SudokuGame() {
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    const { switchChain } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSwitchChain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSwitchChain"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const [matchIdInput, setMatchIdInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0");
    const [matchId, setMatchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>emptyGrid());
    const [givens, setGivens] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>emptyGrid());
    const [pendingCells, setPendingCells] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [txHash, setTxHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCell, setSelectedCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedValue, setSelectedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [useRelayer, setUseRelayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [relayerSession, setRelayerSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { writeContractAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { signMessageAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useSignMessage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSignMessage"])();
    const { isLoading: isConfirming } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: txHash || undefined
    });
    const arenaAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSudokuArenaAddress"])();
    const isMonad = chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monadTestnet"].id;
    const canUseArena = Boolean(arenaAddress && isMonad);
    const canSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Boolean(canUseArena && matchId && matchId > 0);
    }, [
        canUseArena,
        matchId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) return;
        const stored = localStorage.getItem("arcade2-relayer-session");
        if (!stored) return;
        try {
            const parsed = JSON.parse(stored);
            if (Date.now() < parsed.expiresAt) {
                setRelayerSession(parsed);
            }
        } catch  {
            localStorage.removeItem("arcade2-relayer-session");
        }
    }, [
        mounted
    ]);
    const invalidCells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const next = new Set();
        const markInvalid = (row, col)=>{
            next.add(`${row}-${col}`);
        };
        for(let r = 0; r < 9; r += 1){
            for(let c = 0; c < 9; c += 1){
                const value = grid[r][c];
                if (value === 0) continue;
                for(let cc = 0; cc < 9; cc += 1){
                    if (cc !== c && grid[r][cc] === value) {
                        markInvalid(r, c);
                        markInvalid(r, cc);
                    }
                }
                for(let rr = 0; rr < 9; rr += 1){
                    if (rr !== r && grid[rr][c] === value) {
                        markInvalid(r, c);
                        markInvalid(rr, c);
                    }
                }
                const boxRow = Math.floor(r / 3) * 3;
                const boxCol = Math.floor(c / 3) * 3;
                for(let rr = boxRow; rr < boxRow + 3; rr += 1){
                    for(let cc = boxCol; cc < boxCol + 3; cc += 1){
                        if ((rr !== r || cc !== c) && grid[rr][cc] === value) {
                            markInvalid(r, c);
                            markInvalid(rr, cc);
                        }
                    }
                }
            }
        }
        return next;
    }, [
        grid
    ]);
    const isComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (grid.some((row)=>row.some((value)=>value === 0))) return false;
        return invalidCells.size === 0;
    }, [
        grid,
        invalidCells.size
    ]);
    const isConfirmed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return isComplete && pendingCells.size === 0 && !isConfirming;
    }, [
        isComplete,
        pendingCells.size,
        isConfirming
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (txHash && !isConfirming) {
            setStatus("Move confirmed.");
        }
    }, [
        txHash,
        isConfirming
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!publicClient || !arenaAddress || !matchId || matchId <= 0) {
            setGrid(emptyGrid());
            setGivens(emptyGrid());
            return;
        }
        let cancelled = false;
        const load = async ()=>{
            try {
                setStatus("Loading puzzle...");
                const match = await publicClient.readContract({
                    address: arenaAddress,
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sudokuArenaAbi"],
                    functionName: "matches",
                    args: [
                        BigInt(matchId)
                    ]
                });
                const puzzleIndex = match[11];
                const packed = await publicClient.readContract({
                    address: arenaAddress,
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sudokuArenaAbi"],
                    functionName: "getPackedPuzzle",
                    args: [
                        puzzleIndex
                    ]
                });
                const decoded = unpackPuzzle(packed);
                if (!cancelled) {
                    setGivens(decoded);
                    setGrid(decoded.map((row)=>row.map((value)=>value)));
                    setStatus("Puzzle loaded");
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err?.shortMessage || err?.message || "Failed to load puzzle");
                    setStatus("");
                }
            }
        };
        load();
        return ()=>{
            cancelled = true;
        };
    }, [
        arenaAddress,
        matchId,
        publicClient
    ]);
    const handleCreatePve = async ()=>{
        if (!arenaAddress) {
            setError("Missing NEXT_PUBLIC_SUDOKU_ARENA_ADDRESS");
            return;
        }
        if (!isMonad) {
            setError("Switch to Monad Testnet to create a match");
            return;
        }
        setError("");
        setStatus("");
        setTxHash(null);
        try {
            setStatus("Creating PvE match...");
            const hash = await writeContractAsync({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sudokuArenaAbi"],
                address: arenaAddress,
                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monadTestnet"].id,
                functionName: "createPveMatch",
                args: [
                    1
                ]
            });
            setTxHash(hash);
            setStatus("Waiting for match creation...");
            await publicClient?.waitForTransactionReceipt({
                hash
            });
            let createdId = null;
            const receipt = await publicClient?.getTransactionReceipt({
                hash
            });
            const matchLog = receipt?.logs.find((l)=>l.address.toLowerCase() === arenaAddress.toLowerCase());
            if (matchLog) {
                const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeEventLog"])({
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sudokuArenaAbi"],
                    data: matchLog.data,
                    topics: matchLog.topics
                });
                if (decoded.eventName === "MatchCreated") {
                    createdId = Number(decoded.args.matchId);
                }
            }
            if (!createdId && publicClient) {
                const nextId = await publicClient.readContract({
                    address: arenaAddress,
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sudokuArenaAbi"],
                    functionName: "nextMatchId"
                });
                createdId = Number(nextId);
            }
            if (createdId) {
                setMatchId(createdId);
                setMatchIdInput(String(createdId));
                setStatus(`Match #${createdId} ready`);
            } else {
                setStatus("Match created, but could not read match id");
            }
        } catch (err) {
            setError(err?.shortMessage || err?.message || "Match creation failed");
            setStatus("");
        }
    };
    const handleLoadMatch = ()=>{
        const id = Number(matchIdInput);
        if (!Number.isInteger(id) || id <= 0) {
            setError("Invalid match id");
            return;
        }
        setError("");
        setMatchId(id);
    };
    const handleChange = async (row, col, value)=>{
        if (!isMonad) {
            setError("Switch to Monad Testnet to submit moves");
            return;
        }
        if (!canSubmit) {
            setError("Create or load a match first");
            return;
        }
        if (givens[row][col] !== 0) {
            setError("Cannot change a fixed cell");
            return;
        }
        setError("");
        setStatus("");
        const digit = value === "" ? 0 : Number(value);
        if (Number.isNaN(digit) || digit < 0 || digit > 9) return;
        setSelectedValue(digit);
        setSelectedCell({
            row,
            col
        });
        const key = `${row}-${col}`;
        setPendingCells((prev)=>new Set(prev).add(key));
        try {
            setStatus("Submitting move...");
            if (useRelayer && relayerSession && address) {
                const response = await fetch("/api/relay", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        matchId,
                        row,
                        col,
                        value: digit,
                        player: address,
                        expiresAt: relayerSession.expiresAt,
                        signature: relayerSession.signature
                    })
                });
                let json = null;
                const contentType = response.headers.get("content-type") || "";
                if (contentType.includes("application/json")) {
                    json = await response.json();
                }
                if (!response.ok) {
                    const fallback = json?.error || `Relayer failed (${response.status})`;
                    throw new Error(fallback);
                }
                if (json?.hash) {
                    setTxHash(json.hash);
                }
                setStatus("Move relayed. Waiting for confirmation...");
            } else {
                const hash = await writeContractAsync({
                    abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sudokuArenaAbi"],
                    address: arenaAddress,
                    chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monadTestnet"].id,
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
            }
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
    const handleEnableRelayer = async ()=>{
        if (!address) {
            setError("Connect your wallet first");
            return;
        }
        const expiresAt = Date.now() + 1000 * 60 * 60 * 6;
        const message = `Arcade2 Relayer Session
address:${address}
expiresAt:${expiresAt}
chainId:${__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monadTestnet"].id}`;
        try {
            const signature = await signMessageAsync({
                message
            });
            const session = {
                expiresAt,
                signature
            };
            localStorage.setItem("arcade2-relayer-session", JSON.stringify(session));
            setRelayerSession(session);
            setError("");
            setStatus("Relayer session enabled");
        } catch (err) {
            setError(err?.shortMessage || err?.message || "Relayer auth failed");
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
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "muted",
                        children: matchId ? `Match #${matchId}` : "No match loaded"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            !arenaAddress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "error",
                children: "Missing NEXT_PUBLIC_SUDOKU_ARENA_ADDRESS"
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 400,
                columnNumber: 9
            }, this) : null,
            !mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: "Loading match controls..."
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 403,
                columnNumber: 9
            }, this) : null,
            mounted && !isMonad && arenaAddress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "error",
                        children: "Wrong network. Switch to Monad Testnet."
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "secondary",
                        onClick: ()=>switchChain({
                                chainId: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monadTestnet"].id
                            }),
                        children: "Switch Network"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 406,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreatePve,
                        disabled: !mounted || !address || !arenaAddress || !isMonad,
                        children: "Create PvE Match"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                        lineNumber: 415,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: "1",
                                step: "1",
                                value: matchIdInput,
                                onChange: (event)=>setMatchIdInput(event.target.value),
                                disabled: !mounted
                            }, void 0, false, {
                                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "secondary",
                                onClick: handleLoadMatch,
                                disabled: !mounted,
                                children: "Load Match"
                            }, void 0, false, {
                                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 414,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "row muted",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: useRelayer,
                                onChange: (event)=>setUseRelayer(event.target.checked),
                                disabled: !mounted
                            }, void 0, false, {
                                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                                lineNumber: 438,
                                columnNumber: 11
                            }, this),
                            "Use relayer (fewer approvals)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this),
                    useRelayer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "secondary",
                        onClick: handleEnableRelayer,
                        disabled: !mounted || !address,
                        children: relayerSession ? "Relayer enabled" : "Enable relayer"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                        lineNumber: 447,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sudoku-grid",
                children: grid.map((row, r)=>row.map((value, c)=>{
                        const key = `${r}-${c}`;
                        const isPending = pendingCells.has(key);
                        const isFixed = givens[r][c] !== 0;
                        const isHighlighted = selectedValue > 0 && value === selectedValue;
                        const isRowCol = selectedCell && (selectedCell.row === r || selectedCell.col === c);
                        const isBox = selectedCell && Math.floor(selectedCell.row / 3) === Math.floor(r / 3) && Math.floor(selectedCell.col / 3) === Math.floor(c / 3);
                        const isInvalid = invalidCells.has(key);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: `sudoku-cell ${isPending ? "pending" : ""} ${isFixed ? "fixed" : ""} ${isHighlighted ? "highlight" : ""} ${isRowCol ? "rowcol" : ""} ${isBox ? "box" : ""} ${isInvalid ? "invalid" : ""}`,
                            inputMode: "numeric",
                            maxLength: 1,
                            value: value === 0 ? "" : value,
                            onChange: (event)=>handleChange(r, c, event.target.value),
                            onFocus: ()=>{
                                setSelectedValue(value);
                                setSelectedCell({
                                    row: r,
                                    col: c
                                });
                            },
                            onClick: ()=>{
                                setSelectedValue(value);
                                setSelectedCell({
                                    row: r,
                                    col: c
                                });
                            },
                            disabled: !canSubmit || isConfirming || isFixed,
                            style: {
                                borderRightWidth: c % 3 === 2 ? 2 : 1,
                                borderBottomWidth: r % 3 === 2 ? 2 : 1,
                                borderLeftWidth: c % 3 === 0 ? 2 : 1,
                                borderTopWidth: r % 3 === 0 ? 2 : 1,
                                borderRightColor: c % 3 === 2 ? "#4b4b5a" : undefined,
                                borderBottomColor: r % 3 === 2 ? "#4b4b5a" : undefined,
                                borderLeftColor: c % 3 === 0 ? "#4b4b5a" : undefined,
                                borderTopColor: r % 3 === 0 ? "#4b4b5a" : undefined
                            }
                        }, key, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                            lineNumber: 472,
                            columnNumber: 15
                        }, this);
                    }))
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            isComplete && !isConfirmed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "success",
                children: "Solved! Waiting for chain confirmation."
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 509,
                columnNumber: 9
            }, this) : null,
            isConfirmed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "success",
                children: "Solved! On-chain moves confirmed."
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 511,
                columnNumber: 22
            }, this) : null,
            status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: status
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 512,
                columnNumber: 17
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "error",
                children: error
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 513,
                columnNumber: 16
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: "Each number entry submits a transaction (including clears)."
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
                lineNumber: 514,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Vibes/Arcade2/src/components/SudokuGame.tsx",
        lineNumber: 391,
        columnNumber: 5
    }, this);
}
}),
"[project]/Vibes/Arcade2/src/components/CreateChallengeButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateChallengeButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function CreateChallengeButton({ onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "secondary",
        onClick: onClick,
        children: "Create Challenge"
    }, void 0, false, {
        fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeButton.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateChallengeModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/utils/abi/decodeEventLog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/utils/hash/keccak256.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/utils/unit/parseEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useConnection.js [app-ssr] (ecmascript) <export useConnection as useAccount>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/contracts/arcadeEscrow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/contracts/sudokuArena.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/wagmi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const MIN_WAGER = 1;
function CreateChallengeModal({ isOpen, onClose }) {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const [opponentInput, setOpponentInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [gameId, setGameId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [wager, setWager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1");
    const [acceptMinutes, setAcceptMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("30");
    const [resolveMinutes, setResolveMinutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("60");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [txHash, setTxHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { writeContractAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { isLoading: isConfirming, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: txHash || undefined
    });
    const isMonad = chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monadTestnet"].id;
    const escrowAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArcadeEscrowAddress"])();
    const arenaAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSudokuArenaAddress"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) {
            setStatus("");
            setError("");
            setTxHash(null);
        }
    }, [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isSuccess) return;
        setStatus("Challenge created!");
        const timer = setTimeout(()=>{
            onClose();
        }, 800);
        return ()=>clearTimeout(timer);
    }, [
        isSuccess,
        onClose
    ]);
    const canSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Boolean(isConnected && address && isMonad && escrowAddress);
    }, [
        isConnected,
        address,
        isMonad,
        escrowAddress
    ]);
    if (!isOpen) return null;
    const resolveOpponent = async ()=>{
        const raw = opponentInput.trim();
        if (!raw) {
            throw new Error("Opponent is required");
        }
        if (!isAddress(raw)) {
            throw new Error("Opponent must be a 0x address");
        }
        return raw;
    };
    const handleCreate = async ()=>{
        if (!address) return;
        setError("");
        setStatus("");
        setTxHash(null);
        if (!escrowAddress || !arenaAddress) {
            setError("Missing contract address");
            return;
        }
        if (!isConnected) {
            setError("Connect your wallet first");
            return;
        }
        if (!isMonad) {
            setError("Wrong network. Switch to Monad Testnet.");
            return;
        }
        let opponentAddress;
        try {
            setStatus("Resolving opponent...");
            opponentAddress = await resolveOpponent();
        } catch (err) {
            setError(err?.message || "Failed to resolve opponent");
            setStatus("");
            return;
        }
        if (opponentAddress.toLowerCase() === address.toLowerCase()) {
            setError("Opponent cannot be your own address");
            setStatus("");
            return;
        }
        let wagerWei;
        try {
            wagerWei = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEther"])(wager);
        } catch  {
            setError("Invalid wager");
            setStatus("");
            return;
        }
        if (wagerWei < (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEther"])(String(MIN_WAGER))) {
            setError(`Wager must be at least ${MIN_WAGER} MON`);
            setStatus("");
            return;
        }
        const nowSeconds = Math.floor(Date.now() / 1000);
        const acceptBy = nowSeconds + Number(acceptMinutes) * 60;
        const resolveBy = acceptBy + Number(resolveMinutes) * 60;
        if (!Number.isFinite(acceptBy) || acceptBy <= nowSeconds) {
            setError("Accept window must be in the future");
            setStatus("");
            return;
        }
        if (!Number.isFinite(resolveBy) || resolveBy <= acceptBy) {
            setError("Resolve window must be after accept window");
            setStatus("");
            return;
        }
        const meta = {
            gameId,
            wager: wagerWei.toString(),
            createdBy: address,
            opponent: opponentAddress,
            createdAtMs: Date.now()
        };
        const metaHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringToHex"])(JSON.stringify(meta)));
        try {
            setStatus("Sending transaction...");
            const hash = await writeContractAsync({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arcadeEscrowAbi"],
                address: escrowAddress,
                functionName: "createChallenge",
                args: [
                    opponentAddress,
                    gameId,
                    BigInt(acceptBy),
                    BigInt(resolveBy),
                    metaHash
                ],
                value: wagerWei
            });
            setTxHash(hash);
            setStatus("Challenge created. Linking PvP match...");
            const receipt = await publicClient?.waitForTransactionReceipt({
                hash
            });
            const log = receipt?.logs.find((l)=>l.address.toLowerCase() === escrowAddress.toLowerCase());
            if (!log) {
                setStatus("Challenge created. Match id not found.");
                return;
            }
            const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeEventLog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeEventLog"])({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arcadeEscrowAbi"],
                data: log.data,
                topics: log.topics
            });
            if (decoded.eventName !== "ChallengeCreated") {
                setStatus("Challenge created. Match id missing.");
                return;
            }
            const matchId = decoded.args.matchId;
            await writeContractAsync({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$sudokuArena$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sudokuArenaAbi"],
                address: arenaAddress,
                functionName: "createPvpMatch",
                args: [
                    matchId,
                    opponentAddress,
                    gameId,
                    BigInt(acceptBy),
                    BigInt(resolveBy)
                ]
            });
            setStatus(`PvP match linked (#${matchId.toString()}).`);
        } catch (err) {
            setError(err?.shortMessage || err?.message || "Transaction failed");
            setStatus("");
        }
    };
    const handleClose = ()=>{
        if (isConfirming) return;
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Create Challenge"
                        }, void 0, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "secondary",
                            onClick: handleClose,
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this),
                !escrowAddress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "error",
                    children: "Missing NEXT_PUBLIC_ARCADE_ESCROW_ADDRESS"
                }, void 0, false, {
                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "field",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Opponent"
                        }, void 0, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "0x...",
                            value: opponentInput,
                            onChange: (event)=>setOpponentInput(event.target.value)
                        }, void 0, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "field",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Game"
                        }, void 0, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: gameId,
                            onChange: (event)=>setGameId(Number(event.target.value)),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: 1,
                                children: "Sudoku"
                            }, void 0, false, {
                                fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                                lineNumber: 231,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "field",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Wager (MON)"
                        }, void 0, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            min: MIN_WAGER,
                            step: "0.01",
                            value: wager,
                            onChange: (event)=>setWager(event.target.value)
                        }, void 0, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "field",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Accept window (minutes)"
                                }, void 0, false, {
                                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: "1",
                                    step: "1",
                                    value: acceptMinutes,
                                    onChange: (event)=>setAcceptMinutes(event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "field",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Resolve window (minutes)"
                                }, void 0, false, {
                                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    min: "1",
                                    step: "1",
                                    value: resolveMinutes,
                                    onChange: (event)=>setResolveMinutes(event.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCreate,
                            disabled: !canSubmit || isConfirming,
                            children: "Create challenge"
                        }, void 0, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this),
                        status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "muted",
                            children: status
                        }, void 0, false, {
                            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                            lineNumber: 273,
                            columnNumber: 21
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this),
                isConfirming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "muted",
                    children: "Waiting for confirmation..."
                }, void 0, false, {
                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                    lineNumber: 276,
                    columnNumber: 25
                }, this) : null,
                error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "error",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                    lineNumber: 277,
                    columnNumber: 18
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "muted",
                    children: [
                        "Minimum wager: ",
                        MIN_WAGER,
                        " MON."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
            lineNumber: 206,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
}),
"[project]/Vibes/Arcade2/src/components/RefundPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RefundPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useConnection.js [app-ssr] (ecmascript) <export useConnection as useAccount>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/contracts/arcadeEscrow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/lib/wagmi.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function RefundPanel() {
    const { isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__useConnection__as__useAccount$3e$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    const [matchId, setMatchId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [txHash, setTxHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { writeContractAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const { isLoading: isConfirming, isSuccess } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash: txHash || undefined
    });
    const escrowAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArcadeEscrowAddress"])();
    const isMonad = chainId === __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$wagmi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["monadTestnet"].id;
    const handleRefund = async ()=>{
        setError("");
        setStatus("");
        setTxHash(null);
        if (!escrowAddress) {
            setError("Missing contract address");
            return;
        }
        if (!isConnected) {
            setError("Connect your wallet first");
            return;
        }
        if (!isMonad) {
            setError("Wrong network. Switch to Monad Testnet.");
            return;
        }
        const id = Number(matchId);
        if (!Number.isInteger(id) || id <= 0) {
            setError("Invalid match id");
            return;
        }
        try {
            setStatus("Submitting refund...");
            const hash = await writeContractAsync({
                abi: __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$lib$2f$contracts$2f$arcadeEscrow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arcadeEscrowAbi"],
                address: escrowAddress,
                functionName: "refund",
                args: [
                    BigInt(id)
                ]
            });
            setTxHash(hash);
            setStatus("Refund submitted");
        } catch (err) {
            setError(err?.shortMessage || err?.message || "Refund failed");
            setStatus("");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Refund Challenge"
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/RefundPanel.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "muted",
                children: "Creator-only refunds after accept or resolve deadline."
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/RefundPanel.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Match ID"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/RefundPanel.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        min: "1",
                        step: "1",
                        value: matchId,
                        onChange: (event)=>setMatchId(event.target.value)
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/RefundPanel.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Vibes/Arcade2/src/components/RefundPanel.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleRefund,
                        disabled: isConfirming,
                        children: "Request refund"
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/RefundPanel.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "muted",
                        children: status
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/components/RefundPanel.tsx",
                        lineNumber: 82,
                        columnNumber: 19
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/Vibes/Arcade2/src/components/RefundPanel.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "success",
                children: "Refund confirmed"
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/RefundPanel.tsx",
                lineNumber: 84,
                columnNumber: 20
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "error",
                children: error
            }, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/components/RefundPanel.tsx",
                lineNumber: 85,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/Vibes/Arcade2/src/components/RefundPanel.tsx",
        lineNumber: 65,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$CreateChallengeButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/components/CreateChallengeButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$CreateChallengeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/components/CreateChallengeModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$RefundPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/src/components/RefundPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Vibes/Arcade2/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function HomePage() {
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container grid",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "stack",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "card hero-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: "Onchain Arcade"
                            }, void 0, false, {
                                fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: "Connect your wallet to see incoming wagers."
                            }, void 0, false, {
                                fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$WalletStatus$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$CreateChallengeButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onClick: ()=>setIsModalOpen(true)
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$CreateChallengeModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isModalOpen,
                        onClose: ()=>setIsModalOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$SudokuGame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$RefundPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Vibes$2f$Arcade2$2f$src$2f$components$2f$PendingChallenges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Vibes/Arcade2/src/app/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Vibes_Arcade2_src_71d70af6._.js.map