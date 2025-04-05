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
    <div className={`fade-in ${fadeIn ? 'active' : ''} Contact__Container `}>
      <div className='content-wrapper'>
        <div className='Contact__Text'>
          <h1>Get In Touch</h1>
          <span>We’re here to help you bring your architectural vision to life. Whether you're planning a new project, need expert advice, or want to learn more about our services, please call us or send us a message using the form.</span>
        </div>
        
        <div className='Contact__Input'>
          <form action="https://formsubmit.co/info@pinnaclestudioarchitecture.co.uk" method="POST" onSubmit={handleSubmit}>
            <div className='Contact__Input--Name'>

              <div className='field  first-name'>
                <label> First Name </label>
                <input type="text" id="fname" name="firstName" required placeholder=""></input>
              </div>

              <div  className='field last-name'>
                <label> Last Name </label>
                <input type="text" id="fname" name="lastName" required placeholder=""></input>
              </div>

            </div>

            <label>Email</label>
            <input type="email" id="fname" name="Email" required placeholder=""></input>

            <label>Contact Number</label>
            <input type="tel" pattern="[0-9]*" id="Phonenumber" name="PhoneNumber" required placeholder=""></input>
            
            <label>Message</label>
            <textarea name="message" placeholder="" rows="4" required></textarea>
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
    </div>
  );
}

export default Contact;