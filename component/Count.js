import React from "react";

// import '../css/Count.css';
function GetIntouch({ countData }) {
  return (
<>
    <div className="count-section">
      <div className="container-fluid container-fluid-count">
        <div className="row">
            <div className="col-md-12 text-center"> 
              <h1>Our Accomplishments</h1>
            </div>

        </div>
        <div className="row">
              <div className="col-md-3 mb-2 mt-3 text-center">
                <div>
                  <p>Project Completed</p>
                </div>
                <div>
                  <h2>{countData.projectsCompleted}</h2>
                </div>
              </div>
              <div className="col-md-3 mb-2 mt-3 text-center">
                <div>
                  <p>Total Orders Worth Completed</p>
                </div>
                <div>
                <h2>{countData.totalOrdersWorthCompleted}</h2>
                </div>
              </div>
              <div className="col-md-3 mb-2 mt-3 text-center">
                <div>
                  <p>Total Square Feet Work Done</p>
                </div>
                <div>
                  <h2>{countData.totalSquareFeetWorkDone}</h2>
                </div>
              </div>
              <div className="col-md-3 mb-2 mt-3 text-center">
                <div>
                  <p>Years Of Experience</p>
                </div>
                <div>
                  <h2>{countData.yearsOfExperience}</h2>
                </div>
              </div>
         
        </div>
      </div>
    </div>
    <style jsx global>
      {
        `.count-section::before
        {
            content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          background: url('img/construction/getintouch.jpg');
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
        }
        .container-fluid-count
        {
            padding-top: 50px;
            padding-bottom: 50px;
            
        }
        
        
        .count-section h1
        {
            font-weight: 900;
            font-size: 2.5em;
            line-height: 3;
            color: #FFFFFF;
        }
        
        .count-section
        {
            position:relative;
            padding: 35px 20px;
            border-bottom: 1px solid #e5e0df;
        
        }
        
        
        .count-section h2
        {
            word-wrap: break-word;
            font-size: 1.8em;
            margin-bottom: 20px;
            color: #FFFFFF;
        }
        .count-section p
        {
            word-wrap: break-word;
            font-size: 1.1em;
            line-height: 1.8;
            color: #FFFFFF;
        
        }
        
        
        
        @media (max-width:900px) {
        
            .count-section
            {
                padding: 10px 5px;
            }
        
            .count-section h2
            {
                font-size: 1.3em;
                line-height: 1;
            }
            .count-section p
            {
                line-height: 1;
            }
            .count-section h1
            {
                font-size: 1.5em;
            }
        }`
      }
    </style>
    </>
  );
}

export default GetIntouch;
