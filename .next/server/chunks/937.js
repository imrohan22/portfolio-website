"use strict";
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 4419:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/specialization.aed491f1.jpeg","height":2000,"width":3000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAoAn/xAAbEAACAgMBAAAAAAAAAAAAAAACAwEEERIiAP/aAAgBAQABPwBzLF4aIveWlluJgedec+//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIxcf/aAAgBAgEBPwC3LT//xAAZEQABBQAAAAAAAAAAAAAAAAABAAIRIVH/2gAIAQMBAT8ANBsYv//Z","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 7937:
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
/* harmony import */ var _public_img_construction_specialization_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4419);




// import '../css/Howwework.css';
function Howwework({ howWeWorkData  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "howWeWork",
                className: "jsx-5d16def3f22f2d8d" + " " + "howwework-section",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-5d16def3f22f2d8d" + " " + "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-5d16def3f22f2d8d" + " " + "row ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-5d16def3f22f2d8d" + " " + "col-md-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-5d16def3f22f2d8d",
                                    children: "How We Work"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-5d16def3f22f2d8d" + " " + "row howwework-line",
                            children: howWeWorkData.component.map((howwework, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-5d16def3f22f2d8d" + " " + "col-md-12 mb-3",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-5d16def3f22f2d8d" + " " + "how-card d-flex ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-5d16def3f22f2d8d" + " " + "how-number-box",
                                                    children: howwework.step
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-5d16def3f22f2d8d",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-5d16def3f22f2d8d",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                className: "jsx-5d16def3f22f2d8d",
                                                                children: howwework.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-5d16def3f22f2d8d",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-5d16def3f22f2d8d",
                                                                children: howwework.description
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, index))
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "5d16def3f22f2d8d",
                children: '.howwework-section::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;opacity:.1;background:url("img/construction/howwork.jpeg");background-position:center center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.howwework-section{padding:35px 20px;min-height:400px;height:100%;border-bottom:1px solid#e5e0df;position:relative}.howwework-section h1{font-weight:400;font-size:3em;color:#fff;z-index:1;line-height:2.5}.how-number-box{padding:0px 14px;width:45px;height:45px;background:#776108;border:1px solid#776108;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;font-size:1.8em;color:#fff;margin-right:20px;z-index:5}.how-card{margin-bottom:50px}.how-card h2{word-wrap:break-word;font-size:1.8em;margin-bottom:15px;color:#fff}.how-card p{word-wrap:break-word;font-size:1.1em;line-height:1.8;color:#fff}.howwework-line{position:relative;padding-top:25px;overflow:hidden}.howwework-line::after{content:"";position:absolute;width:3px;left:33px;top:0;height:100%;background:#776108}@media(max-width:900px){.howwework-section{padding:10px 5px}.how-card h2{font-size:1.3em}.howwework-section h1{font-size:1.5em}}'
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Howwework);


/***/ })

};
;