"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/contact/page",{

/***/ "(app-pages-browser)/./app/(routes)/contact/page.tsx":
/*!***************************************!*\
  !*** ./app/(routes)/contact/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/avatar */ \"(app-pages-browser)/./components/avatar.tsx\");\n/* harmony import */ var _components_container_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/container-page */ \"(app-pages-browser)/./components/container-page.tsx\");\n/* harmony import */ var _components_transition_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/transition-page */ \"(app-pages-browser)/./components/transition-page.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n // Importa axios para hacer la solicitud HTTP\nconst AboutMePage = ()=>{\n    _s();\n    // Define el estado inicial para los campos del formulario\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        phone: \"\",\n        message: \"\"\n    });\n    // Maneja los cambios en los campos del formulario\n    const handleInputChange = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    // Maneja la función de envío del formulario\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            // Realiza la solicitud POST a la URL especificada con los datos del formulario\n            await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3001/contacts\", formData);\n            // Limpia el formulario después de enviar\n            setFormData({\n                name: \"\",\n                email: \"\",\n                phone: \"\",\n                message: \"\"\n            });\n            console.log(\"Formulario enviado con \\xe9xito\");\n        } catch (error) {\n            console.error(\"Error al enviar el formulario:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_transition_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_container_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10\",\n                        children: \"\\xa1Bienvenido a mi mundo digital!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center md:text-left md:text-xl mt-6\",\n                        children: \"\\xa1Gracias por visitar mi p\\xe1gina! No dudes en ponerte en contacto conmigo si quieres charlar sobre juegos, anime, tecnolog\\xeda o cualquier otra cosa.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"mt-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        className: \"text-lg mb-2\",\n                                        children: \"Nombre:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"name\",\n                                        name: \"name\",\n                                        value: formData.name,\n                                        onChange: handleInputChange,\n                                        className: \"border border-gray-300 p-2 rounded-lg mb-4 text-black\",\n                                        required: true,\n                                        style: {\n                                            maxWidth: \"700px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        className: \"text-lg mb-2\",\n                                        children: \"Correo Electr\\xf3nico:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        name: \"email\",\n                                        value: formData.email,\n                                        onChange: handleInputChange,\n                                        className: \"border border-gray-300 p-2 rounded-lg mb-4 text-black\",\n                                        required: true,\n                                        style: {\n                                            maxWidth: \"700px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"phone\",\n                                        className: \"text-lg mb-2\",\n                                        children: \"Tel\\xe9fono:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"phone\",\n                                        name: \"phone\",\n                                        value: formData.phone,\n                                        onChange: handleInputChange,\n                                        className: \"border border-gray-300 p-2 rounded-lg mb-4 text-black\",\n                                        required: true,\n                                        style: {\n                                            maxWidth: \"700px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"message\",\n                                        className: \"text-lg mb-2\",\n                                        children: \"Mensaje:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        id: \"message\",\n                                        name: \"message\",\n                                        value: formData.message,\n                                        onChange: handleInputChange,\n                                        className: \"border border-gray-300 p-2 rounded-lg mb-4 text-black\",\n                                        required: true,\n                                        style: {\n                                            maxWidth: \"700px\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                                children: \"Enviar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jorge\\\\Desktop\\\\portfolio-_-back\\\\app\\\\(routes)\\\\contact\\\\page.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(AboutMePage, \"e9/fDJwDq1Cw/X21eZjMRdn52i4=\");\n_c = AboutMePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMePage);\nvar _c;\n$RefreshReg$(_c, \"AboutMePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9jb250YWN0L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDeUQ7QUFDWjtBQUNXO0FBQ0U7QUFDaEMsQ0FBQyw2Q0FBNkM7QUFVeEUsTUFBTUssY0FBYzs7SUFDaEIsMERBQTBEO0lBQzFELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBVztRQUMvQ1EsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87UUFDUEMsU0FBUztJQUNiO0lBRUEsa0RBQWtEO0lBQ2xELE1BQU1DLG9CQUFvQixDQUFDQztRQUN2Qk4sWUFBWTtZQUNSLEdBQUdELFFBQVE7WUFDWCxDQUFDTyxFQUFFQyxNQUFNLENBQUNOLElBQUksQ0FBQyxFQUFFSyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7UUFDbkM7SUFDSjtJQUVBLDRDQUE0QztJQUM1QyxNQUFNQyxlQUFlLE9BQU9IO1FBQ3hCQSxFQUFFSSxjQUFjO1FBQ2hCLElBQUk7WUFDQSwrRUFBK0U7WUFDL0UsTUFBTWIsNkNBQUtBLENBQUNjLElBQUksQ0FBQyxrQ0FBa0NaO1lBQ25ELHlDQUF5QztZQUN6Q0MsWUFBWTtnQkFDUkMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsT0FBTztnQkFDUEMsU0FBUztZQUNiO1lBQ0FRLFFBQVFDLEdBQUcsQ0FBQztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDWkYsUUFBUUUsS0FBSyxDQUFDLGtDQUFrQ0E7UUFDcEQ7SUFDSjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ2xCLG1FQUFjQTs7Ozs7MEJBQ2YsOERBQUNELGtFQUFhQTs7a0NBQ1YsOERBQUNELHNEQUFNQTs7Ozs7a0NBQ1AsOERBQUNxQjt3QkFBR0MsV0FBVTtrQ0FBdUU7Ozs7OztrQ0FLckYsOERBQUNDO3dCQUFFRCxXQUFVO2tDQUEyQzs7Ozs7O2tDQUt4RCw4REFBQ0U7d0JBQUtDLFVBQVVWO3dCQUFjTyxXQUFVOzswQ0FDcEMsOERBQUNJO2dDQUFJSixXQUFVOztrREFDWCw4REFBQ0s7d0NBQU1DLFNBQVE7d0NBQU9OLFdBQVU7a0RBQWU7Ozs7OztrREFDL0MsOERBQUNPO3dDQUFNQyxNQUFLO3dDQUFPQyxJQUFHO3dDQUFPeEIsTUFBSzt3Q0FBT08sT0FBT1QsU0FBU0UsSUFBSTt3Q0FBRXlCLFVBQVVyQjt3Q0FBbUJXLFdBQVU7d0NBQXdEVyxRQUFRO3dDQUFDQyxPQUFPOzRDQUFFQyxVQUFVO3dDQUFROzs7Ozs7Ozs7Ozs7MENBRXRNLDhEQUFDVDtnQ0FBSUosV0FBVTs7a0RBQ1gsOERBQUNLO3dDQUFNQyxTQUFRO3dDQUFRTixXQUFVO2tEQUFlOzs7Ozs7a0RBQ2hELDhEQUFDTzt3Q0FBTUMsTUFBSzt3Q0FBUUMsSUFBRzt3Q0FBUXhCLE1BQUs7d0NBQVFPLE9BQU9ULFNBQVNHLEtBQUs7d0NBQUV3QixVQUFVckI7d0NBQW1CVyxXQUFVO3dDQUF3RFcsUUFBUTt3Q0FBQ0MsT0FBTzs0Q0FBRUMsVUFBVTt3Q0FBUTs7Ozs7Ozs7Ozs7OzBDQUUxTSw4REFBQ1Q7Z0NBQUlKLFdBQVU7O2tEQUNYLDhEQUFDSzt3Q0FBTUMsU0FBUTt3Q0FBUU4sV0FBVTtrREFBZTs7Ozs7O29DQUFpQjtrREFDakUsOERBQUNPO3dDQUFNQyxNQUFLO3dDQUFPQyxJQUFHO3dDQUFReEIsTUFBSzt3Q0FBUU8sT0FBT1QsU0FBU0ksS0FBSzt3Q0FBRXVCLFVBQVVyQjt3Q0FBbUJXLFdBQVU7d0NBQXdEVyxRQUFRO3dDQUFDQyxPQUFPOzRDQUFFQyxVQUFVO3dDQUFROzs7Ozs7Ozs7Ozs7MENBRXpNLDhEQUFDVDtnQ0FBSUosV0FBVTs7a0RBQ1gsOERBQUNLO3dDQUFNQyxTQUFRO3dDQUFVTixXQUFVO2tEQUFlOzs7Ozs7a0RBQ2xELDhEQUFDYzt3Q0FBU0wsSUFBRzt3Q0FBVXhCLE1BQUs7d0NBQVVPLE9BQU9ULFNBQVNLLE9BQU87d0NBQUVzQixVQUFVckI7d0NBQW1CVyxXQUFVO3dDQUF3RFcsUUFBUTt3Q0FBQ0MsT0FBTzs0Q0FBRUMsVUFBVTt3Q0FBUTs7Ozs7Ozs7Ozs7OzBDQUV0TSw4REFBQ0U7Z0NBQU9QLE1BQUs7Z0NBQVNSLFdBQVU7MENBQXVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszSDtHQXpFTWxCO0tBQUFBO0FBMkVOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm91dGVzKS9jb250YWN0L3BhZ2UudHN4PzhjYzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUsIEZvcm1FdmVudCwgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvYXZhdGFyXCI7XHJcbmltcG9ydCBDb250YWluZXJQYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvY29udGFpbmVyLXBhZ2VcIjtcclxuaW1wb3J0IFRyYW5zaXRpb25QYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvdHJhbnNpdGlvbi1wYWdlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7IC8vIEltcG9ydGEgYXhpb3MgcGFyYSBoYWNlciBsYSBzb2xpY2l0dWQgSFRUUFxyXG5cclxuLy8gRGVmaW5lIGxhIGludGVyZmF6IHBhcmEgbG9zIGRhdG9zIGRlbCBmb3JtdWxhcmlvXHJcbmludGVyZmFjZSBGb3JtRGF0YSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGhvbmU6IHN0cmluZzsgLy8gQWdyZWdhIGVsIGNhbXBvIHBob25lXHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEFib3V0TWVQYWdlID0gKCkgPT4ge1xyXG4gICAgLy8gRGVmaW5lIGVsIGVzdGFkbyBpbmljaWFsIHBhcmEgbG9zIGNhbXBvcyBkZWwgZm9ybXVsYXJpb1xyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxGb3JtRGF0YT4oe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgbWVzc2FnZTogJydcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1hbmVqYSBsb3MgY2FtYmlvcyBlbiBsb3MgY2FtcG9zIGRlbCBmb3JtdWxhcmlvXHJcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcclxuICAgICAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgICAgICAgIC4uLmZvcm1EYXRhLFxyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIE1hbmVqYSBsYSBmdW5jacOzbiBkZSBlbnbDrW8gZGVsIGZvcm11bGFyaW9cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBSZWFsaXphIGxhIHNvbGljaXR1ZCBQT1NUIGEgbGEgVVJMIGVzcGVjaWZpY2FkYSBjb24gbG9zIGRhdG9zIGRlbCBmb3JtdWxhcmlvXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9jb250YWN0cycsIGZvcm1EYXRhKTtcclxuICAgICAgICAgICAgLy8gTGltcGlhIGVsIGZvcm11bGFyaW8gZGVzcHXDqXMgZGUgZW52aWFyXHJcbiAgICAgICAgICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJydcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybXVsYXJpbyBlbnZpYWRvIGNvbiDDqXhpdG9cIik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGVudmlhciBlbCBmb3JtdWxhcmlvOlwiLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uUGFnZSAvPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyUGFnZT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBsZWFkaW5nLXRpZ2h0IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdCBtZDp0ZXh0LTV4bCBtZDptdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIMKhQmllbnZlbmlkbyBhIG1pIG11bmRvIGRpZ2l0YWwhXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1kOnRleHQtbGVmdCBtZDp0ZXh0LXhsIG10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICDCoUdyYWNpYXMgcG9yIHZpc2l0YXIgbWkgcMOhZ2luYSEgTm8gZHVkZXMgZW4gcG9uZXJ0ZSBlbiBjb250YWN0byBjb25taWdvIHNpIHF1aWVyZXMgY2hhcmxhciBzb2JyZSBqdWVnb3MsIGFuaW1lLCB0ZWNub2xvZ8OtYSBvIGN1YWxxdWllciBvdHJhIGNvc2EuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIEFncmVnYSBlbCBmb3JtdWxhcmlvICovfVxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1iLTJcIj5Ob21icmU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17Zm9ybURhdGEubmFtZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMiByb3VuZGVkLWxnIG1iLTQgdGV4dC1ibGFja1wiIHJlcXVpcmVkIHN0eWxlPXt7IG1heFdpZHRoOiAnNzAwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1iLTJcIj5Db3JyZW8gRWxlY3Ryw7NuaWNvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcC0yIHJvdW5kZWQtbGcgbWItNCB0ZXh0LWJsYWNrXCIgcmVxdWlyZWQgc3R5bGU9e3sgbWF4V2lkdGg6ICc3MDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiIGNsYXNzTmFtZT1cInRleHQtbGcgbWItMlwiPlRlbMOpZm9ubzo8L2xhYmVsPiB7LyogQWdyZWdhIGVsIGNhbXBvIHBob25lICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBob25lXCIgbmFtZT1cInBob25lXCIgdmFsdWU9e2Zvcm1EYXRhLnBob25lfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcC0yIHJvdW5kZWQtbGcgbWItNCB0ZXh0LWJsYWNrXCIgcmVxdWlyZWQgc3R5bGU9e3sgbWF4V2lkdGg6ICc3MDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCIgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi0yXCI+TWVuc2FqZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiB2YWx1ZT17Zm9ybURhdGEubWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMiByb3VuZGVkLWxnIG1iLTQgdGV4dC1ibGFja1wiIHJlcXVpcmVkIHN0eWxlPXt7IG1heFdpZHRoOiAnNzAwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIj5FbnZpYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Db250YWluZXJQYWdlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRNZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkF2YXRhciIsIkNvbnRhaW5lclBhZ2UiLCJUcmFuc2l0aW9uUGFnZSIsImF4aW9zIiwiQWJvdXRNZVBhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwibmFtZSIsImVtYWlsIiwicGhvbmUiLCJtZXNzYWdlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoMSIsImNsYXNzTmFtZSIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJzdHlsZSIsIm1heFdpZHRoIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/contact/page.tsx\n"));

/***/ })

});