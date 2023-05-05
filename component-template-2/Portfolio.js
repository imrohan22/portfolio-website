// import '../css-template-2/Portfolio.css';
import Image from 'next/image';
import constImg from '../public/img/construction/construction.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('portfolio-sites'));

function PortFolio({ portfolioData }) {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [portData, setData] = React.useState([]);
  let count = 1;
  let siteImgBool = true;
  function openModal() {
    setIsOpen(true);
  }
  function passDataFromModal(siteData) {
    setData(siteData)
    openModal()

  }

  function closeModal() {
    setIsOpen(false);
  }

  const loaderProp = ({ src }) => {
    return src;
  }

  return (
    <>
      <section className="py-5 border-bottom portfolio-section" id="portfolio-sites">
        <div className="container px-5 my-5">
          <div className="row">
            <div className="mb-5 text-center">
              <h2 className="fw-bolder display-3 text-uppercase">Potrfolio Sites</h2>
            </div>
          </div>
            {portfolioData.map((portfolio, index) => (
              <React.Fragment key={index}>
                <div className="row portfolio-devider">
                  <div className="col-md-6 mb-5 postfolio-img-section">
                    {portfolio.sitePhotos.map((siteimg, index) => {
                      return siteimg.images.map((img, index) => {
                        if (siteImgBool) {
                          siteImgBool = false;
                          return (<div className="w-100 mb-3 d-flex justify-content-end portfolio-img-box" key={index}>
                            <Image src={img.url} className="img-fluid " alt="logo" width={100} height={100} loader={loaderProp} />
                          </div>)

                        }
                        else {
                          siteImgBool = true;
                          return (<div className="w-100 mb-3 d-flex justify-content-start portfolio-img-box" key={index}>
                            <Image src={img.url} className="img-fluid " alt="logo" width={100} height={100} loader={loaderProp} />
                          </div>)

                        }
                      })

                    })
                    }

                  </div>
                  <div className="col-md-6 mb-5 d-flex flex-column  justify-content-center postfolio-content-section">
                    <div>
                      <h1>{portfolio.clientName}</h1>
                    </div>
                    <div>
                      <p className="text-justify">{portfolio.brief}</p>
                    </div>
                    <div>
                      <h2>Project Info</h2>
                    </div>
                    <div>
                      <ul>
                        <li><b>Site Location : </b>{portfolio.siteLocation}</li>
                        <li><b>Project Size : </b>{portfolio.projectSize}</li>
                        <li><b>Year Of Completion : </b>{portfolio.yearOfCompletion}</li>
                      </ul>

                    </div>

                  </div>
                </div>
              </React.Fragment>
            )
            )}

        </div>

      </section >
      <style jsx global>
        {
          `.ReactModal__Overlay {
          z-index: 10000 !important;
          background-color: rgba(0, 0, 0, 0.5) !important;
      
      
      }
      .portfolio-devider
      {
        border-bottom:1px solid #CCCCCC;
      }
      .portfolio-img-box
      {
        width:100% !important;
        height:200px;
      }
      .portfolio-section img
      {
        height:100% !important;
        background-position:center;
      }
      .ReactModalPortal {
          overflow: hidden !important;
      }
      
      .ReactModal__Content {
          max-width: 800px;
          width: 800px;
          max-height: 100vh;
          overflow-y: auto;
      }
      
      .carousel-item {
          transition: none !important;
          overflow: hidden !important;
      }
      
      .carousel-item img {
          width: 100%;
          height: 400px !important;
      }
      
      .portfolio-section {
          padding: 20px;
          min-height: 400px;
          height: 100%;
          border-bottom: 1px solid #e5e0df;
      }
      
      .portfolio-section img {
          height: 200px;
          width: 80%;
          box-shadow: -15px 15px 1px 0px #f1c40f;
      
      
      }
      
      .portfolio-section h2 {
          font-weight: 600;
          margin-top: 10px;
      }
      
      .portfolio-section h1 {
          font-weight: 600;
          font-size: 3em;
          line-height: 2;
          color: #000000;
          z-index: 1;
      }
      
      .portfolio-section li {
          line-height: 2.2;
      }
      
      .portfolio-section h5 {
          word-wrap: break-word;
          font-size: 1.5em;
          margin: 15px 5px;
          color: #000000;
      }
      
      .portfolio-section p {
          font-size: 1.2em;
          line-height: 2;
          color: #000000;
          font-weight: 100;
          text-align: justify;
      }
      
      .postfolio-img-section, .postfolio-content-section {
          padding: 25px;
      }
      
      @media (max-width:900px) {
      
          .portfolio-section img {
              width: 100%;
          }
      
          .postfolio-img-section, .postfolio-content-section {
              padding: 25px;
          }
      
          .portfolio-section {
              padding: 10px 5px;
          }
      
          .ReactModal__Content {
              max-width: 100% !important;
              width: 100% !important;
          }
      
          .portfolio-section img {
              width: 100%;
              margin-bottom: 10px;
              height: 50vh;
          }
      
          .portfolio-section h1 {
              font-size: 1.5em;
          }
      }`
        }
      </style>
    </>
  );
}

export default PortFolio;
