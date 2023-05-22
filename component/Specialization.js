import Image from "next/image";
import splImg from "../public/img/construction/specialization.jpeg";
import React from "react";
// import '../css/Specialization.css';
function Specialization({ specializationData }) {
  const loaderProp = ({ src }) => {
    return src;
  };
  return (
    <>
      <div className="specialization-section " id="specializations">
        <div className="container">
          <div className="row" style={{ justifyContent: "space-around" }}>
            <div
              className="col-md-12"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h1>Our Specialisation</h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {specializationData?.specializationComponent?.map(
                (specialization, index) => (
                  <React.Fragment key={index}>
                    <div className="text-center">
                      <div className="spl-card">
                        <div>
                          <Image
                            src={
                              specialization.image.url
                                ? specialization.image.url
                                : ""
                            }
                            className="img-fluid"
                            alt="logo"
                            width={100}
                            height={100}
                            loader={loaderProp}
                          />
                        </div>
                        <div>
                          <h2>{specialization.title}</h2>
                        </div>
                        <div>
                          <p>{specialization.description}</p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .specialization-section {
            padding: 20px;
            min-height: 400px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
            position: relative;
          }
          .spl-card {
            width: 400px;
            padding: 25px 25px;
            margin: auto;
            background: #f1c40f;
            border-radius: 5px;
            height: 100%;
          }
          .spl-card img {
            width: 350px;
            height: 350px;
            border-radius: 7px;
            margin-bottom: 15px;
          }
          .spl-card h2 {
            word-wrap: break-word;
            font-size: 1.8em;
            margin-bottom: 20px;
            color: #000000;
          }
          .spl-card p {
            word-wrap: break-word;
            font-size: 1.1em;
            line-height: 1.8;
            color: #000000;
          }

          .specialization-section h1 {
            font-weight: 900;
            font-size: 2.5em;
            line-height: 3;
            color: #ffffff;
          }

          @media (max-width: 900px) {
            .specialization-section {
              padding: 10px 5px;
            }

            .spl-card {
              width: 100%;
            }

            .spl-card img {
              width: 100%;
              margin-bottom: 10px;
              height: 50vh;
            }
            .spl-card h2 {
              font-size: 1.3em;
            }
            .specialization-section h1 {
              font-size: 1.5em;
            }
          }
        `}
      </style>
    </>
  );
}

export default Specialization;
