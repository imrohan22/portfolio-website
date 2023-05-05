"use strict";
exports.id = 881;
exports.ids = [881];
exports.modules = {

/***/ 881:
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5804);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__);





function Testimonial({ testimonialData  }) {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        }
    };
    const loaderProp = ({ src  })=>{
        return src;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "testimonial",
                className: "jsx-184fb222f10bd004" + " " + "py-5 border-bottom testimonial-section",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-184fb222f10bd004" + " " + "container px-5 my-5 px-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-184fb222f10bd004" + " " + "text-center mb-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "jsx-184fb222f10bd004" + " " + "fw-bolder display-3   d-inline",
                                children: "Customer testimonials"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-184fb222f10bd004" + " " + "row gx-5 justify-content-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default()), {
                                responsive: responsive,
                                children: testimonialData.testimonials.map((test, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-184fb222f10bd004" + " " + " text-center m-2 h-100 d-flex flex-column align-items-center testiminial-top-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    src: test.clientLogo.url,
                                                    className: "card-img-top",
                                                    alt: "...",
                                                    width: 100,
                                                    height: 100,
                                                    loader: loaderProp
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-184fb222f10bd004" + " " + "testiminial-card",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-184fb222f10bd004" + " " + "card-body",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                className: "jsx-184fb222f10bd004" + " " + "card-title",
                                                                children: test.clientName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-184fb222f10bd004",
                                                                children: test.testimonial
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, test.testimonial)
                                    }, index))
                            })
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "184fb222f10bd004",
                children: ".react-multi-carousel-list,.react-multi-carousel-track{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0}.testiminial-card{border:10px solid#efc41a;position:relative;padding:5px;padding-top:70px;width:100%;height:auto}.testiminial-top-card{position:relative;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:50%}.subbox{display:inline-block}.testiminial-top-card img{-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;width:130px;height:130px;margin-bottom:-70px;z-index:100}.carousel-control-prev,.carousel-control-next{background:#efc41a;height:50px;width:50px;margin:auto}@media(max-width:900px){.react-multi-carousel-list,.react-multi-carousel-track{-webkit-box-pack:start;-webkit-justify-content:start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:start}.testiminial-top-card img{width:100px;height:100px;margin-bottom:-55px}.testiminial-card{padding-top:50px}}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial);


/***/ })

};
;