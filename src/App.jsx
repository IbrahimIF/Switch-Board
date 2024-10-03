
import './App.css'
import { useState} from 'react';
import SwitchBoard from './Components/Switch/Switchboard';
import Banner from './Components/Banner/banner';
import Hidden from './Components/Hidden/Hidden';
function App() {
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

export default App
