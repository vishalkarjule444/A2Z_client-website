import React, { useEffect } from 'react';
import './corevalues.css'; // Assuming you have your custom CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS file for animations

function Corevalues() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <div className="container-fluid core-values-container" style={{ backgroundColor: 'black' }}>
        <h1 className="text-center color">Our Core Values</h1>
        <div className="container">
          <div className="row">
            {[
              { title: "Innovation", text: "Embrace and drive technological innovation." },
              { title: "Quality", text: "Deliver high-quality solutions and services." },
              { title: "Focus", text: "Prioritize client satisfaction and personalized solutions." },
              { title: "Improvement", text: "Learn, adapt, and improve continuously." },
              { title: "Reliability", text: "Ensure reliable and robust software and applications." },
              { title: "Accountability", text: "Take ownership and deliver on commitments." }
            ].map((value, index) => (
              <div className="col-md-4 mb-5" key={index} data-aos="fade-up">
                <div className="card corecard p-5 text-center text-white" style={{ backgroundColor: 'black' }}>
                  <div className="card-body">
                    <h5 className="card-title color">{value.title}</h5>
                    <p className="card-text">{value.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Corevalues;
