
import {useState} from 'react';
import Switch from './switch';

/* Audio imports */
import light from '../../assets/audio/light-switch.mp3';
import one from '../../assets/audio/Switch sound/Youre too slow.mp3';
import two from '../../assets/audio/Switch sound/Handsome Jack.mp3';
import three from '../../assets/audio/Switch sound/IDubbbzTV.mp3';
import four from '../../assets/audio/Switch sound/Minecraft cow sound effect.mp3';
import five from '../../assets/audio/Switch sound/Roblox Death Sound - OOF.mp3';
import six from '../../assets/audio/Switch sound/What the dog doin.mp3';
import seven from '../../assets/audio/Switch sound/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3';
import eight from '../../assets/audio/Switch sound/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3';
import nine from '../../assets/audio/Switch sound/discord-call-sound.mp3';
import nine1 from '../../assets/audio/Switch sound/discord-notification.mp3';
import ten from '../../assets/audio/Switch sound/get-out-tuco.mp3';

function App() {
  const [Start, setStart] = useState(true);
  const [counter, setCounter] = useState(0);

  const [audio1] = useState(new Audio(one));
  const [audio2] = useState(new Audio(two));
  const [audio3] = useState(new Audio(three));
  const [audio4] = useState(new Audio(four));
  const [audio5] = useState(new Audio(five));
  const [audio6] = useState(new Audio(six));
  const [audio7] = useState(new Audio(seven));
  const [audio8] = useState(new Audio(eight));
  const [audio9] = useState(new Audio(nine));
  const [audio91] = useState(new Audio(nine1));
  const [audio10] = useState(new Audio(ten));

  const switchSound = () => {
    const audio = new Audio(light);
    audio.play();
  };

  // Numbered Audios below

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

  const Six = () => {
    setStart(!Start);

    if (Start) {
      audio6.play();
    } else {
      audio6.pause();
      audio6.currentTime = 0;
    }
  };


  const Seven = () => {
    setStart(!Start);

    if (Start) {
      audio7.play();
    } else {
      audio7.pause();
      audio7.currentTime = 0;
    }
  };


  const Eight = () => {
    setStart(!Start);

    if (Start) {
      audio8.play();
    } else {
      audio8.pause();
      audio8.currentTime = 0;
    }
  };


  const Nine = () => {
    setStart(!Start);

    if (Start && counter % 2 === 0 ) {
      audio9.play();
      setCounter((counter) => counter + 1);
    
    } else if (Start) {
      audio91.play();
      setCounter((counter) => counter + 1);
    } else {
      audio9.pause();
      audio9.currentTime = 0;
      audio91.pause();
      audio91.currentTime = 0;
    }
  };

  const Ten = () => {
    setStart(!Start);

    if (Start) {
      audio10.play();
    } else {
      audio10.pause();
      audio10.currentTime = 0;
    }
  };


  return (
    <>
          <Switch onClick={() => {switchSound(); One();}}/>
          <Switch onClick={() => {switchSound(); Two();}}/>
          <Switch onClick={() => {switchSound(); Three();}}/>
          <Switch onClick={() => {switchSound(); Four();}}/>
          <Switch onClick={() => {switchSound(); Five();}}/>
          <Switch onClick={() => {switchSound(); Six();}}/>
          <Switch onClick={() => {switchSound(); Seven();}}/>
          <Switch onClick={() => {switchSound(); Eight();}}/>
          <Switch onClick={() => {switchSound(); Nine();}}/>
          <Switch onClick={() => {switchSound(); Ten();}}/>
    </>
  )
}

export default App