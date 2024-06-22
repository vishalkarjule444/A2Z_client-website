import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './client.css';

function Client() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <div className="container-fluid xyzb"  style={{backgroundColor:'black'}} data-aos="fade-up">
      <div className="row">
        <div className="container rounded text-white">
          <h1 className=" text-center color">OUR BEST CLIENT:</h1>
          <p className='text-center'>Their level of expertise and professionalism is unmatched, <br />and we highly recommend their services to anyone looking <br /> to leverage technology to grow their business.</p>
          <p className='text-center color fw-bold text-decoration-underline'>Rohit Narwade</p>
          <p className='text-center'>( Chairman of Nagebaba Multistate )</p>
          </div>
      </div>
    </div>
    <div className="container-fluid" style={{backgroundColor:'black'}} data-aos="fade-up">
      <div className="row">
        <div className="col-md-12">
          <div className="sliderabc mt-5">
            <div className="logos ">
              <img src="https://a2zithub.org/assets/nagebaba.webp" alt="" className='rounded shadow' style={{width:'100px'}} />
              <img src="https://a2zithub.org/assets/rnempire.png" alt="" className='rounded shadow' style={{width:'100px'}} />
              <img src="https://a2zithub.org/assets/shingavi.jpg" alt="" className='rounded shadow' style={{width:'100px'}} />
              <img src="https://a2zithub.org/assets/global_logo2.jpeg" alt="" className='rounded shadow' style={{width:'100px'}} />
              <img src="https://a2zithub.org/assets/SBTL%20logo-02.png" alt="" className='rounded shadow' style={{width:'100px'}} />
              <img src="https://a2zithub.org/assets/nirmal.png" alt="" className='rounded shadow' style={{width:'200px'}} />
              <img src="https://a2zithub.org/assets/167783776522983034.jpeg" alt="" className='rounded shadow' style={{width:'200px'}} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
        
  );
}

export default Client;
