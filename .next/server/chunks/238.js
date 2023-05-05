"use strict";
exports.id = 238;
exports.ids = [238];
exports.modules = {

/***/ 3238:
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
// import '../css/Team.css';





function Team({ ourTeamData  }) {
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
                id: "team",
                className: "jsx-93130f9f20728e39" + " " + "team-section",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-93130f9f20728e39" + " " + "container-fluid container-fluid-section",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-93130f9f20728e39" + " " + "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-93130f9f20728e39" + " " + "col-md-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-93130f9f20728e39",
                                    children: "Our Team"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-93130f9f20728e39" + " " + "row mb-4 justify-content-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_multi_carousel__WEBPACK_IMPORTED_MODULE_4___default()), {
                                responsive: responsive,
                                children: ourTeamData?.map((team, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "jsx-93130f9f20728e39" + " " + "text-center m-2 h-100 d-flex flex-column align-items-center team-top-card",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: team?.memberPhoto.url ? team.memberPhoto.url : "",
                                                    className: "card-img-top",
                                                    alt: "...",
                                                    width: 100,
                                                    height: 100,
                                                    loader: loaderProp
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-93130f9f20728e39" + " " + "team-card",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-93130f9f20728e39" + " " + "card-body",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                className: "jsx-93130f9f20728e39" + " " + "card-title",
                                                                children: team?.memberName
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "jsx-93130f9f20728e39",
                                                                children: team?.memberPosition
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, team?.memberName)
                                    }, index))
                            })
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "93130f9f20728e39",
                children: ".team-section{padding:20px;min-height:400px;height:100%;border-bottom:1px solid#e5e0df;position:relative}.react-multi-carousel-list,.react-multi-carousel-track{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.team-section h1{font-weight:900;font-size:2.5em;line-height:3;color:#fff}.team-card{border:10px solid#efc41a;position:relative;padding:5px;padding-top:70px;width:100%;height:80%}.team-top-card{position:relative;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;min-width:50%}.subbox{display:inline-block}.team-top-card img{-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;width:130px;height:130px;margin-bottom:-70px;z-index:100;border-bottom:10px solid#efc41a}.team-section h2{word-wrap:break-word;font-size:1.5em;margin:15px 5px;color:#fff}.team-section p{word-wrap:break-word;font-size:1em;line-height:1.5;color:#fff}.carousel-control-prev,.carousel-control-next{background:#efc41a;height:50px;width:50px;margin:auto}@media(max-width:900px){.react-multi-carousel-list,.react-multi-carousel-track{-webkit-box-pack:start;-webkit-justify-content:start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:start}.team-section{padding:10px 5px}.team-top-card img{width:100px;height:100px;margin-bottom:-55px}.team-card{padding-top:50px}.team-section h1{font-size:1.5em}.team-section h2{font-size:1.3em;line-height:1}.team-section p{line-height:1.5}}"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Team);


/***/ })

};
;