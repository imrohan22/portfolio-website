// import '../css/Footer.css';
function Footer({ ourDetailsData }) {
  return (
    <>
      <div className="footer-section">
        <div className="row">
          <div className="col-md-12 text-center">
            <span className="foot">{ourDetailsData.tagline}</span>
          </div>
        </div>
      </div>
      <style jsx global>
        {
          `.footer-section
        {
            padding: 35px 20px;
            min-height: 100px;
            height: 100%;
            border-bottom: 1px solid #e5e0df;
            position: relative;
            
        }
        
        .footer-section h1
        {
            font-weight: 400;
            font-size: 3em;
            line-height: 3;
            margin-bottom: 10px;
            color: #FFFFFF;
            z-index: 1;
           
        }
        .footer-section .foot   
        {
            color: #FFFFFF;
        }
        
        .footer-section h2
        {
            word-wrap: break-word;
            font-size: 1.5em;
            margin-bottom: 20px;
            color: #FFFFFF;
        }
        .footer-section p
        {
            word-wrap: break-word;
            font-size: 1.1em;
            line-height: 1;
            color: #FFFFFF;
        
        }
        
        @media (max-width:900px) {
        
            .footer-section
            {
                padding: 10px 5px;
            }
        
            .footer-section h1
            {
                font-size: 1.5em;
            }
        
            .footer-section h2
            {
                font-size: 1.3em;
                line-height: 1;
            }
            .footer-section p
            {
                line-height: 1.5;
            }
            
        }`
        }
      </style>
    </>
  );
}

export default Footer;
