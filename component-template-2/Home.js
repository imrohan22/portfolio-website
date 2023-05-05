// import '../css-template-2/Home.css';
import Image from 'next/image';
import construction from '../public/img-tamplate-2/construction-01.jpg';
function Home() {

  return (
    <>
    <div class="section">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <Image src={construction} className="d-block img-fluid" alt="..." />
          </div>
          <div className="carousel-item">
            <Image src={construction} className="d-block img-fluid" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <style jsx global>
      {
        `.carousel-item img
        {
            width: 100%;
            height: 500px;
        }`
      }
    </style>
</>
  );
}

export default Home;
