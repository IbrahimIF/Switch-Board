
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

function SwitchBoard() {
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

const toggleAudio = (audio) => {
  setStart((prevStart) => {
    if (prevStart) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    return !prevStart;
  });
};

const One = () => toggleAudio(audio1, setCounter(1));
const Two = () => toggleAudio(audio2, setCounter(2));
const Three = () => toggleAudio(audio3, setCounter(3));
const Four = () => toggleAudio(audio4, setCounter(4));
const Five = () => toggleAudio(audio5, setCounter(5));
const Six = () => toggleAudio(audio6, setCounter(6));
const Seven = () => toggleAudio(audio7, setCounter(7));
const Eight = () => toggleAudio(audio8, setCounter(8));
const Nine = () => {
  /*
  
  if (Start && (audio9.paused || audio91.paused)) {
    audio9.paused ? audio9.play() : audio91.play();
  } else {
    audio9.pause();
    audio9.currentTime = 0;
    audio91.pause();
    audio91.currentTime = 0;
  }
  setStart(!Start);
  */

  if (Start) {
    if (counter === 9.1){
      setCounter(9)
      audio9.play()
    } else {
      setCounter(9.1)
      audio91.play()
      
    }
  } else {
    audio9.pause();
    audio9.currentTime = 0;
    audio91.pause();
    audio91.currentTime = 0;
  }
  setStart(!Start); 
};
const Ten = () => toggleAudio(audio10, counter == 10);


  return (
    <>
          <Switch onClick={() => {switchSound(); One();}}/>
          <Switch onClick={() => {switchSound(); Two();}}/>
            {counter}
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

export default SwitchBoard