// import '../css/Testimonial.css';
import Image from "next/image";
import React from "react";
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

  const loaderProp =({ src }) => {
    return src;
  }

  return (
<>
    <div className="testimonial-section" id="testimonial">
      <div className="container-fluid container-fluid-section">
        <div className="row">
          <div className="col-md-12">
            <h1>Testimonial</h1>
          </div>
        </div>
        <div className="row ">
          <Carousel responsive={responsive}>
            {testimonialData.testimonials.map((test, index) => (
              <React.Fragment key={index}>

                <div key={test.testimonial} className=" text-center m-2 h-100 d-flex flex-column align-items-center testiminial-top-card" >
                  <Image src={test.clientLogo.url} className="card-img-top" alt="..." width={100} height={100} loader={loaderProp}/>
                  <div className="testiminial-card">

                    <div className="card-body">
                      <h2 className="card-title">{test.clientName}</h2>
                      <p>{test.testimonial}</p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </Carousel>
        </div>
      </div>
    </div >
    <style jsx global>
      {
        `.testimonial-section
        {
            padding: 20px;
            min-height: 400px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
            position: relative;
        }
        
        .test-data
        {
            box-shadow: 0 1px 4px rgb(0 0 0 / 30%), 0 0 40px rgb(255 251 251 / 10%) inset;
            width: 100%;
            height: auto;
            padding: 0px;
            margin: 0;
            list-style-type: none;
            overflow: auto;
            position: relative;
            border-radius: 0px 0px 0 0;
            display: flex;
            background-image: linear-gradient(to right, white, white), linear-gradient(to right, white, white), linear-gradient(to right, rgba(0, 0, 20, .50), rgba(255, 255, 255, 0)), linear-gradient(to left, rgba(0, 0, 20, .50), rgba(255, 255, 255, 0));
            background-position: left center, right center, left center, right center;
            background-repeat: no-repeat;
            background-size: 20px 100%, 20px 100%, 20px 100%, 20px 100%;
            background-attachment: local, local, scroll, scroll;
        }
        
        
        .testimonial-section h1
        {
            font-weight: 900;
            font-size: 2.5em;
            line-height: 3;
            color: #FFFFFF;
        }
        
        .testiminial-card 
        {
            border:10px solid #EFC41A;
            position: relative;
            padding: 5px;
            padding-top:70px;
            width: 100%;
            height:80%;
            
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
        .testimonial-section h2
        {
            word-wrap: break-word;
            font-size: 1.5em;
            margin: 15px 5px;
            color: #FFFFFF;
        }
        .testimonial-section p
        {
            word-wrap: break-word;
            font-size: 1em;
            line-height:1.5;
            color: #FFFFFF;
          
        
        }
        .carousel-control-prev, .carousel-control-next
        {
            background: #EFC41A;
            height: 50px;
            width: 50px;
            margin: auto;
        }
        
        
        @media (max-width:900px) {
        
            .testimonial-section
            {
                padding: 10px 5px;
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
           
            .testimonial-section h1
            {
                font-size: 1.5em;
            }
        
            .testimonial-section h2
            {
                font-size: 1.3em;
                line-height: 1;
            }
            .testimonial-section p
            {
                line-height: 1.5;
            }
        }`
      }
    </style>
</>
  );
}

export default Testimonial;
