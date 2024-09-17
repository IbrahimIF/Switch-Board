/* eslint-disable react/prop-types */ // another way of removing the 'is props validation error'

import React from 'react';
import './App.css'

function Switch({ onClick }) {


  return (
    <>
      <label className="panel">
        <input className="input" type="checkbox" onChange={onClick} />
        <div className="hole">
          <div className="switch">
            <div className="shadow-box top">
              <div className="shadow top"></div>
            </div>
            <div className="shadow-box bottom">
              <div className="shadow bottom"></div>
            </div>
            <div className="switch_top">
              <div className="outsetTop"></div>
            </div>
            <div className="switch_bottom">
              <div className="outsetBottom"></div>
            </div>
            <div className="indicators_container">
              <div className="indicator indicator-off"></div>
              <div className="indicator indicator-on"></div>
            </div>
          </div>
        </div>
      </label>
    </>
  )
}



export default Switch
