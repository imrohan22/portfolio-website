import React from "react";

// import '../css/Getintouch.css';
function Getintouch({ getInTouchData }) {
  return (
<>
    <div className="getintouch-section" id="getInTouch">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Get in Touch</h1>
          </div>
        </div>
        <form>
          <div className="row">
                {getInTouchData.fields.map((form, index) => {
                  if (form.type == "select") {
                    return <div className="col-md-6 mb-3" key={index}>
                      <label className="form-label">{form.label}:</label>

                      <select name={form.name} >
                        {form.options.map((opt, index) =>
                          <option value={opt.value} key={index}>{opt.text}</option>
                        )}
                      </select>
                    </div>
                  }
                  else if (form.type == "textarea") {
                    return <div className="col-md-6 mb-3" key={index}>
                      <label className="form-label">{form.label}:</label>
                      <textarea type={form.type} name={form.name} rows="4" placeholder={form.label}></textarea>
                  </div>
                  }
                  else {
                    return <div className="col-md-6 mb-3" key={index}>
                      <label className="form-label">{form.label}:</label>
                      <input type={form.type} name={form.name} placeholder={form.label}></input>
                    </div>
                  }
                }

                )}
                <div className="col-md-12 mb-3 text-center">
                  <button type="submit" className="btn">{getInTouchData.submitButtonText}</button>
                </div>
          </div>
        </form>
      </div>
    </div>
    <style jsx global>
      {
        `.getintouch-section
        {
            padding: 35px 20px;
            min-height: 100px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
            position: relative;
            
        }
        
        
        .getintouch-section h1
        {
            font-weight: 400;
            font-size: 3em;
            line-height: 3;
            color: #FFFFFF;
            z-index: 1;
           
        }
        
        .getintouch-section h2
        {
            word-wrap: break-word;
            font-size: 1.8em;
            margin-bottom: 20px;
            color: #FFFFFF;
        }
        .getintouch-section p
        {
            word-wrap: break-word;
            font-size: 1.1em;
            line-height: 1;
            color: #FFFFFF;
        
        }
        
        .getintouch-section label
        {
            font-size: 1.1em;
            line-height: 2;
            color: #FFFFFF;
        }
        
        .getintouch-section input,select,textarea
        {
            font-size: 1.1em;
            line-height: 2;
            width: 100%;
            padding: 10px 15px;
            color: #FFFFFF;
            background-color: #776108;
            border: 1px solid #776108;
            border-radius: 5px;
            outline: none;
        }
        .getintouch-section select
        {
            padding: 17px 15px;
        }
        input::placeholder,textarea::placeholder {
            color: #FFFFFF;
          }
        
        .getintouch-section button
        {
            background-color: #EFC41A;
            color: #000000;
            padding: 10px 15px;
        }
        .getintouch-section button:hover
        {
            background-color: #EFC41A;
            color: #000000;
        }
        
        @media (max-width:900px) {
        
            .getintouch-section
            {
                padding: 10px 5px;
            }
        
            .getintouch-section h1
            {
                font-size: 1.5em;
            }
        
            .getintouch-section h2
            {
                font-size: 1.3em;
                line-height: 1;
            }
            .getintouch-section p
            {
                line-height: 1.5;
            }
            
        }`
      }
    </style>
    </>
  );
}

export default Getintouch;
