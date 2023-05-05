
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import '../css/Header.css';

function Header({ headerData }) {
  let count = 1;
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{headerData[1][0].name}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav  mb-lg-0">
            {headerData[0].links.map((link, index) => {
              if (count == 1) {
                count++;
                return <li className="nav-item" key={index}> <a className="nav-link active" href={link.href}>{link.text}</a></li>

              }
              else {
                return <li className="nav-item" key={index}><a className="nav-link" href={link.href}>{link.text}</a></li>
              }
            }

            )}

          </ul>
        </div>
      </div>
      {
        window.addEventListener("scroll", function () {
          let navbar = document.querySelector(".navbar");
          if (window.pageYOffset > 100) {
            navbar.classList.add("fixed");
          } else {
            navbar.classList.remove("fixed");
          }
        })
      }
    </nav>
    <style jsx global>
      {
        `body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: rgba(12, 12, 12) !important;
          scroll-behavior: smooth;
        }
      img 
      {
        object-fit:cover;
      }
      .navbar
      {
          position: fixed;
          width: 100%;
        padding: 0.5rem !important;
        background-color: #f1c40f !important;
        transition: all 0.5s ease-in-out;
      }
      .navbar.fixed
      {
        position: fixed;
        width: 100%;
        top: 0;
        left:0;
        z-index: 1000;
        transition: all 0.5s ease-in-out;
      }
     
      .navbar-nav .show > .nav-link, .navbar-nav .nav-link.active {
        color: rgba(0, 0, 0,0.9) !important;
        font-weight: 500 !important;
      }
      .nav-link:hover
      {
        text-decoration: underline !important;
      }
      .navbar-expand-lg .navbar-nav .nav-link
      {
        color: #000;
        text-decoration: none;
        margin: 0.2rem 0.5rem;
        font-size: 1.0rem;
        font-weight: 400;
        transition: all 0.2s ease-in-out;
      }
      .header-section h1
      {
          font-weight: 400;
          font-size: 3em;
          line-height: 3;
          margin-bottom: 10px;
          color: #FFFFFF;
          z-index: 1;
         
      }
      .header-section .foot   
      {
          color: #FFFFFF;
      }
      
      .header-section h2
      {
          word-wrap: break-word;
          font-size: 1.5em;
          margin-bottom: 20px;
          color: #FFFFFF;
      }
      .header-section p
      {
          word-wrap: break-word;
          font-size: 1.1em;
          line-height: 1;
          color: #FFFFFF;
      
      }
      
      @media (max-width:900px) {
      
          .header-section
          {
              padding: 10px 5px;
          }
      
          .header-section h1
          {
              font-size: 1.5em;
          }
      
          .header-section h2
          {
              font-size: 1.3em;
              line-height: 1;
          }
          .header-section p
          {
              line-height: 1.5;
          }
          
      }
      
      
      .container,.container-fluid-section {
          padding-top: 50px;
          padding-bottom: 50px;
        }
        
        @media (min-width: 1400px) {
          .container {
            max-width: 1100px !important;
          }
        
          .container-fluid-section {
            max-width: 1200px !important;
          }
        }
        
        @media (min-width: 1200px) {
          .container {
            max-width: 1000px !important;
          }
        
          .container-fluid-section {
            max-width: 1100px !important;
          }
        }
        
        @media (min-width: 992px) {
          .container {
            max-width: 900px !important;
          }
          .container-fluid-section
          {
            max-width: 1100px !important;
          }
        
        }
        
        .react-multiple-carousel__arrow
        {
          background: rgba(241, 196, 15, 0.4) !important;
        }
        .react-multi-carousel-list
        {
          padding: 10px 0px;
        }`
      }
    </style>
</>
  );
}

export default Header;
