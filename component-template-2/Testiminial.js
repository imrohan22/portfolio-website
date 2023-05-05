import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";

function Testimonial({ testimonialData }) {
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
      <section className="py-5 border-bottom testimonial-section" id="testimonial">
        <div className="container px-5 my-5 px-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder display-3   d-inline">Customer testimonials</h2>

          </div>
          <div className="row gx-5 justify-content-center">
            {/* <!-- Testimonial 1--> */}
            <Carousel responsive={responsive}>
              {testimonialData.testimonials.map((test, index) =>
                <React.Fragment key={index}>
                  <div key={test.testimonial} className=" text-center m-2 h-100 d-flex flex-column align-items-center testiminial-top-card" >
                    <Image src={test.clientLogo.url} className="card-img-top" alt="..." width={100} height={100} loader={loaderProp} />
                    <div className="testiminial-card">

                      <div className="card-body">
                        <h2 className="card-title">{test.clientName}</h2>
                        <p>{test.testimonial}</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="card mb-4">
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0"><i className="bi bi-chat-right-quote-fill text-primary fs-1"></i>
                      </div>
                      <div className="ms-4">
                        <p className="mb-1">{test.testimonial}
                        </p>
                        <div className="small text-muted">- {test.clientName}</div>
                      </div>
                    </div>
                  </div>
                </div> */}
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
          border-radius: 100px;
          width: 130px;
          height: 130px;
          margin-bottom: -70px;
          z-index: 100;
          
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
       
          .testiminial-top-card img
          {
              width: 100px;
              height:100px;
              margin-bottom: -55px;
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

export default Testimonial;
