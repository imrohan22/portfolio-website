import Head from 'next/head';
import Image from 'next/image';
// import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import JsonData from '../jsondata/data.json';
import 'react-multi-carousel/lib/styles.css';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// const inter = Inter({ subsets: ['latin'] });

let Header, Construction, Specialization, Howwework, Whychooseus, Count, GetIntouch, Contactus, Footer, Product, Testimonial, PortFolio, Award, Team;
let HeaderTemp2, FooterTemp2, HomeTemp2, HowweworkTemp2, WhychooseusTemp2, SpecializationTemp2, TeamTemp2, AwardTemp2, ContactusTemp2, TestimonialTemp2, GetIntouchTemp2, PortFolioTemp2, CountTemp2;

export default function Home(props) {
  const router = useRouter();
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

    Header = dynamic(() => import('../component/Header'), { ssr: false });
    Construction = dynamic(() => import('../component/Construction'));
    Specialization = dynamic(() => import('../component/Specialization'));
    Howwework = dynamic(() => import('../component/Howwework'));
    Whychooseus = dynamic(() => import('../component/Whychooseus'));
    Count = dynamic(() => import('../component/Count'));
    GetIntouch = dynamic(() => import('../component/Getintouch'));
    Contactus = dynamic(() => import('../component/Contactus'));
    Footer = dynamic(() => import('../component/Footer'));
    Product = dynamic(() => import('../component/Product'));
    Testimonial = dynamic(() => import('../component/Testiminial'));
    PortFolio = dynamic(() => import('../component/Portfolio'), { ssr: false });
    Award = dynamic(() => import('../component/Award'));
    Team = dynamic(() => import('../component/Team'));

  }
  else {
    HeaderTemp2 = dynamic(() => import('../component-template-2/Header'), { ssr: false });
    FooterTemp2 = dynamic(() => import('../component-template-2/Footer'));
    // HeaderTemp2 = dynamic(() => import('../component-template-2/Header'));
    HomeTemp2 = dynamic(() => import('../component-template-2/Home'));
    HowweworkTemp2 = dynamic(() => import('../component-template-2/Howwework'));
    WhychooseusTemp2 = dynamic(() => import('../component-template-2/Whychooseus'));
    SpecializationTemp2 = dynamic(() => import('../component-template-2/Specialization'));
    TeamTemp2 = dynamic(() => import('../component-template-2/Team'));
    AwardTemp2 = dynamic(() => import('../component-template-2/Award'));
    ContactusTemp2 = dynamic(() => import('../component-template-2/Contactus'));
    TestimonialTemp2 = dynamic(() => import('../component-template-2/Testiminial'));
    GetIntouchTemp2 = dynamic(() => import('../component-template-2/Getintouch'));
    PortFolioTemp2 = dynamic(() => import('../component-template-2/Portfolio'), { ssr: false });
    CountTemp2 = dynamic(() => import('../component-template-2/Count'));
  }

  return (
    <div>
      {landingPageData.seo &&


        [landingPageData.seo].map((headdata, index) =>

          <Head key={index}>
            <title>{headdata.metaTitle}</title>
            <meta name="description" content={headdata.metaDescription} />
            {/* <link rel="canonical" href={headdata.canonicalUrl} /> */}
            <meta property="og:title" content={headdata.metaTitle} />
            <meta property="og:description" content={headdata.metaDescription} />
            <meta property="og:image" content={headdata.metaImage.url} />
            <meta property="og:url" content={headdata.metaImage.url} />
            <meta property="og:type" content={headdata.metaImage.mime} />
            <meta name="twitter:card" content={headdata.metaImage.hash} />
            <meta name="twitter:title" content={headdata.metaTitle} />
            <meta name="twitter:description" content={headdata.metaDescription} />
            <meta name="twitter:image" content={headdata.metaImage.url} />
          </Head>

        )
      }
      {templateId == "Black" &&
        <>
          {/* <React.Suspense fallback={<></>}> */}
          {landingPageData.viewData?.header &&
            <Header headerData={[landingPageData.viewData.header, [landingPageData.viewData.contactDetails]]} />
          }
          {landingPageData.viewData?.home &&
            <Construction homeData={landingPageData.viewData.home} />
          }
          {landingPageData.viewData?.howWeWork &&
            <Howwework howWeWorkData={landingPageData.viewData.howWeWork} />
          }
          {landingPageData.viewData?.whyChooseUs &&
            <Whychooseus whyChooseUsData={landingPageData.viewData.whyChooseUs} />
          }
          {landingPageData.viewData?.specializations &&
            <Specialization specializationData={landingPageData.viewData.specializations} />
          }
          {landingPageData.viewData?.sites &&
            <PortFolio portfolioData={landingPageData.viewData.sites} />
          }
          {landingPageData.viewData?.team &&
            <Team ourTeamData={landingPageData.viewData.team} />
          }
          {landingPageData.viewData?.awards &&
            <Award awardData={landingPageData.viewData.awards} />
          }
          {landingPageData.viewData?.contactDetails &&
            <Contactus contactData={landingPageData.viewData.contactDetails} />
          }
          {landingPageData.viewData?.stats &&
            <Count countData={landingPageData.viewData.stats} />
          }
          {landingPageData.viewData?.testimonials &&
            <Testimonial testimonialData={landingPageData.viewData.testimonials} />
          }
          {landingPageData.viewData?.getInTouch &&
            <GetIntouch getInTouchData={landingPageData.viewData.getInTouch} />
          }

          {landingPageData.viewData?.footer &&
            <Footer ourDetailsData={landingPageData.viewData.footer} />
          }

          {/* </React.Suspense> */}
        </>

      }

      {templateId == "White" &&
        <>
          {/* <React.Suspense fallback={<></>}> */}
          {landingPageData.viewData?.header &&
            <HeaderTemp2 headerData={[landingPageData.viewData.header, [landingPageData.viewData.contactDetails]]} />
          }
          {landingPageData.viewData?.howWeWork &&
            <HowweworkTemp2 howWeWorkData={landingPageData.viewData.howWeWork} />
          }
          {landingPageData.viewData?.whyChooseUs &&
            <WhychooseusTemp2 whyChooseUsData={landingPageData.viewData.whyChooseUs} />
          }
          {landingPageData.viewData?.specializations &&
            <SpecializationTemp2 specializationData={landingPageData.viewData.specializations} />
          }
          {landingPageData.viewData?.sites &&
            <PortFolioTemp2 portfolioData={landingPageData.viewData.sites} />
          }
          {landingPageData.viewData?.team &&
            <TeamTemp2 ourTeamData={landingPageData.viewData.team} />
          }
          {landingPageData.viewData?.awards &&
            <AwardTemp2 awardData={landingPageData.viewData.awards} />
          }
          {landingPageData.viewData?.stats &&
            <CountTemp2 countData={landingPageData.viewData.stats} />
          }
          {landingPageData.viewData?.contactDetails &&
            <ContactusTemp2 contactData={landingPageData.viewData.contactDetails} />
          }
          {landingPageData.viewData?.testimonials &&
            <TestimonialTemp2 testimonialData={landingPageData.viewData.testimonials} />
          }
          {landingPageData.viewData?.getInTouch &&
            <GetIntouchTemp2 getInTouchData={landingPageData.viewData.getInTouch} />
          }
          {landingPageData.viewData?.footer &&
            <FooterTemp2 ourDetailsData={landingPageData.viewData.footer} />
          }


          {/* </React.Suspense> */}
        </>

      }
    </div>
  );
}

export async function getServerSideProps(context) {
  const api_key = context.params.index[0];
  const API_BASE_URL = "http://api.projecthero.in/gateway/public/" + api_key + "/portfolio";
  console.log(API_BASE_URL);
  let data = '';
  await fetch(API_BASE_URL)
    .then((res) => res.json())
    .then((json) => {
      data = json.payload.data;
    });
  return {
    props: {
      apiResponse: data    //we have static data for now so here we added it here. 
      //If you call api then add api response here instead of jsonData
    },
  };
}