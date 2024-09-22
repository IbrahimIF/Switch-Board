
import './App.css'
import {useState} from 'react';
import Switch from './Components/Switch/switch';
import Banner from './Components/Banner/banner';
/* Audio imports */
import light from './assets/audio/light-switch-81967.mp3';
import one from './assets/audio/Switch sound/Youre too slow.mp3';
import two from './assets/audio/Switch sound/Handsome Jack.mp3';
import three from './assets/audio/Switch sound/IDubbbzTV.mp3';
import four from './assets/audio/Switch sound/Minecraft cow sound effect.mp3';
import five from './assets/audio/Switch sound/Roblox Death Sound - OOF.mp3';


function App() {
  const [Start, setStart] = useState(true);
  const [audio1] = useState(new Audio(one));
  const [audio2] = useState(new Audio(two));
  const [audio3] = useState(new Audio(three));
  const [audio4] = useState(new Audio(four));
  const [audio5] = useState(new Audio(five));

  const switchSound = () => {
    const audio = new Audio(light);
    audio.play();
  };

  const One = () => {
    setStart(!Start);

    if (Start) {
      audio1.play();
    } else {
      audio1.pause();
      audio1.currentTime = 0;
    }
  };

  const Two = () => {
    setStart(!Start);

    if (Start) {
      audio2.play();
    } else {
      audio2.pause();
      audio2.currentTime = 0;
    }
  };

  const Three = () => {
    setStart(!Start);

    if (Start) {
      audio3.play();
    } else {
      audio3.pause();
      audio3.currentTime = 0;
    }
  };

  const Four = () => {
    setStart(!Start);

    if (Start) {
      audio4.play();
    } else {
      audio4.pause();
      audio4.currentTime = 0;
    }
  };

  const Five = () => {
    setStart(!Start);

    if (Start) {
      audio5.play();
    } else {
      audio5.pause();
      audio5.currentTime = 0;
    }
  };



  return (
    <>
      <div className="container">
        <div className="banner_container">
          <Banner />
        </div>

        <div className='switch_container'>
          <Switch onClick={() => {switchSound(); One();}}/>
          <Switch onClick={() => {switchSound(); Two();}}/>
          <Switch onClick={() => {switchSound(); Three();}}/>
          <Switch onClick={() => {switchSound(); Four();}}/>
          <Switch onClick={() => {switchSound(); Five();}}/>
        </div>
        
      </div>
    </>
  )
}

export default App
