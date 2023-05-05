import Image from 'next/image';
import awardImg from '../public/img-tamplate-2/assets-temp-2/award.jpg'
import React from 'react';


function Award({ awardData }) {

  return (
    // < !--Awards section-- >
    <section className="pt-5 border-bottom" id="award">
      <div className="container px-5 my-5">
        <div className=" mb-5">
          <h2 className="fw-bolder display-2 text-center">Awards & Recognition</h2>
        </div>
        <div className="row gx-5 py-5 justify-content-center">
          {awardData.map((award, index) =>
            <React.Fragment key={index}>
              <div className="col-lg-3 col-xl-3">
                <div className="card">
                  <div className="img-container">
                    <Image src={awardImg} className="card-img-top rounded-5 h-100" alt="awards" width={180} />
                  </div>
                  <div className="card-body d-flex align-items-center flex-column ">
                    <h4 className="card-text">{award.title}</h4>
                    <p>{award.year}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}

          
        </div>
      </div>
    </section>
    // <div className="award-section" id="award">

    //   <div className="container-fluid container-fluid-section">
    //     <div className="row">
    //       <div className="col-md-12">
    //         <h1>Award</h1>
    //       </div>
    //       <div className="col-md-12 text-center">
    //         <div className="row">
    //           <Carousel responsive={responsive}>
    //             {awardData.map(award => (
    //               <>
    //                 <div key={award.title} className="m-2 d-flex flex-column align-items-center award-top-card" >
    //                   <div className="card-img-top"></div>
    //                   <div className="award-card">

    //                     <div className="card-body">
    //                       <h2 className="card-title">{award.title}</h2>
    //                       <p>{award.year}</p>
    //                       <p>{award.description}</p>

    //                     </div>
    //                   </div>

    //                 </div>
    //               </>
    //             ))}
    //           </Carousel>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Award;
