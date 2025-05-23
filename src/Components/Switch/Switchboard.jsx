
import {useState} from 'react';
import Switch from './switch';

/* Audio imports */
import light from '/assets/audio/light-switch.mp3';
import one from '/assets/audio/Switch sound/Youre-too-slow-Sonic.mp3';
import two from '/assets/audio/Switch sound/Handsome-Jack.mp3';
import three from '/assets/audio/Switch sound/IDubbbzTV.mp3';
import four from '/assets/audio/Switch sound/Minecraft-Cow.mp3';
import five from '/assets/audio/Switch sound/Roblox-OOF.mp3';
import six from '/assets/audio/Switch sound/What-the-dog-doin.mp3';
import seven from '/assets/audio/Switch sound/Goku-drip.mp3';
import eight from '/assets/audio/Switch sound/Realistic-Knocking.mp3';
import nine from '/assets/audio/Switch sound/discord-call-sound.mp3';
import nine1 from '/assets/audio/Switch sound/discord-notification.mp3';
import ten from '/assets/audio/Switch sound/get-out-tuco.mp3';
import eleven from '/assets/audio/Switch sound/Darth-Vader-Screaming.mp3';
import twelve from '/assets/audio/Switch sound/vine-boom.mp3';
import thirteen from '/assets/audio/Switch sound/ur-phone-ringing.mp3';
import fourteen from '/assets/audio/Switch sound/Rickrolled.mp3';
import fifteen from '/assets/audio/Switch sound/error.mp3';
import sixteen from '/assets/audio/Switch sound/Lancer.mp3';
import seventeen from '/assets/audio/Switch sound/Goat-Scream.mp3';
import eighteen from '/assets/audio/Switch sound/OH-MY-FAVORITE.mp3';
import nineteen from '/assets/audio/Switch sound/Enemy-Spider.mp3';
import twenty from '/assets/audio/Switch sound/Its-not-just-a-boulder.mp3';
import twentyone from '/assets/audio/Switch sound/Green-hill-zone-bass-boosted.mp3';
import twentytwo from '/assets/audio/Switch sound/bender-do-a-flip.mp3';
import twentythree from '/assets/audio/Switch sound/Michael-Bay.mp3';
import twentyfour from '/assets/audio/Switch sound/quack.mp3';
import twentyfive from '/assets/audio/Switch sound/Gangsta-paradise.mp3';
import twentysix from '/assets/audio/Switch sound/eggnouncement.mp3';
import twentyseven from '/assets/audio/Switch sound/gmod-tool-gun.mp3';
import twentyseven1 from '/assets/audio/Switch sound/gmod-ragdoll.mp3';
import twentynine from '/assets/audio/Switch sound/skull-trumpet.mp3';
import thirty from '/assets/audio/Switch sound/burger.mp3';
import thirtyone from '/assets/audio/Switch sound/20th_century_fox.mp3';

/*homer*/
import thirtytwo from '/assets/audio/Switch sound/Homer/boring.mp3';
import thirtytwo1 from '/assets/audio/Switch sound/Homer/doh.mp3';
import thirtytwo2 from '/assets/audio/Switch sound/Homer/laugh.mp3';
import thirtytwo3 from '/assets/audio/Switch sound/Homer/nerrrrrdddddd.mp3';
import thirtytwo4 from '/assets/audio/Switch sound/Homer/scream.mp3';
import thirtytwo5 from '/assets/audio/Switch sound/Homer/woohoo.mp3';

import thirtythree from '/assets/audio/Switch sound/Steve.mp3';
import thirtyfour from '/assets/audio/Switch sound/Swamp.mp3';
import thirtyfive from '/assets/audio/Switch sound/John_Cena.mp3';
import thirtysix from '/assets/audio/Switch sound/metal-pipe-clang.mp3';

import empty from '/assets/audio/empty-sound.mp3';

function SwitchBoard({counter, setCounter}) {
  const [Start, setStart] = useState(true);
  const [discordCounter, setDiscordCounter] = useState(9);
  const [gmodCounter, setGmodCounter] = useState(0);
  const [homerCounter, setHomerCounter] = useState(0);


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
  const [audio16] = useState(new Audio(sixteen));
  const [audio17] = useState(new Audio(seventeen));
  const [audio18] = useState(new Audio(eighteen));
  const [audio19] = useState(new Audio(nineteen));
  const [audio20] = useState(new Audio(twenty));
  const [audio21] = useState(new Audio(twentyone));
  const [audio22] = useState(new Audio(twentytwo));
  const [audio23] = useState(new Audio(twentythree));
  const [audio24] = useState(new Audio(twentyfour));
  const [audio25] = useState(new Audio(twentyfive));
  const [audio26] = useState(new Audio(twentysix));
  const [audio27] = useState(new Audio(twentyseven));
  const [audio271] = useState(new Audio(twentyseven1));
  const [audio28] = useState(new Audio(empty));
  const [audio29] = useState(new Audio(twentynine));
  const [audio30] = useState(new Audio(thirty));
  const [audio31] = useState(new Audio(thirtyone));
  const [audio32] = useState(new Audio(thirtytwo));
  const [audio321] = useState(new Audio(thirtytwo1));
  const [audio322] = useState(new Audio(thirtytwo2));
  const [audio323] = useState(new Audio(thirtytwo3));
  const [audio324] = useState(new Audio(thirtytwo4));
  const [audio325] = useState(new Audio(thirtytwo5));

  const [audio33] = useState(new Audio(thirtythree));
  const [audio34] = useState(new Audio(thirtyfour));
  const [audio35] = useState(new Audio(thirtyfive));
  const [audio36] = useState(new Audio(thirtysix));

  const audioArray = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11, audio12, audio13, audio14, audio15, audio16, audio17, audio18,
    audio19, audio20, audio21, audio22, audio23, audio24, audio25, audio26, audio27, audio28, audio29, audio30, audio31, audio32, audio33, audio34, audio35, audio36];

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
      } else if (counter === 0) {
        audio.pause();
        audio.currentTime = 0;
        return 0;
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

  const TwentySeven = () => {
    if (Start) {
      setCounter(27)
      if (gmodCounter === 3){
        setGmodCounter(0)
        audio271.play()
      } else {
        setGmodCounter((prevCounter) => prevCounter + 1);
        audio27.play()
      }
    } else {
      audio27.pause();
      audio27.currentTime = 0;
      audio271.pause();
      audio271.currentTime = 0;
      setCounter(0);
    }
    setStart(!Start); 
    };


    const ThirtyTwo = () => {
      if (Start) {
        setCounter(32)
        if (homerCounter === 0 || homerCounter === 6){
          setHomerCounter(1)
          audio32.play()
        }if (homerCounter === 1){
          setHomerCounter(2)
          audio321.play()
        }if (homerCounter === 2){
          setHomerCounter(3)
          audio322.play()
        }if (homerCounter === 3){
          setHomerCounter(4)
          audio323.play()
        }if (homerCounter === 4){
          setHomerCounter(5)
          audio324.play()
        }if (homerCounter === 5){
          setHomerCounter(6)
          audio325.play()
        }
      } else {
        audio32.pause();
        audio32.currentTime = 0;
        audio321.pause();
        audio321.currentTime = 0;
        audio322.pause();
        audio322.currentTime = 0;
        audio323.pause();
        audio323.currentTime = 0;
        audio324.pause();
        audio324.currentTime = 0;
        audio325.pause();
        audio325.currentTime = 0;
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
      <Switch onClick={() => {switchSound(); toggleSwitch(audio16, 16)}} isActive={counter === 16} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio17, 17)}} isActive={counter === 17} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio18, 18)}} isActive={counter === 18} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio19, 19)}} isActive={counter === 19} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio20, 20)}} isActive={counter === 20} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio21, 21)}} isActive={counter === 21} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio22, 22)}} isActive={counter === 22} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio23, 23)}} isActive={counter === 23} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio24, 24)}} isActive={counter === 24} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio25, 25)}} isActive={counter === 25} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio26, 26)}} isActive={counter === 26} />
      <Switch onClick={() => {switchSound(); TwentySeven()}} isActive={counter === 27} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio28, 28)}} isActive={counter === 28} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio29, 29)}} isActive={counter === 29} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio30, 30)}} isActive={counter === 30} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio31, 31)}} isActive={counter === 31} />
      <Switch onClick={() => {switchSound(); ThirtyTwo()}} isActive={counter === 32} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio33, 33)}} isActive={counter === 33} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio34, 34)}} isActive={counter === 34} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio35, 35)}} isActive={counter === 35} />
      <Switch onClick={() => {switchSound(); toggleSwitch(audio36, 36)}} isActive={counter === 36} />
  </>
  )
}

export default SwitchBoard