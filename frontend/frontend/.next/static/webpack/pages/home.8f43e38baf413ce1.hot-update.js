"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Container,Typography!=!@mui/material */ \"./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Container,Typography!=!@mui/material */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Container,Typography!=!@mui/material */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/useQuery.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction home() {\n    _s();\n    const testQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)({\n        queryKey: [\n            \"test\"\n        ],\n        queryFn: async ()=>{\n            return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:8000/api/test\").then((res)=>{\n                return res.data;\n            });\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            style: {\n                boxShadow: \"0px 0px 10px\",\n                padding: \"15px\",\n                backgroundColor: \"orange\",\n                borderRadius: \"9px\",\n                marginTop: \"15vh\",\n                width: \"100vh\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    variant: \"h4\",\n                    children: \" QC Bike Management System \"\n                }, void 0, false, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"https://github.com/Decoretum\",\n                    target: \"blank\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        variant: \"subtitle2\",\n                        style: {\n                            display: \"flex\",\n                            marginTop: \"5vh\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                style: {\n                                    backgroundColor: \"green\"\n                                },\n                                children: \" GE \"\n                            }, void 0, false, {\n                                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                style: {\n                                    marginTop: \"0.75vh\",\n                                    marginLeft: \"1vw\"\n                                },\n                                children: \" Gael Estrera \"\n                            }, void 0, false, {\n                                fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    variant: \"subtitle1\",\n                    style: {\n                        marginTop: \"6vh\"\n                    },\n                    children: \"This is an application geared towards managing the inventory and orders pertaining to Bicycles.\"\n                }, void 0, false, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(home, \"s7SHJA32oA1JdyZoOJwB0E8V4U0=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNsQjtBQUNjO0FBQ3JDO0FBQ0k7QUFFZCxTQUFTUzs7SUFFcEIsTUFBTUMsWUFBWU4sK0RBQVFBLENBQUM7UUFDdkJPLFVBQVU7WUFBQztTQUFPO1FBQ2xCQyxTQUFTO1lBQ0wsT0FBT0wsNkNBQUtBLENBQUNNLEdBQUcsQ0FBQyxrQ0FDaEJDLElBQUksQ0FBQ0MsQ0FBQUE7Z0JBQVEsT0FBT0EsSUFBSUMsSUFBSTtZQUFBO1FBQ2pDO0lBQ0o7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ2YsMkdBQVNBO1lBQUNnQixPQUFPO2dCQUFDQyxXQUFXO2dCQUFnQkMsU0FBUztnQkFBUUMsaUJBQWlCO2dCQUFVQyxjQUFjO2dCQUFPQyxXQUFXO2dCQUFRQyxPQUFPO1lBQU87OzhCQUM1SSw4REFBQ3JCLDJHQUFVQTtvQkFBQ3NCLFNBQVE7OEJBQUs7Ozs7Ozs4QkFDekIsOERBQUNoQixrREFBSUE7b0JBQUNpQixNQUFLO29CQUErQkMsUUFBTzs4QkFDN0MsNEVBQUN4QiwyR0FBVUE7d0JBQUNzQixTQUFRO3dCQUFZUCxPQUFPOzRCQUFDVSxTQUFTOzRCQUFRTCxXQUFXO3dCQUFLOzswQ0FDckUsOERBQUN0QiwyR0FBTUE7Z0NBQUNpQixPQUFPO29DQUFDRyxpQkFBaUI7Z0NBQU87MENBQUc7Ozs7OzswQ0FDM0MsOERBQUNsQiwyR0FBVUE7Z0NBQUNlLE9BQU87b0NBQUNLLFdBQVc7b0NBQVVNLFlBQVk7Z0NBQUs7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUlyRSw4REFBQzFCLDJHQUFVQTtvQkFBQ3NCLFNBQVE7b0JBQVlQLE9BQU87d0JBQUNLLFdBQVc7b0JBQUs7OEJBQUc7Ozs7Ozs7Ozs7Ozs7QUFPM0U7R0E1QndCYjs7UUFFRkwsMkRBQVFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lLmpzPzBiMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBDb250YWluZXIsIFR5cG9ncmFwaHksIEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiXG5pbXBvcnQgeyBkZWVwT3JhbmdlLCBkZWVwUHVycGxlIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKXtcblxuICAgIGNvbnN0IHRlc3RRdWVyeSA9IHVzZVF1ZXJ5KHtcbiAgICAgICAgcXVlcnlLZXk6IFsndGVzdCddLFxuICAgICAgICBxdWVyeUZuOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Rlc3QnKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtyZXR1cm4gcmVzLmRhdGF9KVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDb250YWluZXIgc3R5bGU9e3tib3hTaGFkb3c6ICcwcHggMHB4IDEwcHgnLCBwYWRkaW5nOiAnMTVweCcsIGJhY2tncm91bmRDb2xvcjogJ29yYW5nZScsIGJvcmRlclJhZGl1czogJzlweCcsIG1hcmdpblRvcDogJzE1dmgnLCB3aWR0aDogJzEwMHZoJ319PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0Jz4gUUMgQmlrZSBNYW5hZ2VtZW50IFN5c3RlbSA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9EZWNvcmV0dW1cIiB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Ub3A6ICc1dmgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nfX0+IEdFIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwLjc1dmgnLCBtYXJnaW5MZWZ0OiAnMXZ3J319PiBHYWVsIEVzdHJlcmEgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0nc3VidGl0bGUxJyBzdHlsZT17e21hcmdpblRvcDogJzZ2aCd9fT5cbiAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBhbiBhcHBsaWNhdGlvbiBnZWFyZWQgdG93YXJkcyBtYW5hZ2luZyB0aGUgaW52ZW50b3J5IGFuZCBvcmRlcnMgcGVydGFpbmluZyB0byBCaWN5Y2xlcy5cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIkF2YXRhciIsIkNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJCb3giLCJ1c2VRdWVyeSIsImRlZXBPcmFuZ2UiLCJkZWVwUHVycGxlIiwiYXhpb3MiLCJMaW5rIiwiaG9tZSIsInRlc3RRdWVyeSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3R5bGUiLCJib3hTaGFkb3ciLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwid2lkdGgiLCJ2YXJpYW50IiwiaHJlZiIsInRhcmdldCIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home.js\n"));

/***/ })

});