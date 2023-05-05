import React from "react";

// import '../css/Contactus.css';
function Getintouch({ contactData }) {
  return (
<>
    <div className="contact-section" id="contactDetails">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="row">
              <div className="col-md-4 mb-4 ">
                <div className="contact-box">
                  <h2>Name</h2>
                  <p>{contactData.name}</p>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="contact-box">
                  <h2>Email</h2>
                  <p>{contactData.email}</p>
                </div>
              </div>
              <div className="col-md-4 mb-4 ">
                <div className="contact-box">
                  <h2>Phone</h2>
                  <p>{contactData.phone}</p>
                </div>
              </div>
          
        </div>

      </div>
    </div>
    <style jsx global>
      {
        `.contact-section
        {
            padding: 35px 20px;
            min-height: 100px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
            position: relative;
            
        }
        
        .contact-section h1
        {
            font-weight: 400;
            font-size: 3em;
            line-height: 3;
            color: #FFFFFF;
            z-index: 1;
           
        }
        
        .contact-section h2
        {
            word-wrap: break-word;
            font-size: 1.5em;
            margin-bottom: 20px;
            color: #FFFFFF;
        }
        .contact-section p
        {
            word-wrap: break-word;
            font-size: 1.1em;
            line-height: 1;
            color: #FFFFFF;
        
        }
        .contact-box
        {
            background-color: #776108;
            border: 1px solid #EFC41A;
            padding: 15px;
            border-radius: 5px;
        }
        
        
        
        .contact-section input
        {
            font-size: 1.1em;
            line-height: 2;
            width: 100%;
            padding: 10px 15px;
            color: #FFFFFF;
            background-color: #776108;
            border: 1px solid #776108;
            border-radius: 5px;
            outline: none;
        }
        
        input::placeholder {
            color: #FFFFFF;
          }
        
        .contact-section button
        {
            background-color: #EFC41A;
            color: #000000;
            padding: 10px 15px;
        }
        
        @media (max-width:900px) {
        
            .contact-section
            {
                padding: 10px 5px;
            }
        
            .contact-section h1
            {
                font-size: 1.5em;
            }
        
            .contact-section h2
            {
                font-size: 1.3em;
                line-height: 1;
            }
            .contact-section p
            {
                line-height: 1.5;
            }
            
        }`
      }
    </style>
    </>
  );
}

export default Getintouch;
