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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Chip,Container,Typography!=!@mui/material */ \"./node_modules/@mui/material/Container/Container.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Chip,Container,Typography!=!@mui/material */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Chip,Container,Typography!=!@mui/material */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,Box,Chip,Container,Typography!=!@mui/material */ \"./node_modules/@mui/material/Chip/Chip.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/useQuery.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction home() {\n    _s();\n    const testQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)({\n        queryKey: [\n            \"test\"\n        ],\n        queryFn: async ()=>{\n            return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/test\").then((res)=>{\n                return res.data;\n            });\n        }\n    });\n    const handleClick = (e)=>{\n        e.preventDefault();\n        router.push(\"https://github.com/Decoretum\");\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            style: {\n                boxShadow: \"0px 0px 10px\",\n                padding: \"15px\",\n                backgroundColor: \"#DE8F5F\",\n                borderRadius: \"9px\",\n                marginTop: \"15vh\",\n                minWidth: \"500px\",\n                width: \"50vw\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    variant: \"h4\",\n                    style: {\n                        fontWeight: \"100\"\n                    },\n                    children: \" Bisikleta para sa Atenista \"\n                }, void 0, false, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    variant: \"h6\",\n                    style: {\n                        fontWeight: \"100\"\n                    },\n                    children: \" Bike Management System \"\n                }, void 0, false, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    variant: \"subtitle2\",\n                    style: {\n                        display: \"flex\",\n                        marginTop: \"5vh\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            style: {\n                                backgroundColor: \"green\",\n                                color: \"white\",\n                                padding: \"10px\"\n                            },\n                            children: \" GE \"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            style: {\n                                marginTop: \"0.75vh\",\n                                marginLeft: \"1vw\",\n                                fontWeight: \"300\"\n                            },\n                            children: \" Gael Estrera \"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            label: \"Software Developer\",\n                            onClick: handleClick,\n                            style: {\n                                marginLeft: \"2vw\",\n                                color: \"white\",\n                                backgroundColor: \"#113946\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                    lineNumber: 30,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    variant: \"h6\",\n                    style: {\n                        marginTop: \"6vh\"\n                    },\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: \"Overview\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 36,\n                            columnNumber: 70\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_Box_Chip_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    variant: \"subtitle1\",\n                    style: {\n                        marginTop: \"6vh\"\n                    },\n                    children: [\n                        \"Hi there! This is Gael Estrera, a senior MIS student from Ateneo de Manila University. This system was created inline with the requirements for \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            children: \"CSCI 180.05 - Special Topics in Languages: Enterprise Systems Programming\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 39,\n                            columnNumber: 47\n                        }, this),\n                        \". However this system can still be integrated into any clients that may need this. \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 40,\n                            columnNumber: 94\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 40,\n                            columnNumber: 99\n                        }, this),\n                        \"This is an application geared towards managing the inventory and orders pertaining to Bicycles. This system is able to do the following functions: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 43,\n                            columnNumber: 46\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 43,\n                            columnNumber: 51\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \" Do CRUD (Create, Read, Update, and Delete) Bicycle Information in the Database \"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \" Handle orders / transactions relating to Bicycles in the database \"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \" Categorize bicycles and do transactions upon them \"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \" Update stock of bicycles based on transaction \"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \" Update prices \"\n                        }, void 0, false, {\n                            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Gamadan/Desktop/CSCI180.05Project/frontend/frontend/src/pages/home.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(home, \"iG856eebMXzW5FIzFRvUFRhqNtY=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RTtBQUN4QjtBQUNjO0FBQ3JDO0FBQ0k7QUFDVztBQUV6QixTQUFTVzs7SUFFcEIsTUFBTUMsWUFBWVAsK0RBQVFBLENBQUM7UUFDdkJRLFVBQVU7WUFBQztTQUFPO1FBQ2xCQyxTQUFTO1lBQ0wsT0FBT04sNkNBQUtBLENBQUNPLEdBQUcsQ0FBQyxrQ0FDaEJDLElBQUksQ0FBQ0MsQ0FBQUE7Z0JBQVEsT0FBT0EsSUFBSUMsSUFBSTtZQUFBO1FBQ2pDO0lBQ0o7SUFFQSxNQUFNQyxjQUFjLENBQUNDO1FBQ2pCQSxFQUFFQyxjQUFjO1FBQ2hCQyxPQUFPQyxJQUFJLENBQUM7SUFDaEI7SUFFQSxNQUFNRCxTQUFTWixzREFBU0E7SUFFeEIscUJBQ0k7a0JBQ0ksNEVBQUNULGdIQUFTQTtZQUFDdUIsT0FBTztnQkFBQ0MsV0FBVztnQkFBZ0JDLFNBQVM7Z0JBQVFDLGlCQUFpQjtnQkFBV0MsY0FBYztnQkFBT0MsV0FBVztnQkFBUUMsVUFBVTtnQkFBU0MsT0FBTztZQUFNOzs4QkFDL0osOERBQUM3QixnSEFBVUE7b0JBQUM4QixTQUFRO29CQUFLUixPQUFPO3dCQUFDUyxZQUFZO29CQUFLOzhCQUFHOzs7Ozs7OEJBQ3JELDhEQUFDL0IsZ0hBQVVBO29CQUFDOEIsU0FBUTtvQkFBS1IsT0FBTzt3QkFBQ1MsWUFBWTtvQkFBSzs4QkFBRzs7Ozs7OzhCQUNqRCw4REFBQy9CLGdIQUFVQTtvQkFBQzhCLFNBQVE7b0JBQVlSLE9BQU87d0JBQUNVLFNBQVM7d0JBQVFMLFdBQVc7b0JBQUs7O3NDQUNyRSw4REFBQzdCLGdIQUFNQTs0QkFBQ3dCLE9BQU87Z0NBQUNHLGlCQUFpQjtnQ0FBU1EsT0FBTztnQ0FBU1QsU0FBUzs0QkFBTTtzQ0FBRzs7Ozs7O3NDQUM1RSw4REFBQ3hCLGdIQUFVQTs0QkFBQ3NCLE9BQU87Z0NBQUNLLFdBQVc7Z0NBQVVPLFlBQVk7Z0NBQU9ILFlBQVk7NEJBQUs7c0NBQUc7Ozs7OztzQ0FDaEYsOERBQUM3QixnSEFBSUE7NEJBQUNpQyxPQUFNOzRCQUFxQkMsU0FBU25COzRCQUFhSyxPQUFPO2dDQUFDWSxZQUFZO2dDQUFPRCxPQUFPO2dDQUFTUixpQkFBaUI7NEJBQVM7Ozs7Ozs7Ozs7Ozs4QkFHcEksOERBQUN6QixnSEFBVUE7b0JBQUM4QixTQUFRO29CQUFLUixPQUFPO3dCQUFDSyxXQUFXO29CQUFLOzt3QkFBRztzQ0FBQyw4REFBQ1U7c0NBQUU7Ozs7Ozt3QkFBWTs7Ozs7Ozs4QkFDcEUsOERBQUNyQyxnSEFBVUE7b0JBQUM4QixTQUFRO29CQUFZUixPQUFPO3dCQUFDSyxXQUFXO29CQUFLOzt3QkFBRztzQ0FFN0IsOERBQUNVO3NDQUFFOzs7Ozs7d0JBQTZFO3NDQUNqQyw4REFBQ0M7Ozs7O3NDQUFJLDhEQUFDQTs7Ozs7d0JBQUk7c0NBRzFELDhEQUFDQTs7Ozs7c0NBQUksOERBQUNBOzs7OztzQ0FDL0IsOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNBO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNBO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNBO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNBO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhCO0dBOUN3QjlCOztRQUVGTiwyREFBUUE7UUFhWEssa0RBQVNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ob21lLmpzPzBiMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXZhdGFyLCBDb250YWluZXIsIFR5cG9ncmFwaHksIEJveCwgQ2hpcCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiXG5pbXBvcnQgeyBkZWVwT3JhbmdlLCBkZWVwUHVycGxlIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpe1xuXG4gICAgY29uc3QgdGVzdFF1ZXJ5ID0gdXNlUXVlcnkoe1xuICAgICAgICBxdWVyeUtleTogWyd0ZXN0J10sXG4gICAgICAgIHF1ZXJ5Rm46IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdGVzdCcpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge3JldHVybiByZXMuZGF0YX0pXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJvdXRlci5wdXNoKCdodHRwczovL2dpdGh1Yi5jb20vRGVjb3JldHVtJylcbiAgICB9IFxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7Ym94U2hhZG93OiAnMHB4IDBweCAxMHB4JywgcGFkZGluZzogJzE1cHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjREU4RjVGJywgYm9yZGVyUmFkaXVzOiAnOXB4JywgbWFyZ2luVG9wOiAnMTV2aCcsIG1pbldpZHRoOiAnNTAwcHgnLCB3aWR0aDogJzUwdncnfX0+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDQnIHN0eWxlPXt7Zm9udFdlaWdodDogJzEwMCd9fT4gQmlzaWtsZXRhIHBhcmEgc2EgQXRlbmlzdGEgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBzdHlsZT17e2ZvbnRXZWlnaHQ6ICcxMDAnfX0+IEJpa2UgTWFuYWdlbWVudCBTeXN0ZW0gPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Ub3A6ICc1dmgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLCBjb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzEwcHgnfX0+IEdFIDwvQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwLjc1dmgnLCBtYXJnaW5MZWZ0OiAnMXZ3JywgZm9udFdlaWdodDogJzMwMCd9fT4gR2FlbCBFc3RyZXJhIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGlwIGxhYmVsPVwiU29mdHdhcmUgRGV2ZWxvcGVyXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IHN0eWxlPXt7bWFyZ2luTGVmdDogJzJ2dycsIGNvbG9yOiAnd2hpdGUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMTEzOTQ2J319IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBzdHlsZT17e21hcmdpblRvcDogJzZ2aCd9fT4gPGk+T3ZlcnZpZXc8L2k+IDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnIHN0eWxlPXt7bWFyZ2luVG9wOiAnNnZoJ319PlxuICAgICAgICAgICAgICAgICAgICBIaSB0aGVyZSEgVGhpcyBpcyBHYWVsIEVzdHJlcmEsIGEgc2VuaW9yIE1JUyBzdHVkZW50IGZyb20gQXRlbmVvIGRlIE1hbmlsYSBVbml2ZXJzaXR5LiBUaGlzIHN5c3RlbSB3YXMgY3JlYXRlZCBpbmxpbmVcbiAgICAgICAgICAgICAgICAgICAgd2l0aCB0aGUgcmVxdWlyZW1lbnRzIGZvciA8aT5DU0NJIDE4MC4wNSAtIFNwZWNpYWwgVG9waWNzIGluIExhbmd1YWdlczogRW50ZXJwcmlzZSBTeXN0ZW1zIFByb2dyYW1taW5nPC9pPi4gSG93ZXZlclxuICAgICAgICAgICAgICAgICAgICB0aGlzIHN5c3RlbSBjYW4gc3RpbGwgYmUgaW50ZWdyYXRlZCBpbnRvIGFueSBjbGllbnRzIHRoYXQgbWF5IG5lZWQgdGhpcy4gPGJyLz48YnIvPlxuXG4gICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYW4gYXBwbGljYXRpb24gZ2VhcmVkIHRvd2FyZHMgbWFuYWdpbmcgdGhlIGludmVudG9yeSBhbmQgb3JkZXJzIHBlcnRhaW5pbmcgdG8gQmljeWNsZXMuIFRoaXMgc3lzdGVtIGlzIGFibGUgdG8gZG9cbiAgICAgICAgICAgICAgICAgICAgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6IDxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiBEbyBDUlVEIChDcmVhdGUsIFJlYWQsIFVwZGF0ZSwgYW5kIERlbGV0ZSkgQmljeWNsZSBJbmZvcm1hdGlvbiBpbiB0aGUgRGF0YWJhc2UgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiBIYW5kbGUgb3JkZXJzIC8gdHJhbnNhY3Rpb25zIHJlbGF0aW5nIHRvIEJpY3ljbGVzIGluIHRoZSBkYXRhYmFzZSA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+IENhdGVnb3JpemUgYmljeWNsZXMgYW5kIGRvIHRyYW5zYWN0aW9ucyB1cG9uIHRoZW0gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiBVcGRhdGUgc3RvY2sgb2YgYmljeWNsZXMgYmFzZWQgb24gdHJhbnNhY3Rpb24gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiBVcGRhdGUgcHJpY2VzIDwvbGk+XG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJBdmF0YXIiLCJDb250YWluZXIiLCJUeXBvZ3JhcGh5IiwiQm94IiwiQ2hpcCIsInVzZVF1ZXJ5IiwiZGVlcE9yYW5nZSIsImRlZXBQdXJwbGUiLCJheGlvcyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJob21lIiwidGVzdFF1ZXJ5IiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRlciIsInB1c2giLCJzdHlsZSIsImJveFNoYWRvdyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJtaW5XaWR0aCIsIndpZHRoIiwidmFyaWFudCIsImZvbnRXZWlnaHQiLCJkaXNwbGF5IiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwibGFiZWwiLCJvbkNsaWNrIiwiaSIsImJyIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home.js\n"));

/***/ })

});