import { useState,} from "react";
import { useInView } from "react-intersection-observer";

import Hub from '../Components/Hub';
import Fakeswitch from '../Components/Switch/Switchboard';
import Contact from '../Components/Contact/contact';
import "./MainLayout.css";
import '../App.css';

const ScrollBlurOverlay = () => {
  const [counter, setCounter] = useState(0);
  const { ref: contactRef, inView: isContactInView } = useInView({
    threshold: 0.5, // Trigger even if only 10% is visible
    rootMargin: '-50px 0px 0px 0px' // Adjust trigger point upward
  });

  return (
    <div className="main-layout">

      <div>
      <div className={`hub-overlay ${isContactInView ? "visible" : ""}`}>

      </div>
      <Hub counter={counter} setCounter={setCounter} />
      </div>


      <div className="contact-container">
      <div ref={contactRef} className="contact-trigger"/>
       <div className={`contact-overlay ${isContactInView ? "visible" : ""}`}>
          <Contact />
      </div>
         {/* Contact overlay (fixed position) */}
        <div className="switch_container" >
          <Fakeswitch />
        </div>
      </div>

  

    </div>
  );
};

export default ScrollBlurOverlay;