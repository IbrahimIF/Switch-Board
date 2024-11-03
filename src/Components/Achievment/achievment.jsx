import { useEffect } from 'react';
import './achievment.css';

const Achievement = () => {
  // Define a function to show the achievement
  const showAchievement = (title, score, rare) => {
    const achievementSound = new Audio('https://dl.dropboxusercontent.com/s/8qvrpd69ua7wio8/XboxAchievement.mp3');
    const achievementSoundRare = new Audio('https://dl.dropboxusercontent.com/s/po1udpov43am81i/XboxOneRareAchievement.mp3');

    const achievName = document.querySelector('.achiev_name');
    const achievScore = document.querySelector('.acheive_score');
    const unlocked = document.querySelector('.unlocked');
    const circle = document.querySelector('.circle');
    const banner = document.querySelector('.banner');
    const achieveDisp = document.querySelector('.achieve_disp');
    const achievementContainer = document.querySelector('.achievement');

    achievName.innerText = title;
    achievScore.innerText = score;
    unlocked.innerText = rare ? 'Rare achievement unlocked' : 'Achievement unlocked';
    

    if (rare) {
      achievementSoundRare.play();
      achievementContainer.classList.add('rare');
    } else {
      achievementSound.play();
    }

    circle.classList.add('circle_animate');
    banner.classList.add('banner-animate');
    achieveDisp.classList.add('achieve_disp_animate');

    setTimeout(() => {
      circle.classList.remove('circle_animate');
      banner.classList.remove('banner-animate');
      achieveDisp.classList.remove('achieve_disp_animate');
      achievementContainer.classList.remove('rare');
    }, 12000);
  };

  let name = String;
  let type = Boolean;
  let points = Number;

  name = "flicking the switch"
  type = false
  points = 100

  // Call the function to display the achievement
  useEffect(() => {
    showAchievement(name, type, points);
  }, []);
  
  /*
  const {counter, totalCounter} = useCounter();

  if (counter > 2){
name = "flicking the switch"
type = false
points = 100
  }

  if (counter > 27){
    name = "Ignore"
    type = true
    points = 200
  }

  if (totalCounter == 12){
    name = "no flicks given"
    type = true
    points = 500
  }

*/

  return (
    <div className="content">
    <div className="achievement">
        <div className="animation">
            <div className="circle">
                <div className="img trophy_animate trophy_img">
                    <img className="trophy_1" src="https://dl.dropboxusercontent.com/s/k0n14tzcl4q61le/trophy_full.svg" />
                    <img className="trophy_2" src="https://dl.dropboxusercontent.com/s/cd4k1h6w1c8an9j/trophy_no_handles.svg" />
                </div>
                <div className="img xbox_img">
                    <img src="https://dl.dropboxusercontent.com/s/uopiulb5yeo1twm/xbox.svg?dl=0" />
                </div>
                <div className="brilliant-wrap">
                    <div className="brilliant">
                    </div>
                </div>
            </div>
            <div className="banner-outer">
                <div className="banner">
                    <div className="achieve_disp">
                        <span className="unlocked">

                        </span>
                        <div className="score_disp">
                            <div className="gamerscore">
                                <img width="20px" src="https://dl.dropboxusercontent.com/s/gdqf5amvjkx9rfb/G.svg?dl=0" />
                                <span className="acheive_score"></span>
                            </div>
                            <span className="hyphen_sep">-</span>
                            <span className="achiev_name"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Achievement;