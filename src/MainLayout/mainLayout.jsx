import { useState,} from "react";
import { useInView } from "react-intersection-observer";

import Hub from '../Components/Hub';
import Contact from '../Components/Contact/contact';
import "./MainLayout.css";
import '../App.css';

const ScrollBlurOverlay = () => {
  const [counter, setCounter] = useState(0);
  const { ref: contactRef, inView: isContactInView } = useInView({
    threshold: 0.8, 
    rootMargin: '-50px 0px -50px 0px'
  });

  

  return (
    <div className="main-layout">
      <div className={`main-overlay ${isContactInView ? "blurred" : ""}`}>
        <Hub counter={counter} setCounter={setCounter} />
      </div>
        <div className="contact-container">
          <div ref={contactRef} className="contact-trigger"/>
          <div className={`contact-overlay ${isContactInView ? "visible" : ""}`} >
            <Contact />
          </div>
        </div>
    </div>
  );
};

export default ScrollBlurOverlay;