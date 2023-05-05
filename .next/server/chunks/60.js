"use strict";
exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 1060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



// import '../css/Getintouch.css';
function Getintouch({ getInTouchData  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "getInTouch",
                className: "jsx-ad382a32d4a77164" + " " + "getintouch-section",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-ad382a32d4a77164" + " " + "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-ad382a32d4a77164" + " " + "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-ad382a32d4a77164" + " " + "col-md-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-ad382a32d4a77164",
                                    children: "Get in Touch"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                            className: "jsx-ad382a32d4a77164",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-ad382a32d4a77164" + " " + "row",
                                children: [
                                    getInTouchData.fields.map((form, index)=>{
                                        if (form.type == "select") {
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-ad382a32d4a77164" + " " + "col-md-6 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        className: "jsx-ad382a32d4a77164" + " " + "form-label",
                                                        children: [
                                                            form.label,
                                                            ":"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                        name: form.name,
                                                        className: "jsx-ad382a32d4a77164",
                                                        children: form.options.map((opt, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: opt.value,
                                                                className: "jsx-ad382a32d4a77164",
                                                                children: opt.text
                                                            }, index))
                                                    })
                                                ]
                                            }, index);
                                        } else if (form.type == "textarea") {
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-ad382a32d4a77164" + " " + "col-md-6 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        className: "jsx-ad382a32d4a77164" + " " + "form-label",
                                                        children: [
                                                            form.label,
                                                            ":"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        type: form.type,
                                                        name: form.name,
                                                        rows: "4",
                                                        placeholder: form.label,
                                                        className: "jsx-ad382a32d4a77164"
                                                    })
                                                ]
                                            }, index);
                                        } else {
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "jsx-ad382a32d4a77164" + " " + "col-md-6 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        className: "jsx-ad382a32d4a77164" + " " + "form-label",
                                                        children: [
                                                            form.label,
                                                            ":"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: form.type,
                                                        name: form.name,
                                                        placeholder: form.label,
                                                        className: "jsx-ad382a32d4a77164"
                                                    })
                                                ]
                                            }, index);
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-ad382a32d4a77164" + " " + "col-md-12 mb-3 text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "submit",
                                            className: "jsx-ad382a32d4a77164" + " " + "btn",
                                            children: getInTouchData.submitButtonText
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "ad382a32d4a77164",
                children: ".getintouch-section{padding:35px 20px;min-height:100px;height:100%;border-bottom:1px solid#e5e0df;position:relative}.getintouch-section h1{font-weight:400;font-size:3em;line-height:3;color:#fff;z-index:1}.getintouch-section h2{word-wrap:break-word;font-size:1.8em;margin-bottom:20px;color:#fff}.getintouch-section p{word-wrap:break-word;font-size:1.1em;line-height:1;color:#fff}.getintouch-section label{font-size:1.1em;line-height:2;color:#fff}.getintouch-section input,select,textarea{font-size:1.1em;line-height:2;width:100%;padding:10px 15px;color:#fff;background-color:#776108;border:1px solid#776108;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;outline:none}.getintouch-section select{padding:17px 15px}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#fff}input:-moz-placeholder,textarea:-moz-placeholder{color:#fff}input::-moz-placeholder,textarea::-moz-placeholder{color:#fff}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#fff}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#fff}input::placeholder,textarea::placeholder{color:#fff}.getintouch-section button{background-color:#efc41a;color:#000;padding:10px 15px}.getintouch-section button:hover{background-color:#efc41a;color:#000}@media(max-width:900px){.getintouch-section{padding:10px 5px}.getintouch-section h1{font-size:1.5em}.getintouch-section h2{font-size:1.3em;line-height:1}.getintouch-section p{line-height:1.5}}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Getintouch);


/***/ })

};
;