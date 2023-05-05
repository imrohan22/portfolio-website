"use strict";
exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 3886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ component_template_2_Specialization)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./public/img-tamplate-2/assets-temp-2/special.webp
/* harmony default export */ const special = ({"src":"/_next/static/media/special.e24b2e49.webp","height":650,"width":2100,"blurDataURL":"data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAIAAkA4JZwAAp05ta4A/rdmfDxsv1BGWGBtfEAXLKCdszBQAA==","blurWidth":8,"blurHeight":2});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./component-template-2/Specialization.js





// import '../css-template-2/Specialization.css';
function Specialization({ specializationData  }) {
    let count = 1;
    const loaderProp = ({ src  })=>{
        return src;
    };
    return(// < !--Specialization section-- >
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "specializations",
                className: "jsx-6566db39918aa16e" + " " + "bg-light py-5 border-bottom overflow-hidden",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-6566db39918aa16e" + " " + "container px-5 my-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-6566db39918aa16e" + " " + "mb-5 text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "jsx-6566db39918aa16e" + " " + "fw-bolder display-3 mb-5  d-inline",
                                children: "Specialization"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "jsx-6566db39918aa16e" + " " + "row gx-5 py-5 justify-content-center",
                            children: specializationData.specializationComponent.map((specialization, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-6566db39918aa16e" + " " + "col-md-6 mb-4 text-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "jsx-6566db39918aa16e" + " " + "spl-card",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "jsx-6566db39918aa16e",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        src: specialization.image.url ? specialization.image.url : "",
                                                        className: "img-fluid",
                                                        alt: "logo",
                                                        width: 100,
                                                        height: 100,
                                                        loader: loaderProp
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "jsx-6566db39918aa16e",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "jsx-6566db39918aa16e",
                                                        children: specialization.title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "jsx-6566db39918aa16e",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "jsx-6566db39918aa16e",
                                                        children: specialization.description
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }, index))
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "6566db39918aa16e",
                children: ".specialization-section{padding:20px;min-height:400px;height:100%;border-bottom:1px solid#e5e0df;position:relative}.spl-card{width:400px;padding:25px 25px;margin:auto;background:#f1c40f;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;height:100%}.spl-card img{width:350px;height:350px;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;margin-bottom:15px}.spl-card h2{word-wrap:break-word;font-size:1.8em;margin-bottom:20px;color:#000}.spl-card p{word-wrap:break-word;font-size:1.1em;line-height:1.8;color:#000}.specialization-section h1{font-weight:900;font-size:2.5em;line-height:3;color:#fff}@media(max-width:900px){.specialization-section{padding:10px 5px}.spl-card{width:100%}.spl-card img{width:100%;margin-bottom:10px;height:50vh}.spl-card h2{font-size:1.3em}.specialization-section h1{font-size:1.5em}}"
            })
        ]
    }));
}
/* harmony default export */ const component_template_2_Specialization = (Specialization);


/***/ })

};
;