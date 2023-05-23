import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";

function Ourclient({ ourClientData }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const loaderProp = ({ src }) => {
    return src;
  }
  return (
    <>
      {/* // < !--Testimonials section-- > */}
      <section className="border-bottom testimonial-section" id="ourclient">
        <div className="container">
          <div className="mb-5">
            <h1>Our Client</h1>

          </div>
          <div className="row gx-5 justify-content-center">
            {/* <!-- Testimonial 1--> */}
            <Carousel autoPlay={true} infinite={true} responsive={responsive}>
              {ourClientData.otherClientLogos.images.map((test, index) =>
                <React.Fragment key={index}>
                  <div key={test.id} className=" text-center m-2 h-100 d-flex flex-column align-items-center testiminial-top-card" >
                    <Image src={test.url} className="card-img-top" alt="..." width={100} height={100} loader={loaderProp} />
                    <p className="text-white">{test.name}</p>
                  </div>
                </React.Fragment>
              )}
            </Carousel>

          </div>
        </div>
      </section>
      <style jsx global>
        {
          `
      
          .react-multi-carousel-list,  .react-multi-carousel-track 
          {
            display:flex;
            justify-content: center;
            padding: 0;
          }


      #ourclient h1
      {
        font-weight: 900;
        font-size: 2.5em;
        line-height: 3;
        color: #fff;
      }
      
      .testiminial-card 
      {
          border:10px solid #EFC41A;
          position: relative;
          padding: 5px;
          padding-top:70px;
          width: 100%;
          height:auto;
          
      }
      .testiminial-top-card
      {
          position: relative;
          flex: 1;
          min-width: 50%;
      }
      .subbox
      {
          display: inline-block;
      }
      .testiminial-top-card img
      {
          width: 200px;
          height: 200px;
          z-index: 100;
          border:10px solid #EFC41A;
          
      }
     
      .carousel-control-prev, .carousel-control-next
      {
          background: #EFC41A;
          height: 50px;
          width: 50px;
          margin: auto;
      }
      
      
      @media (max-width:900px) {
        .react-multi-carousel-list,  .react-multi-carousel-track 
          {
            justify-content: start;
          }
       

      
      .testiminial-card 
      {
          padding-top: 50px;
      }
         
         
      }`
        }
      </style>
    </>
  );
}

export default Ourclient;
