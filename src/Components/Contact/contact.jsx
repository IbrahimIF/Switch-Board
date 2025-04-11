import React, { useEffect, useState } from 'react';
import "./contact.css"
import TickAnimation from '../TickAnimation/tick'

function Contact() {
  const [fadeIn, setFadeIn] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [loader, setLoader] = useState(false);
  const [fail, setFail] = useState(false);
  const Stay = `${window.location.origin}/Contact`;


  useEffect(() => {
      setFadeIn(true);
  }, []);

 
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setLoader(true);

    const formData = new FormData(event.target);

    try {
      // Send the form data via AJAX to FormSubmit.co
      const response = await fetch("https://formsubmit.co/ibzdagamer@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });



      if (response.ok) {
        // Show the tick animation
        setShowTick(true);
        setLoader(false);
        // Optionally, hide the animation after some time
        setTimeout(() => {
          setShowTick(false);
        }, 4000); // Adjust the duration as needed

        // Clear the form if needed
        event.target.reset();
      } else {
        console.error('Form submission failed');
        setFail(true);
        setLoader(false);

        setTimeout(() => {
          setFail(false);
        }, 4000); 

      }
    } catch (error) {
      console.error('An error occurred during form submission', error);
    }
  };
  
  return (
    <>
      <div className='content-title'> 
        <h1> You have reached the end of the page</h1>
      </div>
      <div className="form-container">
        <div className='form__title'>
          <h3>Drop me a message, suggesting other ideas</h3>
        </div>
        <form action="https://formsubmit.co/ibzdagamer@gmail.com" method="POST" onSubmit={handleSubmit}>
          <div className='form__Input--container'>
            <div className='form__Input--Name'>
                <div className="input-Animated">
                  <input type="text" name="text" className="input--name" placeholder="Enter Name"/>
                  <div className="highlight"></div>
                </div>
      
                <div className="input-Animated">
                  <input type="text" name="text" className="input--name" placeholder="Enter Text"/>
                  <div className="highlight"></div>
                </div>
            </div>
            <div className='form__Input--Message'>
              <label className='label'>Message</label>
              <textarea className="message-box" name="message" placeholder="" rows="6" required></textarea>
              <input  type="hidden"  name="_next" value={Stay} />
              <input type="hidden" name="_captcha" value="false"></input>
            </div>
          </div>
          <div className='form-submit_container'>

          </div>
        </form>
        <div className='form-link_container'></div>
      </div>





{/* 
      <div className='content-wrapper'>
        <div className='Contact__Input'>
        <p className="title">text</p>
          <form action="https://formsubmit.co/ibzdagamer@gmail.com" method="POST" onSubmit={handleSubmit}>

            <div className='Contact__Input--Name'>
              <div className='field  first-name'>
                <label> Username </label>
                <input type="text" id="fname" name="username" required placeholder=""></input>
              </div>

              <div  className='field last-name'>
                <label> Email </label>
                <input type="email" id="fname" name="Email" required placeholder=""></input>
              </div>
            </div>

            <label>Message</label>
            <textarea name="message" placeholder="" rows="6" required></textarea>
            <input  type="hidden"  name="_next" value={Stay} />
            <input type="hidden" name="_captcha" value="false"></input>

            {loader ? (
              <div className="loading-icon">
                <svg viewBox="25 25 50 50">
                  <circle r="20" cy="50" cx="50"></circle>
                </svg>
              </div>

            ) : fail ? (
              <div>
                <span> failed </span>
              </div>
            ) : (
              <input type='submit'></input> 
            )}
          </form>
          {showTick && <TickAnimation />}
        </div>
      </div>
*/}
    </>
  );
}

export default Contact;