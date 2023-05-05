// import '../css/Award.css';
import Carousel from "react-multi-carousel";
import awardImg from '../public/img-tamplate-2/assets-temp-2/award.jpg'
import Image from "next/image";
import React from "react";

function Award({ awardData }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      ariaLabel: 'Large Desktop carousel',
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      ariaLabel: 'Desktop carousel',
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      ariaLabel: 'Desktop carousel',
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      ariaLabel: 'Desktop carousel',
    }
  };
  return (
<>
    <div className="award-section" id="award">

      <div className="container-fluid container-fluid-section">
        <div className="row">
          <div className="col-md-12">
            <h1>Award</h1>
          </div>
          <div className="col-md-12 text-center">
            <div className="row">
              <Carousel responsive={responsive}>
                {awardData.map((award, index) => (
                  <React.Fragment key={index}>
                    <div key={award.title} className="m-2 d-flex flex-column align-items-center award-top-card" >
                      {/* <div className="card-img-top"></div> */}
                      <Image src={awardImg} className="card-img-top rounded-5" alt="awards" />
                      <div className="award-card">

                        <div className="card-body">
                          <h2 className="card-title">{award.title}</h2>
                          <p>{award.year}</p>
                          <p>{award.description}</p>

                        </div>
                      </div>

                    </div>
                  </React.Fragment>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx global>
      {
        `.award-section
        {
            padding: 20px;
            min-height: 400px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
            position: relative;
        }
        
        
        .award-section h1
        {
            font-weight: 900;
            font-size: 2.5em;
            line-height: 3;
            color: #FFFFFF;
        }
        
        .award-card 
        {
            width: 100%;
            border:10px solid #EFC41A;
            position: relative;
            padding: 5px;
            padding-top:80px;
            border-top-left-radius: 20px;
            border-bottom-right-radius: 20px;
            
        }
        .award-top-card
        {
            position: relative;
        }
        .award-top-card .card-img-top
        {
            width: 130px;
            height: 130px;
            margin-bottom: -70px;
            margin-top: 25px;
            z-index: 100;
            /* transform: rotate(
        315deg); */
            background-color: #EFC41A;
            
        }
        .award-section h2
        {
            word-wrap: break-word;
            font-size: 1.5em;
            margin: 15px 5px;
            color: #FFFFFF;
        }
        .award-section p
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
        
            .award-section
            {
                padding: 10px 5px;
            }
            .award-top-card .card-img-top
            {
                width: 100px;
                height:100px;
                margin-bottom: -55px;
            }
            .award-top-card img
            {
                width: 100px;
                height:100px;
                margin-bottom: -55px;
            }
        
        .award-card 
        {
            padding-top: 50px;
        }
           
            .award-section h1
            {
                font-size: 1.5em;
            }
        
            .award-section h2
            {
                font-size: 1.3em;
                line-height: 1;
            }
            .award-section p
            {
                line-height: 1.5;
            }
        }
        `
      }
    </style>
    </>
  );
}

export default Award;
