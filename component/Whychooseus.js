import React from "react";

// import '../css/Whychooseus.css';
function Whychooseus({ whyChooseUsData }) {
  let count = 1;
  return (
<>
    <div className="wychooseus-section" id="whyChooseUs">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Why Choose Us?</h1>
          </div>
          {whyChooseUsData.component.map((whychooseus, index) =>
            <React.Fragment key={index}>
              <div className="col-md-6">
                <div className="how-card-whychooseus d-flex ">
                  <div className="how-number-box">
                    {count++}
                  </div>
                  <div>
                    <div>
                      <h2>{whychooseus.title}</h2>
                    </div>
                    <div>
                      <p>{whychooseus.description}</p>
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
        `.wychooseus-section
        {
            padding: 35px 20px;
            min-height: 400px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
            position: relative;
           
        }
        
        
        .wychooseus-section h1
        {
            font-weight: 400;
            font-size: 3em;
            line-height: 3;
            color: #FFFFFF;
            z-index: 1;
           
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
        }
        .how-card-whychooseus
        {
            margin-bottom: 50px;
        }
        .how-card-whychooseus h2
        {
            word-wrap: break-word;
            font-size: 1.8em;
            margin-bottom: 20px;
            color: #FFFFFF;
        }
        .how-card-whychooseus p
        {
            word-wrap: break-word;
            font-size: 1.1em;
            line-height: 1.8;
            color: #FFFFFF;
        
        }
        
        
        
        @media (max-width:900px) {
        
            .wychooseus-section
            {
                padding: 10px 5px;
            }
        
            .how-card-whychooseus h2
            {
                font-size: 1.3em;
            }
            .wychooseus-section h1
            {
                font-size: 1.5em;
            }
        }`
      }
    </style>
    </>
  );
}

export default Whychooseus;
