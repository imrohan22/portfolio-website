import Image from 'next/image';
import constImg from '../public/img/construction/construction.jpg';
// import '../css/Portfolio.css';
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
  let siteImgBool = true;

  const loaderProp =({ src }) => {
    return src;
  }

  return (
    <>
      <div className="portfolio-section" id="portfolio-sites">
        <Modal
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="row">
            <div className="col-md-12 mb-2">
              <h3>Site Details</h3>
            </div>
            <div className="col-md-6">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {portData.map((pf, index) => {
                    return pf.sitePhotos.map((siteimg, indexSte) => {
                      return siteimg.images.map((img, ind) => {
                        if (count == 1) {
                          count++;
                          return (<div className="carousel-item active" key={ind}>
                            <Image src={img.url} className="d-block img-fluid w-100" alt="..." width={100} height={100} loader={loaderProp}/>
                          </div>)
                        }
                        else {
                          return (<div className="carousel-item" key={ind}>
                            <Image src={img.url} className="d-block img-fluid" alt="..." width={100} height={100} loader={loaderProp}/>
                          </div>)
                        }
                      })
                    })
                  }
                  )}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-6 d-flex  flex-column justify-content-center">

              {portData.map((pf, index) =>
                <React.Fragment key={index}>
                  <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Client Name</h5>
                      </div>
                      <p className="mb-1">{pf.clientName}</p>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Site Location</h5>
                      </div>
                      <p className="mb-1">{pf.siteLocation}</p>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Project Size</h5>
                      </div>
                      <p className="mb-1">{pf.projectSize}</p>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Year Of Completion</h5>
                      </div>
                      <p className="mb-1">{pf.yearOfCompletion}</p>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Description</h5>
                      </div>
                      <p className="mb-1">{pf.brief}</p>
                    </a>
                  </div>

                </React.Fragment>
              )}
            </div>
            <div className="col-md-12 col-12 mt-3 mb-3 text-right">
              <button className="btn btn-dark" onClick={closeModal}>Close</button>
            </div>
          </div>


        </Modal>
        <div className="container-fluid container-fluid-section">
          <div className="row">
            <div className="col-md-12">
              <h1>Portfolio Sites</h1>
            </div>
          </div>
          <div className="row">
            {portfolioData.map((portfolio, index) =>
              portfolio.sitePhotos.map((siteImg, ind) =>
                <React.Fragment key={ind}>
                  <div className="col-md-4  p-3 portfolio-img-box">
                    <Image src={portfolio.sitePhotos[0].images[0].url} onClick={() => passDataFromModal([portfolio])} className="img-fluid " alt="logo" loader={loaderProp}/>
                  </div>

                </React.Fragment>
              )
            )}
          </div>
        </div>
      </div>
      <style jsx global>
        {
          `.ReactModal__Overlay 
        {
            z-index: 10000 !important;
            background-color: rgba(0, 0, 0, 0.5) !important;
           
          
        }

        .portfolio-img-box
        {
         
          height:230px;
        }
        .portfolio-section img
        {
          width:100% !important;
          height:100% !important;
          background-position:center;
        }

        .ReactModalPortal
        {
            overflow: hidden !important;
        }
        .ReactModal__Content
        {
            max-width:800px ;
            width:800px;
            max-height: 100vh;
            overflow-y: auto;
        }
        .carousel-item
        {
            transition:none !important;
            overflow: hidden !important;
        }
        .carousel-item img{
            width: 100%;
            height:400px !important;
        }
        .portfolio-section
        {
            padding: 20px;
            min-height: 400px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
        }
        .portfolio-section img
        {
            height: 200px;
            width: 80%;
            box-shadow: -15px 15px 1px 0px #f1c40f;
           
          
        }
        .portfolio-section h1
        {
            font-weight: 400;
            font-size: 3em;
            line-height: 3;
            color: #FFFFFF;
            z-index: 1;
        }
        .portfolio-section h5
        {
            word-wrap: break-word;
            font-size: 1.5em;
            margin: 15px 5px;
            color: #FFFFFF;
        }
        .portfolio-section p
        {
            font-size: 1.2em;
            line-height: 2;
            color: #e5e0df;
            font-weight: 100;
        }
        .ReactModal__Content
        {
            border:1px solid rgba(12, 12, 12) !important;
            background:rgba(12, 12, 12) !important;
        }
        .ReactModal__Content h3
        {
            color: #FFFFFF !important;
        }
        .ReactModal__Content .list-group-item
        {
            background:rgba(12, 12, 12) !important;
            color: #FFFFFF;
            border:1px solid #FFFFFF !important;
        
        }
        
        @media (max-width:900px) {
        
            .portfolio-section
            {
                padding: 10px 5px;
            }
            .ReactModal__Content
            {
                max-width:100% !important;
                width:100% !important;
            }
        
            .portfolio-section img
            {
                width: 100%;
                margin-bottom: 10px;
                height:50vh;
            }
            .portfolio-section h1
            {
                font-size: 1.5em;
            }
        }`
        }
      </style>
    </>
  );
}

export default PortFolio;
