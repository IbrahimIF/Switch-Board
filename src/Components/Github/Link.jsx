
import './Link.css'
//import React, { } from 'react';
/* Font awseome Icon */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Link() {
  return (
    <>

    <div className="linkContainer">
      <ul className="gitButton">
      <li className="icon-content">
        <a href="https://github.com/IbrahimIF/MERN" aria-label="GitHub" data-social="github">
          <div className="filled"></div>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
    </div>
    </>
  )
}

export default Link