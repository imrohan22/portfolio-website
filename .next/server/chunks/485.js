"use strict";
exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 1485:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5804);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_4__);
// import '../css/Testimonial.css';





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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "testimonial",
                className: "jsx-b89ba0c879487e56" + " " + "testimonial-section",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-b89ba0c879487e56" + " " + "container-fluid container-fluid-section",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-b89ba0c879487e56" + " " + "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-b89ba0c879487e56" + " " + "col-md-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-b89ba0c879487e56",
                                    children: "Testimonial"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-b89ba0c879487e56" + " " + "row ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default()), {
                                responsive: responsive,
                                children: testimonialData.testimonials.map((test, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-b89ba0c879487e56" + " " + " text-center m-2 h-100 d-flex flex-column align-items-center testiminial-top-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: test.clientLogo.url,
                                                    className: "card-img-top",
                                                    alt: "...",
                                                    width: 100,
                                                    height: 100,
                                                    loader: loaderProp
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-b89ba0c879487e56" + " " + "testiminial-card",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-b89ba0c879487e56" + " " + "card-body",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                className: "jsx-b89ba0c879487e56" + " " + "card-title",
                                                                children: test.clientName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-b89ba0c879487e56",
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
                id: "b89ba0c879487e56",
                children: ".testimonial-section{padding:20px;min-height:400px;height:100%;border-bottom:1px solid#e5e0df;position:relative}.test-data{-webkit-box-shadow:0 1px 4px rgb(0 0 0/30%),0 0 40px rgb(255 251 251/10%)inset;-moz-box-shadow:0 1px 4px rgb(0 0 0/30%),0 0 40px rgb(255 251 251/10%)inset;box-shadow:0 1px 4px rgb(0 0 0/30%),0 0 40px rgb(255 251 251/10%)inset;width:100%;height:auto;padding:0px;margin:0;list-style-type:none;overflow:auto;position:relative;-webkit-border-radius:0px 0px 0 0;-moz-border-radius:0px 0px 0 0;border-radius:0px 0px 0 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;background-image:-webkit-linear-gradient(left,white,white),-webkit-linear-gradient(left,white,white),-webkit-linear-gradient(left,rgba(0,0,20,.5),rgba(255,255,255,0)),-webkit-linear-gradient(right,rgba(0,0,20,.5),rgba(255,255,255,0));background-image:-moz-linear-gradient(left,white,white),-moz-linear-gradient(left,white,white),-moz-linear-gradient(left,rgba(0,0,20,.5),rgba(255,255,255,0)),-moz-linear-gradient(right,rgba(0,0,20,.5),rgba(255,255,255,0));background-image:-o-linear-gradient(left,white,white),-o-linear-gradient(left,white,white),-o-linear-gradient(left,rgba(0,0,20,.5),rgba(255,255,255,0)),-o-linear-gradient(right,rgba(0,0,20,.5),rgba(255,255,255,0));background-image:linear-gradient(to right,white,white),linear-gradient(to right,white,white),linear-gradient(to right,rgba(0,0,20,.5),rgba(255,255,255,0)),linear-gradient(to left,rgba(0,0,20,.5),rgba(255,255,255,0));background-position:left center,right center,left center,right center;background-repeat:no-repeat;-webkit-background-size:20px 100%,20px 100%,20px 100%,20px 100%;-moz-background-size:20px 100%,20px 100%,20px 100%,20px 100%;-o-background-size:20px 100%,20px 100%,20px 100%,20px 100%;background-size:20px 100%,20px 100%,20px 100%,20px 100%;background-attachment:local,local,scroll,scroll}.testimonial-section h1{font-weight:900;font-size:2.5em;line-height:3;color:#fff}.testiminial-card{border:10px solid#efc41a;position:relative;padding:5px;padding-top:70px;width:100%;height:80%}.testiminial-top-card{position:relative;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:50%}.subbox{display:inline-block}.testiminial-top-card img{-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;width:130px;height:130px;margin-bottom:-70px;z-index:100}.testimonial-section h2{word-wrap:break-word;font-size:1.5em;margin:15px 5px;color:#fff}.testimonial-section p{word-wrap:break-word;font-size:1em;line-height:1.5;color:#fff}.carousel-control-prev,.carousel-control-next{background:#efc41a;height:50px;width:50px;margin:auto}@media(max-width:900px){.testimonial-section{padding:10px 5px}.testiminial-top-card img{width:100px;height:100px;margin-bottom:-55px}.testiminial-card{padding-top:50px}.testimonial-section h1{font-size:1.5em}.testimonial-section h2{font-size:1.3em;line-height:1}.testimonial-section p{line-height:1.5}}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial);


/***/ })

};
;