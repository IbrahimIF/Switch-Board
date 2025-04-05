import React, { useEffect, useState } from 'react';
import "./tick.css"

function Thankyou() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
      setFadeIn(true);
  }, []);

  return (
    <div className={`fade-in ${fadeIn ? 'active' : ''} thankyou-overlay`}>
      <div className="thankyou-container">
        <span className='thankyou-message'>Thank you for your submission</span>
      </div>
    </div>
  );
}

export default Thankyou;