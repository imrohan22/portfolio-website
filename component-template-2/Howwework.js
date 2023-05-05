import React from 'react';
import howwework from '../public/img-tamplate-2/assets-temp-2/how-we-wrok.jpg';
import Image from 'next/image';
// import '../css-template-2/Howwework.css';
function Howwework({ howWeWorkData }) {
  return (
    // < !--How - we - work section-- >
    <section className="bg-light py-5 border-bottom" id="howWeWork">
      <div className="container px-5 my-5">
        <div className="mb-5 text-center">
          <h2 className="fw-bolder display-3 text-uppercase">How We Work</h2>
        </div>
        <div className="row gx-5 justify-content-center align-items-center">
          {/* <!-- How-we-work card--> */}
          <div className="col-lg-4 col-xl-4">
            <div className="card bg-primary mb-5 mb-xl-0">
              <div className="card-body p-5">
                {howWeWorkData.component.map((howwework, index) =>
                  <React.Fragment key={index}>
                    <div className="mb-5">
                      <h4 className="fw-bold">{howwework.title}</h4>
                      <span className="">{howwework.description}</span>
                    </div>
                  </React.Fragment>
                )}

              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-8">
            <Image src={howwework} className="img-fluid" alt="how-we-wrok" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Howwework;
