import React from "react";

function Getintouch({ getInTouchData }) {
  return (
    // < !--Contact section-- >
    <section className="bg-light py-5" id="getInTouch">
      <div className="container px-5 my-5 px-5">
        <div className="text-center mb-5">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i>
          </div>
          <h2 className="fw-bolder">Get in touch</h2>
          <p className="lead mb-0">We would love to hear from you</p>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              {getInTouchData.fields.map((form, index) => {
                if (form.type == "select") {
                  return <div className="form-floating mb-3" key={index}>
                    <select name={form.name} className="form-control">
                      {form.options.map((opt, index) =>
                        <option value={opt.value} key={index}>{opt.text}</option>
                      )}
                    </select>
                    <label htmlFor="phone">{form.label}</label>
                    <div className="invalid-feedback" data-sb-feedback="phone:required">A {form.label} is required.
                    </div>
                  </div>
                }
                else if (form.type == "textarea") {
                  return <div className="form-floating mb-3" key={index}>
                    <textarea  name={form.name} placeholder={form.placeholder} className="form-control h-100" rows="5"></textarea>
                    <label htmlFor="name">{form.label}</label>
                  </div>
                }
                else {
                  return <div className="form-floating mb-3" key={index}>
                    <input className="form-control" name={form.name} placeholder={form.placeholder} type={form.type} data-sb-validations="required" />
                    <label htmlFor="name">{form.label}</label>
                    <div className="invalid-feedback" data-sb-feedback="name:required">A {form.label} is required.</div>
                  </div>
                }
              }
              )}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">Error sending message!</div>
              </div>
              <div className="d-grid"><button className="btn btn-primary btn-lg " id="submitButton"
                type="submit">{getInTouchData.submitButtonText}</button></div>
            </form>
          </div>
        </div>
      </div >
    </section >
  );
}

export default Getintouch;
