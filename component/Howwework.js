import React from 'react';
import splImg from '../public/img/construction/specialization.jpeg';
// import '../css/Howwework.css';
function Howwework({howWeWorkData}) {
  return (
    <>
    <div className="howwework-section" id="howWeWork">
      <div className="container">
        <div className="row " >
          <div className="col-md-12">
            <h1>How We Work</h1>
          </div>
        </div>
        <div className="row howwework-line" >
        {howWeWorkData.component.map((howwework, index) =>
            <React.Fragment key={index}>
          <div className="col-md-12 mb-3">
            <div className="how-card d-flex ">
              <div className="how-number-box">
                    {howwework.step}
              </div>
              <div>
                <div>
                  <h2>{howwework.title}</h2>
                </div>
                <div>
                  <p>{howwework.description}</p>
                </div>
              </div>

            </div>
          </div>
          </React.Fragment>
          )}
        </div>
      </div>
    </div>
    <style jsx global>
      {
        `.howwework-section::before
        {
            content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          background: url('img/construction/howwork.jpeg');
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
        }
        
        .howwework-section
        {
            padding: 35px 20px;
            min-height: 400px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
            position: relative;
           
        }
        
        
        .howwework-section h1
        {
            font-weight: 400;
            font-size: 3em;
            color: #FFFFFF;
            z-index: 1;
            line-height: 2.5;
           
        }
        
        .how-number-box
        {
            padding: 0px 14px;
            width: 45px;
            height: 45px;
            background: #776108;
            border: 1px solid #776108;
            border-radius: 5px;
            font-size: 1.8em;
            color: #FFFFFF;
            margin-right: 20px;
            z-index: 5;
        }
        .how-card
        {
            margin-bottom: 50px;
        }
        .how-card h2
        {
            word-wrap: break-word;
            font-size: 1.8em;
            margin-bottom: 15px;
            color: #FFFFFF;
        }
        .how-card p
        {
            word-wrap: break-word;
            font-size: 1.1em;
            line-height: 1.8;
            color: #FFFFFF;
        
        }
        
        .howwework-line
        {
            position: relative;
            padding-top:25px;
            /* padding:50px 0px; */
            overflow: hidden;
        }
        .howwework-line::after
        {
            content: '';
            position: absolute;
            width:3px;
            left:33px;
            top: 0;
            height: 100%;
            background: #776108;
        }
        
        @media (max-width:900px) {
        
            .howwework-section
            {
                padding: 10px 5px;
            }
        
            .how-card h2
            {
                font-size: 1.3em;
            }
            .howwework-section h1
            {
                font-size: 1.5em;
            }
        }`
      }
    </style>
    </>
  );
}

export default Howwework;
