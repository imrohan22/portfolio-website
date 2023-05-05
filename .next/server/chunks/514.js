"use strict";
exports.id = 514;
exports.ids = [514];
exports.modules = {

/***/ 4514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ component_template_2_Whychooseus)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./public/img-tamplate-2/assets-temp-2/sticker.png
/* harmony default export */ const sticker = ({"src":"/_next/static/media/sticker.03c45f75.png","height":571,"width":572,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEX+ywD+ywD+ywD+ywD+ywD+ywD+ywD+ywD+ywD+ywD+ywD+ywD+ywD+ywD+ywD+zAD+ywD+zAD+ywD+zAD+ywCjgoSMAAAAE3RSTlMAFRYZGqCiqKyt1d3k5+z5+f7+oduxhAAAADxJREFUeNolyccNADAMw0Cl92Zl/1ljIHwdQMCE3oMBbKVWLSL3kcWIQeE9HB+iSNyiK8E1as0BPs9ZPB5u3wMmtOJTeAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./component-template-2/Whychooseus.js





function Whychooseus({ whyChooseUsData  }) {
    let count = 0;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "whyChooseUs",
                className: "jsx-b3c80b7f883d801a" + " " + "py-5 border-bottom why-us-section",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-b3c80b7f883d801a" + " " + "container px-5 my-5",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-b3c80b7f883d801a" + " " + "row gx-5 justify-content-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-b3c80b7f883d801a" + " " + "col-lg-6 col-xl-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-b3c80b7f883d801a" + " " + "section-divider height-1 mb-4"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                        className: "jsx-b3c80b7f883d801a" + " " + "fw-bolder display-big m-sm-5",
                                        children: [
                                            "WHY",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                className: "jsx-b3c80b7f883d801a"
                                            }),
                                            " us?"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-b3c80b7f883d801a" + " " + "col-lg-6 col-xl-6 pt-5",
                                children: whyChooseUsData.component.map((whychooseus, index)=>{
                                    count++;
                                    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "jsx-b3c80b7f883d801a" + " " + "card py-3",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "jsx-b3c80b7f883d801a",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        className: "why-us-sticker",
                                                        src: sticker,
                                                        alt: "Card image cap",
                                                        width: 150,
                                                        height: 150
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "jsx-b3c80b7f883d801a" + " " + "img-square-wrapper d-flex align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "jsx-b3c80b7f883d801a" + " " + "display-5 fw-bold",
                                                            children: count
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "jsx-b3c80b7f883d801a",
                                                            children: whychooseus.title
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, index);
                                })
                            })
                        ]
                    })
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "b3c80b7f883d801a",
                children: "@media(max-width:500px){.display-big{font-size:-webkit-calc(1.525rem + 3.3vw)!important;font-size:-moz-calc(1.525rem + 3.3vw)!important;font-size:calc(1.525rem + 3.3vw)!important}}"
            })
        ]
    });
}
/* harmony default export */ const component_template_2_Whychooseus = (Whychooseus);


/***/ })

};
;