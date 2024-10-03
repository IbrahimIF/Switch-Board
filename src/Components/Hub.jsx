
import '../App.css'
import { useState} from 'react';
import SwitchBoard from './Switch/Switchboard';
import Banner from './Banner/banner';
import Hidden from './Hidden/Hidden';
function Hub() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container">
        <div className="banner_container">
          <Banner counter={counter}/>
        </div>
        {counter}

        <Hidden counter={counter} setCounter={setCounter}/>
        <div className="switch_container"  >
          <SwitchBoard counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </>
  )
}

export default Hub
