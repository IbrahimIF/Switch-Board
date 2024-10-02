
//import React, { } from 'react';
import {useEffect, useState} from 'react';
import './banner.css'
import Link from '../Github/Link';


function Banner({counter}) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (counter === 10){
      setText("GEEEEETTTT OOOOOOOUT!!!!!!!!!!!!!")
    } else {
      setText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    }
  }, [counter]);
  return (
    <>
    <div className="table">
      <div className="monitor-wrapper">
        <div className="monitor">
          <p className="text">{text}</p>
        </div>
      </div>
    </div>
    <Link/>
    </>
  )
}

export default Banner