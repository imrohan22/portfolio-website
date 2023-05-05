import React from 'react';
import profileImg from '../public/img-tamplate-2/assets-temp-2/profile.jpg'
import Image from 'next/image';
function Getintouch({ contactData }) {
  return (
    <>
      {/* // < !--Contact us section-- > */}
      <section className="pt-5 border-bottom" id="contactDetails">
        <div className="container px-5 my-5">
          <div className="row gx-5 py-5 justify-content-center">
            <div className="col-lg-6 col-xl-6 gx-0">
              <h2 className="fw-bolder display-2 text-uppercase bg-primary px-5 py-4 my-5">Contact Us</h2>
              <div className="d-flex align-items-center my-3 text-break">
                <div className="contact-icon feature bg-primary bg-gradient rounded-3 me-3"><i className="bi bi-person-fill"></i></div>
                <h2 className="h4 contact-text"><a className="a-black" href="#">{contactData.name}</a></h2>
              </div>
              <div className="d-flex align-items-center my-3 text-break">
                <div className="contact-icon feature bg-primary bg-gradient rounded-3 me-3"><i className="bi bi-envelope-fill"></i></div>
                <h2 className="h4 contact-text"><a className="a-black" href={contactData.email}>{contactData.email}</a></h2>
              </div>
              <div className="d-flex align-items-center my-3 text-break">
                <div className="contact-icon feature bg-primary bg-gradient rounded-3 me-3"><i className="bi bi-telephone-fill"></i></div>
                <h2 className="h4 contact-text">{contactData.phone}</h2>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 gx-0">
              <div className="img-container">
                <Image src={profileImg} className="card-img-top border-15 h-100 border-primary" alt="contact-us" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider height-half"></div>
      </section >
      <style jsx global>
        {
          `
          @media screen and (max-width:990px) {
            .contact-icon
            {
              font-size: 1.3rem!important;
              width: 50px;
              height: 50px;
            }
            .contact-text
            {
              font-size: 1.0rem!important;
            }
          }
   `
        }
      </style>
    </>
  );
}

export default Getintouch;
