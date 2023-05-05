"use strict";
exports.id = 331;
exports.ids = [331];
exports.modules = {

/***/ 4886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/award.2bf06e2b.jpg","height":400,"width":400,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAjBEz/8QAHRAAAAYDAQAAAAAAAAAAAAAAAgMREhMUAAEFIv/aAAgBAQABPwAskkPIsRjfYj0NfKNXP//EABgRAAMBAQAAAAAAAAAAAAAAAAECEQBh/9oACAECAQE/AEdjeGb/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIDEWH/2gAIAQMBAT8AtjqJ03P/2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5804);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_img_tamplate_2_assets_temp_2_award_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4886);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
// import '../css/Award.css';






function Award({ awardData  }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5,
            ariaLabel: "Large Desktop carousel"
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3,
            ariaLabel: "Desktop carousel"
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            ariaLabel: "Desktop carousel"
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            ariaLabel: "Desktop carousel"
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "award",
                className: "jsx-cdac90ee31bd7254" + " " + "award-section",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-cdac90ee31bd7254" + " " + "container-fluid container-fluid-section",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-cdac90ee31bd7254" + " " + "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-cdac90ee31bd7254" + " " + "col-md-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-cdac90ee31bd7254",
                                    children: "Award"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-cdac90ee31bd7254" + " " + "col-md-12 text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-cdac90ee31bd7254" + " " + "row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        responsive: responsive,
                                        children: awardData.map((award, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "jsx-cdac90ee31bd7254" + " " + "m-2 d-flex flex-column align-items-center award-top-card",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                            src: _public_img_tamplate_2_assets_temp_2_award_jpg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                                                            className: "card-img-top rounded-5",
                                                            alt: "awards"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-cdac90ee31bd7254" + " " + "award-card",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "jsx-cdac90ee31bd7254" + " " + "card-body",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                        className: "jsx-cdac90ee31bd7254" + " " + "card-title",
                                                                        children: award.title
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "jsx-cdac90ee31bd7254",
                                                                        children: award.year
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "jsx-cdac90ee31bd7254",
                                                                        children: award.description
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                }, award.title)
                                            }, index))
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "cdac90ee31bd7254",
                children: ".award-section{padding:20px;min-height:400px;height:100%;border-bottom:1px solid#e5e0df;position:relative}.award-section h1{font-weight:900;font-size:2.5em;line-height:3;color:#fff}.award-card{width:100%;border:10px solid#efc41a;position:relative;padding:5px;padding-top:80px;-webkit-border-top-left-radius:20px;-moz-border-radius-topleft:20px;border-top-left-radius:20px;-webkit-border-bottom-right-radius:20px;-moz-border-radius-bottomright:20px;border-bottom-right-radius:20px}.award-top-card{position:relative}.award-top-card .card-img-top{width:130px;height:130px;margin-bottom:-70px;margin-top:25px;z-index:100;background-color:#efc41a}.award-section h2{word-wrap:break-word;font-size:1.5em;margin:15px 5px;color:#fff}.award-section p{word-wrap:break-word;font-size:1em;line-height:1.5;color:#fff}.carousel-control-prev,.carousel-control-next{background:#efc41a;height:50px;width:50px;margin:auto}@media(max-width:900px){.award-section{padding:10px 5px}.award-top-card .card-img-top{width:100px;height:100px;margin-bottom:-55px}.award-top-card img{width:100px;height:100px;margin-bottom:-55px}.award-card{padding-top:50px}.award-section h1{font-size:1.5em}.award-section h2{font-size:1.3em;line-height:1}.award-section p{line-height:1.5}}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Award);


/***/ })

};
;