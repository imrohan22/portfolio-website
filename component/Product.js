import splImg from '../public/img/construction/specialization.jpeg';
// import '../css/Product.css';
function Product() {
  return (
    <>
    <div className="product-section">
      {/* <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap" rel="stylesheet" /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Product</h1>
          </div>
          <div className="col-md-12 text-center">
            <div className="gallery">
              <div className="gallery__column">
                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Jessica Felicio</figcaption>
                  </figure>
                </div>

                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="Portrait by Oladimeji Odunsi" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
                  </figure>
                </div>

                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/VLPLo-GtrIE/300x300" alt="Portrait by Alex Perez" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Alex Perez</figcaption>
                  </figure>
                </div>
              </div>

              <div className="gallery__column">
                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/AR7aumwKr2s/300x300" alt="Portrait by Noah Buscher" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Noah Buscher</figcaption>
                  </figure>
                </div>

                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/dnL6ZIpht2s/300x300" alt="Portrait by Ivana Cajina" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Ivana Cajina</figcaption>
                  </figure>
                </div>

                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/tV_1sC603zA/300x500" alt="Portrait by Sam Burriss" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Sam Burriss</figcaption>
                  </figure>
                </div>
              </div>

              <div className="gallery__column">
                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/Xm9-vA_bhm0/300x500" alt="Portrait by Mari Lezhava" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Mari Lezhava</figcaption>
                  </figure>
                </div>

                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/NTjSR3zYpsY/300x300" alt="Portrait by Ethan Haddox" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Ethan Haddox</figcaption>
                  </figure>
                </div>

                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/2JH8d3ChNec/300x300" alt="Portrait by Amir Geshani" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Amir Geshani</figcaption>
                  </figure>
                </div>
              </div>
              <div className="gallery__column">
                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/AR7aumwKr2s/300x300" alt="Portrait by Noah Buscher" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Noah Buscher</figcaption>
                  </figure>
                </div>

                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/dnL6ZIpht2s/300x300" alt="Portrait by Ivana Cajina" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Ivana Cajina</figcaption>
                  </figure>
                </div>

                <div className="gallery__link">
                  <figure className="gallery__thumb">
                    <img src="https://source.unsplash.com/tV_1sC603zA/300x500" alt="Portrait by Sam Burriss" className="gallery__image" />
                    <figcaption className="gallery__caption">Portrait by Sam Burriss</figcaption>
                  </figure>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>


    </div>
    <style jsx global>
      {
        `.gallery {
          display: flex;
          padding: 2px;
          transition: 0.3s;
        }
       
        .gallery__column {
          display: flex;
          flex-direction: column;
          width: 25%;
        }
        .gallery__link {
          margin: 2px;
          overflow: hidden;
        }
        .gallery__link:hover .gallery__image {
           
          filter: grayscale(0);
        }
        .gallery__link:hover .gallery__caption {
          opacity: 1;
        }
        .gallery__thumb {
          position: relative;
        }
        .gallery__image {
          display: block;
          width: 100%;
          transition: 0.3s;
        }
        .gallery__image:hover {
          transform: scale(1.1);
          
        }
        .gallery__caption {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 5px;
          width: 100%;
          font-family: "Raleway", sans-serif;
          font-size: 16px;
          color: white;
          background: rgba(0,0,0,0.7);
          opacity: 0;
          /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(255, 255, 255, 0) 100%); */
          transition: 0.3s;
        }
      
      
      
      .product-section
      {
          padding: 20px;
          min-height: 400px;
          height: 100%;
          border-bottom: 1px solid #e5e0df;
          position: relative;
      }
      
      
      .product-section h1
      {
          font-weight: 900;
          font-size: 2.5em;
          line-height: 3;
          color: #FFFFFF;
      }
      
      
      
      @media (max-width:900px) {
      
          .product-section
          {
              padding: 10px 5px;
          }
          .gallery__caption
          {
              width: 100%;
              height: 100%;
          }
          .gallery__image
          {
              width: 100%;
              height: 100%;
          }
          .gallery
          {
              flex-direction: column;
          }
          .gallery__column
          {
              flex-direction: column;
              width: 100%;
          }
         
          .product-section h1
          {
              font-size: 1.5em;
          }
      }`
      }
    </style>
    </>
  );
}

export default Product;
