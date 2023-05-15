import React from 'react';
import sticker from '../public/img-tamplate-2/assets-temp-2/sticker.png';
import Image from 'next/image';
function Whychooseus({ whyChooseUsData }) {
  let count=0;
  return (
    <>
    <section className="py-5 border-bottom why-us-section" id="whyChooseUs">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          {/* <!-- Why us Qn--> */}
          <div className="col-lg-6 col-xl-6">
            <div className="section-divider height-1 mb-4"></div>
            <h2 className="fw-bolder display-big m-sm-5">WHY<br /> us?</h2>
          </div>
          {/* <!-- Cards with Sticker--> */}
          <div className="col-lg-6 col-xl-6 pt-5">
            {whyChooseUsData.component.map((whychooseus, index) =>{
               count++
              return <React.Fragment key={index}>
                <div className="card py-3 d-flex flex-row justify-content-centent align-items-center">
                  <div className="why-us-main">
                    <div className="why-us-desc">
                    {/* <Image className="why-us-sticker" src={sticker} alt="Card image cap" width={150} height={150} /> */}
                    <h2 className=" fw-bold">{whychooseus.description}</h2>
                    </div>
                  </div>
                  <div className="img-square d-flex align-items-center">
                  
                    <h3 className="img-square-text">{whychooseus.title}</h3>
                  </div>
                </div>
                
              </React.Fragment>
            
           
            }
            )}
          </div>

        </div>
      </div>
    </section>
  <style jsx global>
  {
    `
    .img-square-text
    {
      font-size: 1.75rem;
    }
    .why-us-main
    {
      z-index: 1;
    }
    .why-us-desc
    {
      background: url('img-tamplate-2/assets-temp-2/sticker.png');
                            max-width: 150px;
                            width: 150px;
                            height: 150px;
                            background-size: contain;
                            background-repeat: no-repeat;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            z-index: 1;
    }
    .img-square
    {
      background-color: rgba(255,204,0, 0.4) !important;
                        margin-left: -50px;
                        margin-top: 16px;
                        padding: 10px;
                        padding-left: 61px;
                        margin-bottom: 16px;
                        border-radius: 15px;
                        min-height: 120px;
    }
    @media (max-width:900px) {
      .why-us-desc
      {
        max-width: 120px;
                            width: 120px;
                            height: 120px;
      }
      .img-square-text
      {
        font-size: 1.0rem;
      }
      .img-square
      {
        min-height: 105px;
      }
    }

    @media (max-width:500px) {
      .display-big
      {
        font-size: calc(1.525rem + 3.3vw) !important;
      }
    }
  
  `
  }
</style>
</>
  );
}

export default Whychooseus;
