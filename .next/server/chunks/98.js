"use strict";
exports.id = 98;
exports.ids = [98];
exports.modules = {

/***/ 8686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ component_Construction)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/img/construction/construction.jpg
/* harmony default export */ const construction = ({"src":"/_next/static/media/construction.ca6edc4a.jpg","height":1536,"width":2048,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKQ3/8QAGhAAAwADAQAAAAAAAAAAAAAAAQIDAAUREv/aAAgBAQABPwBtjVDREhPyhABLHvM//8QAGhEAAgIDAAAAAAAAAAAAAAAAAgQAAREjMf/aAAgBAgEBPwAWmMVtLk//xAAZEQEAAgMAAAAAAAAAAAAAAAABAAMSFDL/2gAIAQMBAT8A16HJazpn/9k=","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./component/Construction.js





// import '../css/Construction.css';
function Construction({ homeData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "home",
                className: "jsx-a71381acad21c03c" + " " + "construction-section pt-5",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-a71381acad21c03c" + " " + "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-a71381acad21c03c" + " " + "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-a71381acad21c03c" + " " + "col-md-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: construction,
                                    className: "img-fluid",
                                    alt: "logo"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "jsx-a71381acad21c03c" + " " + "col-md-7 d-flex flex-column  justify-content-center ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-a71381acad21c03c",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "jsx-a71381acad21c03c",
                                            children: homeData.title
                                        })
                                    }),
                                    homeData.questions.map((question, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "jsx-a71381acad21c03c",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "jsx-a71381acad21c03c",
                                                children: question.question
                                            })
                                        }, index)),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-a71381acad21c03c",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "jsx-a71381acad21c03c",
                                            children: "OR"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "jsx-a71381acad21c03c",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "jsx-a71381acad21c03c",
                                            children: homeData.subtitle
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "a71381acad21c03c",
                children: ".construction-section{padding:20px;min-height:400px;height:100%;border-bottom:1px solid#e5e0df}.construction-section img{height:77vh;width:80%;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px}.construction-section h1{font-weight:900;font-size:3.5em;line-height:2;color:rgb(245,243,128)}.construction-section h5{font-weight:bold;word-wrap:break-word;color:#e5e0df;font-size:1.2em;line-height:2}.construction-section p{font-size:1.2em;line-height:2;color:#e5e0df;font-weight:100}@media(max-width:900px){.construction-section{padding:10px 5px}.construction-section img{width:100%;margin-bottom:10px;height:50vh}.construction-section h1{font-size:1.5em}}"
            })
        ]
    });
}
/* harmony default export */ const component_Construction = (Construction);


/***/ })

};
;