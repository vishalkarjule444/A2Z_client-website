// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
import { useEffect } from 'react';

    function Contactus() {
        useEffect(() => {
          AOS.init({
            duration: 1000, // duration of animations
          });
        }, []);
    return (
        <div className="container-fluid" style={{backgroundColor:'black'}} data-aos="fade-up">
            <div className="row">
                <div className="col-md-12">
                    
            <header className="text-center my-4 text-white">
                <h1 className='color'>Contact Us</h1>
                <p className="lead">We would love to hear from you!</p>
            </header>
            </div>
            <div className="col-md-6 p-5 text-white mt-5">
                <div className='d-flex justify-content-center align-item-center'>
                <img src="https://miro.medium.com/v2/resize:fit:450/1*fef2C8idyUIc-rn2kVLh6w.png" width={100} alt="" className='rounded-circle' />
                </div>
                <div className='d-flex justify-content-center align-item-center'>
                <h1 className='color '>We're here to listen.</h1>
                </div>
                <div className='d-flex justify-content-center align-item-center'>
                <h4>Contact us and experience our exceptional service.</h4>
            </div>
            </div>
            <div className="p-0 m-0 col-md-6 ml-5 mt-5">

            <div class="col-md-6 form-container">
      <form class="form">
        <div class="form-group">
          <label for="name">Company Name</label>
          <input required="" name="email" id="email" type="text" placeholder="Name"/>
        </div>

        <div class="form-group">
          <label for="name">Company Email</label>
          <input required="" name="email" id="email" type="text" placeholder="Name"/>
        </div>

        <div class="form-group">
          <label for="name">Company Subject</label>
          <input required="" name="email" id="email" type="text" placeholder="Name"/>
        </div>

        
        <div class="form-group">
          <label for="textarea">Enter your message</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        <button type="submit" class="form-submit-btn ">Submit</button>
      </form>
    </div>
            </div>
            </div>
        </div>
    );
}

export default Contactus;
