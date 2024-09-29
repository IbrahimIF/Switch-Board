import './switch.css'

function Switch({ onClick, isActive }) {


  return (
    <>
      <label className="panel">
        <input className="input" type="checkbox" checked={isActive} onChange={onClick} />
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
