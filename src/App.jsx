
import './App.css'
import { useState, useEffect } from 'react';
import SwitchBoard from './Components/Switch/Switchboard';
import Banner from './Components/Banner/banner';
import Goku from './assets/image/Thate One Goku PNG.png';


function App() {
  const [counter, setCounter] = useState(0);
  const [isGoku, setIsGoku] = useState(false);


  useEffect(() => {
    if (counter === 7){
        setIsGoku(true);
        const timer = setTimeout(() => {
          setCounter(0); // Reset counter after 2 seconds
        }, 6100);
      return () => {
        clearTimeout(timer);
      };

    } else {
      setIsGoku(false)
    }
  }, [counter]);


  return (
    <>
      <div className="container">
        <div className="banner_container">
          <Banner counter={counter}/>
        </div>
        {counter}

        {/* Goku image div */}
        {isGoku && (
          <div className="goku_image fade-in">
            <img src={Goku} alt="Goku" />
          </div>
        )}

        <div className="switch_container"  >
          <SwitchBoard counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </>
  )
}

export default App
