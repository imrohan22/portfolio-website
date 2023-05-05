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
                <div className="card py-3">
                  <div>
                    <Image className="why-us-sticker" src={sticker} alt="Card image cap" width={150} height={150} />
                  </div>
                  <div className="img-square-wrapper d-flex align-items-center">
                    <h2 className="display-5 fw-bold">{count}</h2>
                    <h3>{whychooseus.title}</h3>
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
