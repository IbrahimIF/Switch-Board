
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
  const [active, setActive] = useState(0);
  const [counter, setCounter] = useState(0);
  const [prevCounter, setPrevCounter] = useState(0);
  const [target, setTarget] = useState(0);

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

  const audioArray = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10];

  const switchSound = () => {
    const audio = new Audio(light);
    audio.play();
  };

  const toggleSwitch = (audio, targetCounter) => { // happens when counter is pressed

    if (counter === 0) { // play audio when switch is pressed (has to be 0)
      setActive(1);
      setCounter(targetCounter);
      setPrevCounter(counter);
      setTarget(prevCounter);
      audio.play();
    } else if (counter !== targetCounter){ // play audio when next switch is pressed
      setCounter(targetCounter);
      setPrevCounter(counter);
      setTarget(prevCounter);
      audio.play();
      audioArray[target].pause();
      audioArray[target].currentTime = 0;
    }else if (counter === targetCounter){ // stop audio when switch is pressed again
      setCounter(0);
      setActive(0);
      audio.pause();
      audio.currentTime = 0;
    }else if (target !== counter){ // stop all audio when next switch is pressed
      audio.pause();
      audio.currentTime = 0;
       setTarget(prevCounter);
    }
  };

  // (Play audio when switch is pressed) // counter !=0 set active 1
  // (pause audio when switch pressed again) // counter !=0 set counter to 0
  // (pause audio when next switch pressed) // 
   /* 
   if (counter === 0) { 
      setCounter(targetCounter)
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      setActive(targetCounter);
    } else if (counter === targetCounter) {
      setCounter(0);
      audio.pause();
      audio.currentTime = 0;
      setActive(targetCounter);
    } else if (counter !== targetCounter) {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
      setCounter(targetCounter);
      setActive(targetCounter);
    } else {
      setCounter(0);
    }

   //

      if (counter !== targetCounter) {
      // If the counter matches the target counter, reset the audio
      audio.play();
      setActive(targetCounter);
    } else if (counter === 0) {
      targetCounter = 0;
      audio.pause();
      audio.currentTime = 0;
    } else if () {
      targetCounter = 0;
      audio.pause();
      audio.currentTime = 0;
    } else {
      // If the counter doesn't match the target counter, pause audio
      audio.pause();
      audio.currentTime = 0;
      setActive(0)
    } 



   */
  

const Nine = () => {

  if (Start) {
    if (target === 9.1){
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
    setCounter(0)
  }
  setStart(!Start); 
};

  return (
    <>
      <Switch onClick={() => {switchSound(); toggleSwitch(audio1, 1)}} isActive={counter === 1} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio2, 2)}} isActive={counter === 2} />
        <span>
          counter: {counter}
          target: {target}
          active: {active}
        </span>
      <Switch onClick={() => {switchSound(); toggleSwitch(audio3, 3)}} isActive={counter === 3} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio4, 4)}} isActive={counter === 4} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio5, 5)}} isActive={counter === 5} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio6, 6)}} isActive={counter === 6} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio7, 7)}} isActive={counter === 7} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio8, 8)}} isActive={counter === 8} />
      <Switch onClick={() => {switchSound(); Nine()}} isActive={counter === 9 || counter == 9.1} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio10, 10)}} isActive={counter === 10} />
    </>
  )
}

export default SwitchBoard