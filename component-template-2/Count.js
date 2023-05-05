import React from "react";

// import '../css-template-2/Count.css';
function GetIntouch({ countData }) {
  return (
    <>
    <section className="py-5 border-bottom  " id="portfolio-sites">
      <div className="container px-5 my-5">
      <div className=" mb-5">
          <h2 className="fw-bolder display-2 text-center">Our Accomplishments</h2>
        </div>
        <div className="row gx-5 py-5 ">
              <div className="col-md-3 col-sm-6">
                <div className="counter">
                  <div className="counter-icon">
                    <i className="fa fa-globe"></i>
                  </div>
                  <h3>Project Completed</h3>
                  <span className="counter-value">{countData.projectsCompleted}</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="counter">
                  <div className="counter-icon">
                    <i className="fa fa-rocket"></i>
                  </div>
                  <h3>Total Orders Worth Completed</h3>
                  <span className="counter-value">{countData.totalOrdersWorthCompleted}</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="counter">
                  <div className="counter-icon">
                    <i className="fa fa-rocket"></i>
                  </div>
                  <h3>Total Square Feet Work Done</h3>
                  <span className="counter-value">{countData.totalSquareFeetWorkDone}</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="counter">
                  <div className="counter-icon">
                    <i className="fa fa-rocket"></i>
                  </div>
                  <h3>Years Of Experience</h3>
                  <span className="counter-value">{countData.yearsOfExperience}</span>
                </div>
              </div>
        </div>
      </div>
      {
        document.querySelectorAll('.counter-value').forEach(function (element) {
          var counter = 0;
          var target = parseInt(element.textContent);
          var increment = Math.ceil(target / 30); // divide target by the number of animation steps

          var timer = setInterval(function () {
            counter += increment;
            if (counter >= target) {
              clearInterval(timer);
              counter = target;
            }
            element.textContent = counter;
          }, 100); // divide duration by number of animation steps
        })
      }
    </section>
    <style jsx global>
      {
        `.count-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          flex-direction: column;
          -webkit-box-pack: center;
      
          justify-content: center;
      }
      
      .count-section {
          background: #F1C40F;
          padding: 35px 20px;
          height: 100%;
          border-bottom: 1px solid #e5e0df;
          position: relative;
      
      }
      
      .count-section p {
          color: black;
      }
      
      /*  Counter Section  */
      .counter {
          font-family: 'Open Sans', sans-serif;
          color: #fff;
          background: #F1C40F;
          text-align: center;
          width: 190px;
          padding: 25px 30px 10px;
          margin: 0 auto;
          border-radius: 30px 0;
          box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.05);
          position: relative;
          z-index: 1;
      }
      
      .counter:before {
          content: "";
          background: #FFF;
          border-radius: 15px 0 30px 0;
          box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.15);
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          bottom: 27px;
          z-index: -1;
      }
      
      .counter .counter-icon {
          font-size: 35px;
          margin: 0 0 10px;
          transform: rotateX(0deg);
          transition: all 0.3s ease 0s;
      }
      
      .counter:hover .counter-icon {
          transform: rotateX(360deg);
          text-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      }
      
      .counter h3 {
          font-size: 17px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 20px;
          color: #000;
      }
      
      .counter .counter-value {
        color: #000;
        background: #F1C40F;
        font-size: 33px;
        font-weight: 600;
        text-align: center;
        line-height: 60px;
        height: 50px;
        margin: 0 -20px 0 -20px;
        display: block;
    }
      
      .counter.pink:before {
          background-color: #FF5D94;
      }
      
      @media screen and (max-width:990px) {
          .counter {
              margin-bottom: 40px;
          }
      }`
      }
    </style>
    </>
  );
}

export default GetIntouch;
