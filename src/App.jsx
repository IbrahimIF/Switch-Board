
import './App.css'
import Switch from './Light-switch';
import light from './assets/audio/light-switch-81967.mp3';

function App() {

  const switchOne = () => {
    const audio = new Audio(light);
    audio.play();
  };

  return (
    <>
    {/* 
        <div className="switches">
          <input className="shadows" type="checkbox" />
          <label></label>
        </div>
        */}
      <div className="container">
        <Switch onClick={switchOne}/>
        <Switch/>
        <Switch/>
        <Switch/>
      </div>
    </>
  )
}

export default App
