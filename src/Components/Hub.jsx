
import '../App.css'
import {useState} from 'react';
import SwitchBoard from './Switch/Switchboard';
import Banner from './Banner/banner';
import Hidden from './Hidden/Hidden';
import Achievment from './Achievment/achievment'
;

function Hub({counter, setCounter}) {

  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div className="container">
      {isDark && <div className="overlay"></div>}
        <div className="banner_container">
          <Banner counter={counter}/>
        </div>
        {counter}
        {isDark}
        <div className="container_hidden">
          <Hidden counter={counter} setCounter={setCounter} setIsDark={setIsDark} isDark={isDark}/>
        </div>
        <div className="switch_container"  >
          <SwitchBoard counter={counter} setCounter={setCounter} />
        </div>
        {/*<Achievment />*/}

      </div>


    </>
  )
}

export default Hub
