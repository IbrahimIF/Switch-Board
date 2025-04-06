import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

import Hub from '../Components/Hub';
import Contact from '../Components/Contact/contact';
import "./MainLayout.css"; // For CSS (shown below)

const ScrollBlurOverlay = () => {
  const [counter, setCounter] = useState(0);
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <div>
      <div>
        <Hub counter={counter} setCounter={setCounter} />
      </div>

{/* 
        <div className="overlay">
          <h2>Second Page Content</h2>
          <p>This appears after scrolling.</p>
          <Contact/>
        </div>
*/}
      <div ref={myRef} className="TextTest"> 
        <p>{ myElementIsVisible ? 'Yes' : 'No' }</p>
        <div className={`${'scroll-blur-container'} ${myElementIsVisible ? "overlay_contact" : ''}`}>
            <Contact/>
        </div>
      </div> 
    </div>
  );
};

export default ScrollBlurOverlay;