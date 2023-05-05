// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// import '@/styles/css/Award.css'
// import '@/styles/css/Construction.css'
// import '@/styles/css/Contactus.css'
// import '@/styles/css/Count.css'
// import '@/styles/css/Footer.css'
// import '@/styles/css/Getintouch.css'
// import '@/styles/css/Header.css'
// import '@/styles/css/Howwework.css'
// import '@/styles/css/Portfolio.css'
// import '@/styles/css/Product.css'
// import '@/styles/css/Specialization.css'
// import '@/styles/css/Team.css'
// import '@/styles/css/Testimonial.css'
// import '@/styles/css/Whychooseus.css'


// import '@/styles/css-template-2/Count.css'
// import '@/styles/css-template-2/Footer.css'
// import '@/styles/css-template-2/HeaderTemp2.css'
// import '@/styles/css-template-2/Home.css'
// import '@/styles/css-template-2/Howwework.css'
// import '@/styles/css-template-2/Portfolio.css'
// import '@/styles/css-template-2/Specialization.css'
// import Script from 'next/script';
import { useEffect } from 'react';


export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  // <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
  return <Component {...pageProps} />
}
