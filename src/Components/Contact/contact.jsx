import React, { useEffect, useState } from 'react';
import "./contact.css"
import Link from '../Github/Link';
import TickAnimation from '../TickAnimation/tick'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload }  from '@fortawesome/free-solid-svg-icons';
import naughtyWords from 'naughty-words';

function Contact() {
  const [fadeIn, setFadeIn] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [loader, setLoader] = useState(false);
  const [fail, setFail] = useState(false);
  const Stay = `${window.location.origin}`;

  useEffect(() => {
      setFadeIn(true);
  }, []);

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = event.target.message.value.toLowerCase();
    setLoader(true);
    setFail(false);

    const blacklist = [...new Set(naughtyWords.en)];

    if (blacklist.some(word => message.includes(word))) {
      alert("Message contains blocked terms");
      setLoader(false);
      return;
    }

    const formData = new FormData(event.target);

    try {
      // Send the form data via AJAX to FormSubmit.co
      const response = await fetch("https://formsubmit.co/ajax/9f4f21002394762265c7f94d735714d4", {
        method: "POST",
        body: formData,
      });



      if (response.ok) {
        setShowTick(true);
        event.target.reset(); //  clears form
        setTimeout(() => {
          setShowTick(false);
        }, 4000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFail(true);
      
      setTimeout(() => {
        setFail(false);
      }, 4000);
    } finally {
      setLoader(false);
    }
  };
  
  return (
    <>
      <div className='content-title'> 
        <h1>404: No more content found</h1>
      </div>
      <div className="form-container">
        <div className='form__title'>
          <h3>Drop me a message, suggesting other light-switch ideas or your thoughts</h3>
        </div>

        <form className={fadeIn ? 'fade-in' : ''} action="https://formsubmit.co/9f4f21002394762265c7f94d735714d4" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="text" name="_honey" className="honeypot" />

          <div className='form__Input--container'>
            <div className='form__Input--Name'>
                <div className="input-Animated">
                  <input type="text" name="text" className="input--name" placeholder="Enter Name" required/>
                  <div className="highlight"></div>
                </div>
      
                <div className="input-Animated">
                  <input type="email" name="email" className="input--name" placeholder="Enter Email" required/>
                  <div className="highlight"></div>
                </div>
            </div>

            <div className='form__Input--Message'>
              <h3 className='label'>Message</h3>
              <textarea className="message-box" name="message" placeholder="" rows="6" required></textarea>
            </div>
          </div>
          <div className="file__Upload">
            <input type="file" name="attachment" accept="image/png, image/jpeg, .pdf" />
          </div>

          <div className="submitButtonContainer">
            <button type="submit" className="submitButton" disabled={loader} >
              {loader ? (
                <div className="loading-icon">
                  <svg className="spin" viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                  </svg>
                </div>
              ) : fail ? (
                <span> Failed -  Try Again </span>
              ) : (
                <>
                  <FontAwesomeIcon icon={faUpload} /> &nbsp; Send
                </>
              )}
            </button>
            {showTick && <TickAnimation />}
          </div>

          {/* Hidden fields */}
          <input type="hidden" name="_next" value={Stay} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

        </form>
        
        <Link/>
      </div>
    </>
  );
}

export default Contact;