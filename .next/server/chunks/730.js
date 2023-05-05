"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 3730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ component_template_2_Howwework)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./public/img-tamplate-2/assets-temp-2/how-we-wrok.jpg
/* harmony default export */ const how_we_wrok = ({"src":"/_next/static/media/how-we-wrok.383e3ede.jpg","height":1333,"width":2000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAsgH/AP/EABsQAQACAgMAAAAAAAAAAAAAAAECBAADEhMh/9oACAEBAAE/AK1pr8zp1SSR6jn/xAAXEQEBAQEAAAAAAAAAAAAAAAABAgAD/9oACAECAQE/ADpaC1v/xAAZEQABBQAAAAAAAAAAAAAAAAABAAIDEyH/2gAIAQMBAT8ApiGBi//Z","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./component-template-2/Howwework.js




// import '../css-template-2/Howwework.css';
function Howwework({ howWeWorkData  }) {
    return(// < !--How - we - work section-- >
    /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "bg-light py-5 border-bottom",
        id: "howWeWork",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container px-5 my-5",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-5 text-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "fw-bolder display-3 text-uppercase",
                        children: "How We Work"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row gx-5 justify-content-center align-items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 col-xl-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "card bg-primary mb-5 mb-xl-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "card-body p-5",
                                    children: howWeWorkData.component.map((howwework, index)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "mb-5",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: "fw-bold",
                                                        children: howwework.title
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "",
                                                        children: howwework.description
                                                    })
                                                ]
                                            })
                                        }, index))
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-8 col-xl-8",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: how_we_wrok,
                                className: "img-fluid",
                                alt: "how-we-wrok"
                            })
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const component_template_2_Howwework = (Howwework);


/***/ })

};
;