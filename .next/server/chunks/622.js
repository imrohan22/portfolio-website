"use strict";
exports.id = 622;
exports.ids = [622];
exports.modules = {

/***/ 4419:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/specialization.aed491f1.jpeg","height":2000,"width":3000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAoAn/xAAbEAACAgMBAAAAAAAAAAAAAAACAwEEERIiAP/aAAgBAQABPwBzLF4aIveWlluJgedec+//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIxcf/aAAgBAgEBPwC3LT//xAAZEQABBQAAAAAAAAAAAAAAAAABAAIRIVH/2gAIAQMBAT8ANBsYv//Z","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_construction_specialization_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4419);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





// import '../css/Specialization.css';
function Specialization({ specializationData  }) {
    const loaderProp = ({ src  })=>{
        return src;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "specializations",
                className: "jsx-6566db39918aa16e" + " " + "specialization-section ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-6566db39918aa16e" + " " + "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-6566db39918aa16e" + " " + "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-6566db39918aa16e" + " " + "col-md-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-6566db39918aa16e",
                                    children: "Our Specialisation"
                                })
                            }),
                            specializationData?.specializationComponent?.map((specialization, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-6566db39918aa16e" + " " + "col-md-6 mb-4 text-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-6566db39918aa16e" + " " + "spl-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-6566db39918aa16e",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        src: specialization.image.url ? specialization.image.url : "",
                                                        className: "img-fluid",
                                                        alt: "logo",
                                                        width: 100,
                                                        height: 100,
                                                        loader: loaderProp
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-6566db39918aa16e",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "jsx-6566db39918aa16e",
                                                        children: specialization.title
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-6566db39918aa16e",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "jsx-6566db39918aa16e",
                                                        children: specialization.description
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }, index))
                        ]
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "6566db39918aa16e",
                children: ".specialization-section{padding:20px;min-height:400px;height:100%;border-bottom:1px solid#e5e0df;position:relative}.spl-card{width:400px;padding:25px 25px;margin:auto;background:#f1c40f;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;height:100%}.spl-card img{width:350px;height:350px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;margin-bottom:15px}.spl-card h2{word-wrap:break-word;font-size:1.8em;margin-bottom:20px;color:#000}.spl-card p{word-wrap:break-word;font-size:1.1em;line-height:1.8;color:#000}.specialization-section h1{font-weight:900;font-size:2.5em;line-height:3;color:#fff}@media(max-width:900px){.specialization-section{padding:10px 5px}.spl-card{width:100%}.spl-card img{width:100%;margin-bottom:10px;height:50vh}.spl-card h2{font-size:1.3em}.specialization-section h1{font-size:1.5em}}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Specialization);


/***/ })

};
;