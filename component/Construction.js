import Image from "next/image";
import constImg from "../public/img/construction/construction.jpg";
import React from "react";
// import '../css/Construction.css';
function Construction({ homeData }) {
  return (
    <>
      <div className="construction-section pt-5" id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <Image src={constImg} className="img-fluid" alt="logo" />
            </div>
            <div className="col-md-7 d-flex flex-column  justify-content-center ">
              <div>
                <h1>{homeData.title}</h1>
              </div>

              <div>
                <p style={{ fontWeight: "700", fontSize: 36 }}>
                  {homeData.subtitle}
                </p>
              </div>
              <div>
                <p>{homeData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .construction-section {
            padding: 20px;
            min-height: 400px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
          }
          .construction-section img {
            height: 77vh;
            border-radius: 7px;
          }
          .construction-section h1 {
            font-weight: 900;
            font-size: 3.5em;
            line-height: 2;
            color: rgb(245, 243, 128);
          }
          .construction-section h5 {
            font-weight: bold;
            word-wrap: break-word;
            color: #e5e0df;
            font-size: 1.2em;
            line-height: 2;
          }
          .construction-section p {
            font-size: 1.2em;
            line-height: 2;
            color: #e5e0df;
            font-weight: 100;
          }

          @media (max-width: 900px) {
            .construction-section {
              padding: 10px 5px;
            }

            .construction-section img {
              width: 100%;
              margin-bottom: 10px;
              height: 50vh;
            }
            .construction-section h1 {
              font-size: 1.5em;
            }
          }
        `}
      </style>
    </>
  );
}

export default Construction;
