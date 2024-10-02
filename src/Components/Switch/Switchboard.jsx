
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
import eleven from '../../assets/audio/Switch sound/Darth vader screaming noooo.mp3';
import twelve from '../../assets/audio/Switch sound/vine-boom.mp3';
import thirteen from '../../assets/audio/Switch sound/ur-phone-ringing.mp3';
import fourteen from '../../assets/audio/Switch sound/deg-deg_4M6Cojn.mp3';
import fifteen from '../../assets/audio/Switch sound/error_CDOxCYm.mp3';



function SwitchBoard({counter, setCounter}) {
  const [Start, setStart] = useState(true);
  const [discordCounter, setDiscordCounter] = useState(9);

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
  const [audio11] = useState(new Audio(eleven));
  const [audio12] = useState(new Audio(twelve));
  const [audio13] = useState(new Audio(thirteen));
  const [audio14] = useState(new Audio(fourteen));
  const [audio15] = useState(new Audio(fifteen));

  const audioArray = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11, audio12, audio13, audio14, audio15];

  const switchSound = () => {
    const audio = new Audio(light);
    audio.play();
  };

  const toggleSwitch = (audio, targetCounter) => {
    setCounter((prevCounter) => {
      if (prevCounter === 0) {
        // Play audio when switch is pressed the first time
        audio.play();
        return targetCounter;
      } else if (prevCounter !== targetCounter) {
        // Play new audio when a different switch is pressed
        audioArray[prevCounter - 1].pause();
        audioArray[prevCounter - 1].currentTime = 0;
        audio.play();
        return targetCounter;
      } else {
        // Stop audio when switch is pressed again
        audio.pause();
        audio.currentTime = 0;
        return 0;
      }
    });
  };


  const Nine = () => {
  if (Start) {
    setCounter(9)
    if (discordCounter === 9.1){
      setDiscordCounter(9)
      audio9.play()
    } else {
      setDiscordCounter(9.1)
      audio91.play()
    }
  } else {
    audio9.pause();
    audio9.currentTime = 0;
    audio91.pause();
    audio91.currentTime = 0;
    setCounter(0);
  }
  setStart(!Start); 
  };

  return (
  <>
      <Switch onClick={() => {switchSound(); toggleSwitch(audio1, 1)}} isActive={counter === 1} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio2, 2)}} isActive={counter === 2} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio3, 3)}} isActive={counter === 3} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio4, 4)}} isActive={counter === 4} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio5, 5)}} isActive={counter === 5} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio6, 6)}} isActive={counter === 6} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio7, 7)}} isActive={counter === 7} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio8, 8)}} isActive={counter === 8} />
      <Switch onClick={() => {switchSound(); Nine()}} isActive={counter === 9} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio10, 10)}} isActive={counter === 10} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio11, 11)}} isActive={counter === 11} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio12, 12)}} isActive={counter === 12} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio13, 13)}} isActive={counter === 13} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio14, 14)}} isActive={counter === 14} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio15, 15)}} isActive={counter === 15} />
  </>
  )
}

export default SwitchBoard