"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./jsondata/data.json
const data_namespaceObject = {};
// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__(2694);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./pages/index.js



// import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';





// const inter = Inter({ subsets: ['latin'] });
let Header, Construction, Specialization, Howwework, Whychooseus, Count, GetIntouch, Contactus, Footer, Product, Testimonial, PortFolio, Award, Team;
let HeaderTemp2, FooterTemp2, HomeTemp2, HowweworkTemp2, WhychooseusTemp2, SpecializationTemp2, TeamTemp2, AwardTemp2, ContactusTemp2, TestimonialTemp2, GetIntouchTemp2, PortFolioTemp2, CountTemp2;
function Home(props) {
    const router = (0,router_namespaceObject.useRouter)();
    const landingPageData = props.apiResponse;
    // const [landingPageData, setLandingPageData] = useState({});
    // useEffect(() => {
    //   setLandingPageData(props.apiResponse);
    //   console.log(props.apiResponse, "data")
    // }, []);
    let templateId = landingPageData.templateId;
    // const queryParameters = new URLSearchParams(window.location.search);
    if (router.query["template-id"]) {
        templateId = router.query["template-id"];
    }
    if (templateId == undefined) {
        templateId = "Black";
    }
    if (templateId == "Black") {
        Header = dynamic_default()(null, {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Header"
                ]
            },
            ssr: false
        });
        Construction = dynamic_default()(()=>__webpack_require__.e(/* import() */ 98).then(__webpack_require__.bind(__webpack_require__, 8686)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Construction"
                ]
            }
        });
        Specialization = dynamic_default()(()=>__webpack_require__.e(/* import() */ 622).then(__webpack_require__.bind(__webpack_require__, 622)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Specialization"
                ]
            }
        });
        Howwework = dynamic_default()(()=>__webpack_require__.e(/* import() */ 937).then(__webpack_require__.bind(__webpack_require__, 7937)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Howwework"
                ]
            }
        });
        Whychooseus = dynamic_default()(()=>__webpack_require__.e(/* import() */ 607).then(__webpack_require__.bind(__webpack_require__, 6607)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Whychooseus"
                ]
            }
        });
        Count = dynamic_default()(()=>__webpack_require__.e(/* import() */ 53).then(__webpack_require__.bind(__webpack_require__, 6053)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Count"
                ]
            }
        });
        GetIntouch = dynamic_default()(()=>__webpack_require__.e(/* import() */ 60).then(__webpack_require__.bind(__webpack_require__, 1060)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Getintouch"
                ]
            }
        });
        Contactus = dynamic_default()(()=>__webpack_require__.e(/* import() */ 570).then(__webpack_require__.bind(__webpack_require__, 570)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Contactus"
                ]
            }
        });
        Footer = dynamic_default()(()=>__webpack_require__.e(/* import() */ 943).then(__webpack_require__.bind(__webpack_require__, 1943)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Footer"
                ]
            }
        });
        Product = dynamic_default()(()=>__webpack_require__.e(/* import() */ 470).then(__webpack_require__.bind(__webpack_require__, 1470)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Product"
                ]
            }
        });
        Testimonial = dynamic_default()(()=>__webpack_require__.e(/* import() */ 485).then(__webpack_require__.bind(__webpack_require__, 1485)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Testiminial"
                ]
            }
        });
        PortFolio = dynamic_default()(null, {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Portfolio"
                ]
            },
            ssr: false
        });
        Award = dynamic_default()(()=>__webpack_require__.e(/* import() */ 331).then(__webpack_require__.bind(__webpack_require__, 5331)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Award"
                ]
            }
        });
        Team = dynamic_default()(()=>__webpack_require__.e(/* import() */ 238).then(__webpack_require__.bind(__webpack_require__, 3238)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component/Team"
                ]
            }
        });
    } else {
        HeaderTemp2 = dynamic_default()(null, {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Header"
                ]
            },
            ssr: false
        });
        FooterTemp2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 513).then(__webpack_require__.bind(__webpack_require__, 6513)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Footer"
                ]
            }
        });
        // HeaderTemp2 = dynamic(() => import('../component-template-2/Header'));
        HomeTemp2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 413).then(__webpack_require__.bind(__webpack_require__, 9413)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Home"
                ]
            }
        });
        HowweworkTemp2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 730).then(__webpack_require__.bind(__webpack_require__, 3730)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Howwework"
                ]
            }
        });
        WhychooseusTemp2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 514).then(__webpack_require__.bind(__webpack_require__, 4514)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Whychooseus"
                ]
            }
        });
        SpecializationTemp2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 886).then(__webpack_require__.bind(__webpack_require__, 3886)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Specialization"
                ]
            }
        });
        TeamTemp2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 317).then(__webpack_require__.bind(__webpack_require__, 2317)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Team"
                ]
            }
        });
        AwardTemp2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 638).then(__webpack_require__.bind(__webpack_require__, 5638)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Award"
                ]
            }
        });
        ContactusTemp2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 686).then(__webpack_require__.bind(__webpack_require__, 6686)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Contactus"
                ]
            }
        });
        TestimonialTemp2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 881).then(__webpack_require__.bind(__webpack_require__, 881)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Testiminial"
                ]
            }
        });
        GetIntouchTemp2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 341).then(__webpack_require__.bind(__webpack_require__, 4341)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Getintouch"
                ]
            }
        });
        PortFolioTemp2 = dynamic_default()(null, {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Portfolio"
                ]
            },
            ssr: false
        });
        CountTemp2 = dynamic_default()(()=>__webpack_require__.e(/* import() */ 189).then(__webpack_require__.bind(__webpack_require__, 2189)), {
            loadableGenerated: {
                modules: [
                    "index.js -> " + "../component-template-2/Count"
                ]
            }
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            landingPageData.seo && [
                landingPageData.seo
            ].map((headdata, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: headdata.metaTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: headdata.metaDescription
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:title",
                            content: headdata.metaTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:description",
                            content: headdata.metaDescription
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:image",
                            content: headdata.metaImage.url
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:url",
                            content: headdata.metaImage.url
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            property: "og:type",
                            content: headdata.metaImage.mime
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:card",
                            content: headdata.metaImage.hash
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:title",
                            content: headdata.metaTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:description",
                            content: headdata.metaDescription
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "twitter:image",
                            content: headdata.metaImage.url
                        })
                    ]
                }, index)),
            templateId == "Black" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    landingPageData.viewData?.header && /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        headerData: [
                            landingPageData.viewData.header,
                            [
                                landingPageData.viewData.contactDetails
                            ]
                        ]
                    }),
                    landingPageData.viewData?.home && /*#__PURE__*/ jsx_runtime_.jsx(Construction, {
                        homeData: landingPageData.viewData.home
                    }),
                    landingPageData.viewData?.howWeWork && /*#__PURE__*/ jsx_runtime_.jsx(Howwework, {
                        howWeWorkData: landingPageData.viewData.howWeWork
                    }),
                    landingPageData.viewData?.whyChooseUs && /*#__PURE__*/ jsx_runtime_.jsx(Whychooseus, {
                        whyChooseUsData: landingPageData.viewData.whyChooseUs
                    }),
                    landingPageData.viewData?.specializations && /*#__PURE__*/ jsx_runtime_.jsx(Specialization, {
                        specializationData: landingPageData.viewData.specializations
                    }),
                    landingPageData.viewData?.sites && /*#__PURE__*/ jsx_runtime_.jsx(PortFolio, {
                        portfolioData: landingPageData.viewData.sites
                    }),
                    landingPageData.viewData?.team && /*#__PURE__*/ jsx_runtime_.jsx(Team, {
                        ourTeamData: landingPageData.viewData.team
                    }),
                    landingPageData.viewData?.awards && /*#__PURE__*/ jsx_runtime_.jsx(Award, {
                        awardData: landingPageData.viewData.awards
                    }),
                    landingPageData.viewData?.contactDetails && /*#__PURE__*/ jsx_runtime_.jsx(Contactus, {
                        contactData: landingPageData.viewData.contactDetails
                    }),
                    landingPageData.viewData?.stats && /*#__PURE__*/ jsx_runtime_.jsx(Count, {
                        countData: landingPageData.viewData.stats
                    }),
                    landingPageData.viewData?.testimonials && /*#__PURE__*/ jsx_runtime_.jsx(Testimonial, {
                        testimonialData: landingPageData.viewData.testimonials
                    }),
                    landingPageData.viewData?.getInTouch && /*#__PURE__*/ jsx_runtime_.jsx(GetIntouch, {
                        getInTouchData: landingPageData.viewData.getInTouch
                    }),
                    landingPageData.viewData?.footer && /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                        ourDetailsData: landingPageData.viewData.footer
                    })
                ]
            }),
            templateId == "White" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    landingPageData.viewData?.header && /*#__PURE__*/ jsx_runtime_.jsx(HeaderTemp2, {
                        headerData: [
                            landingPageData.viewData.header,
                            [
                                landingPageData.viewData.contactDetails
                            ]
                        ]
                    }),
                    landingPageData.viewData?.howWeWork && /*#__PURE__*/ jsx_runtime_.jsx(HowweworkTemp2, {
                        howWeWorkData: landingPageData.viewData.howWeWork
                    }),
                    landingPageData.viewData?.whyChooseUs && /*#__PURE__*/ jsx_runtime_.jsx(WhychooseusTemp2, {
                        whyChooseUsData: landingPageData.viewData.whyChooseUs
                    }),
                    landingPageData.viewData?.specializations && /*#__PURE__*/ jsx_runtime_.jsx(SpecializationTemp2, {
                        specializationData: landingPageData.viewData.specializations
                    }),
                    landingPageData.viewData?.sites && /*#__PURE__*/ jsx_runtime_.jsx(PortFolioTemp2, {
                        portfolioData: landingPageData.viewData.sites
                    }),
                    landingPageData.viewData?.team && /*#__PURE__*/ jsx_runtime_.jsx(TeamTemp2, {
                        ourTeamData: landingPageData.viewData.team
                    }),
                    landingPageData.viewData?.awards && /*#__PURE__*/ jsx_runtime_.jsx(AwardTemp2, {
                        awardData: landingPageData.viewData.awards
                    }),
                    landingPageData.viewData?.stats && /*#__PURE__*/ jsx_runtime_.jsx(CountTemp2, {
                        countData: landingPageData.viewData.stats
                    }),
                    landingPageData.viewData?.contactDetails && /*#__PURE__*/ jsx_runtime_.jsx(ContactusTemp2, {
                        contactData: landingPageData.viewData.contactDetails
                    }),
                    landingPageData.viewData?.testimonials && /*#__PURE__*/ jsx_runtime_.jsx(TestimonialTemp2, {
                        testimonialData: landingPageData.viewData.testimonials
                    }),
                    landingPageData.viewData?.getInTouch && /*#__PURE__*/ jsx_runtime_.jsx(GetIntouchTemp2, {
                        getInTouchData: landingPageData.viewData.getInTouch
                    }),
                    landingPageData.viewData?.footer && /*#__PURE__*/ jsx_runtime_.jsx(FooterTemp2, {
                        ourDetailsData: landingPageData.viewData.footer
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    const API_BASE_URL = "http://api.projecthero.in/gateway/public/anthro-build/portfolio";
    let data = "";
    await fetch(API_BASE_URL).then((res)=>res.json()).then((json)=>{
        data = json.payload.data;
    });
    return {
        props: {
            apiResponse: data //we have static data for now so here we added it here. 
        }
    };
}


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7342:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-ssr-error.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5804:
/***/ ((module) => {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,168], () => (__webpack_exec__(616)));
module.exports = __webpack_exports__;

})();