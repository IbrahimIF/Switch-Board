
import './App.css'

function App() {
  return (
    <>
    {/* 
        <div className="switches">
          <input className="shadows" type="checkbox" />
          <label></label>
        </div>
        */}
      <div className="container">

          <label className="wrap">
            <input className="input" type="checkbox" />
            <div className="panel">

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
            </div>
          </label>

      </div>
    </>
  )
}

export default App
