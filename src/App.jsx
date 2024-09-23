
import './App.css'
import SwitchBoard from './Components/Switch/Switchboard';
import Banner from './Components/Banner/banner';

function App() {
 
  return (
    <>
      <div className="container">
        <div className="banner_container">
          <Banner />
        </div>

        <div className='switch_container'>
          <SwitchBoard />
        </div>
      </div>
    </>
  )
}

export default App
