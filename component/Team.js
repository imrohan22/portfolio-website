// import '../css/Team.css';
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";

function Team({ ourTeamData }) {
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
    <div className="team-section" id="team">
      <div className="container-fluid container-fluid-section">
        <div className="row">
          <div className="col-md-12">
            <h1>Our Team</h1>
          </div>
        </div>
        <div className="row mb-4 justify-content-center">
          <Carousel responsive={responsive}>
            {ourTeamData?.map((team, index) =>(
              <React.Fragment key={index}>   
                <div key={team?.memberName} className="text-center m-2 h-100 d-flex flex-column align-items-center team-top-card" >
                  <Image src={team?.memberPhoto.url ? team.memberPhoto.url : ''} className="card-img-top" alt="..." width={100} height={100} loader={loaderProp}/>
                  <div className="team-card">

                    <div className="card-body">
                      <h2 className="card-title">{team?.memberName}</h2>
                      <p>{team?.memberPosition}</p>
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
        `.team-section
        {
            padding: 20px;
            min-height: 400px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
            position: relative;
        }
        .react-multi-carousel-list,  .react-multi-carousel-track 
        {
          display:flex;
          justify-content: center;
        }
       
     
        
        .team-section h1
        {
            font-weight: 900;
            font-size: 2.5em;
            line-height: 3;
            color: #FFFFFF;
        }
        
        .team-card 
        {
            border:10px solid #EFC41A;
            position: relative;
            padding: 5px;
            padding-top:70px;
            width: 100%;
            height:80%;
            
        }
        .team-top-card
        {
            position: relative;
            flex: 1;
            min-width: 50%;
        }
        .subbox
        {
            display: inline-block;
        }
        .team-top-card img
        {
            border-radius: 100px;
            width: 130px;
            height: 130px;
            margin-bottom: -70px;
            z-index: 100;
            border-bottom: 10px solid #EFC41A;
        }
        .team-section h2
        {
            word-wrap: break-word;
            font-size: 1.5em;
            margin: 15px 5px;
            color: #FFFFFF;
        }
        .team-section p
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
        
          .react-multi-carousel-list,  .react-multi-carousel-track 
          {
            justify-content: start;
          }
            .team-section
            {
                padding: 10px 5px;
            }
            .team-top-card img
            {
                width: 100px;
                height:100px;
                margin-bottom: -55px;
            }
        
        .team-card 
        {
            padding-top: 50px;
        }
           
            .team-section h1
            {
                font-size: 1.5em;
            }
        
            .team-section h2
            {
                font-size: 1.3em;
                line-height: 1;
            }
            .team-section p
            {
                line-height: 1.5;
            }
        }`
      }
    </style>
</>
  );
}

export default Team;
