import React from 'react';
import special from '../public/img-tamplate-2/assets-temp-2/special.webp';
import Image from 'next/image';
// import '../css-template-2/Specialization.css';
function Specialization({ specializationData }) {
  let count = 1;
  const loaderProp =({ src }) => {
    return src;
  }
  return (
    // < !--Specialization section-- >
    <>
    <section className="bg-light py-5 border-bottom overflow-hidden" id="specializations">
      <div className="container px-5 my-5">
        <div className="mb-5 text-center">
          <h2 className="fw-bolder display-3 mb-5  d-inline">Specialization</h2>
        </div>
        <div className="row gx-5 py-5 justify-content-center">
         
            {specializationData.specializationComponent.map((specialization, index) =>
              <React.Fragment key={index}>
                <div className="col-md-6 mb-4 text-center">
                  <div className="spl-card">
                    <div>
                      <Image src={specialization.image.url ? specialization.image.url : ''} className="img-fluid" alt="logo" width={100} height={100} loader={loaderProp}/>
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
            )}
        </div>
      </div>
    </section>
    <style jsx global>
      {
        `.specialization-section
        {
            padding: 20px;
            min-height: 400px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
            position: relative;
        }
        .spl-card
        {
            width: 400px;
            padding: 25px 25px;
            margin: auto;
            background: #F1C40F;
            border-radius: 5px;
            height: 100%;
        }
        .spl-card img
        {
            width: 350px;
            height: 350px;
            border-radius: 7px;
            margin-bottom: 15px;
           
        }
        .spl-card h2
        {
            word-wrap: break-word;
            font-size: 1.8em;
            margin-bottom: 20px;
            color: #000000;
        }
        .spl-card p
        {
            word-wrap: break-word;
            font-size: 1.1em;
            line-height: 1.8;
            color: #000000;
        
        }
        
        .specialization-section h1
        {
            font-weight: 900;
            font-size: 2.5em;
            line-height: 3;
            color: #FFFFFF;
        }
        
        
        
        @media (max-width:900px) {
        
            .specialization-section
            {
                padding: 10px 5px;
            }
        
            .spl-card
            {
                width: 100%;
            }
        
            .spl-card img
            {
                width: 100%;
                margin-bottom: 10px;
                height:50vh;
            }
            .spl-card h2
            {
                font-size: 1.3em;
            }
            .specialization-section h1
            {
                font-size: 1.5em;
            }
        }`
      }
    </style>
</>
  );
}

export default Specialization;
