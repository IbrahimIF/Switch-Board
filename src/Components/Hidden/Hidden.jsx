
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hidden.css';
import Laugh from '../../assets/audio/Switch sound/Lancer Laugh.mp3';

/* Image */
import Goku from '../../assets/image/Thate One Goku PNG.png';
import Rock from '../../assets/image/The rock.png'
import Sonic from '../../assets/image/sonic.jpg'
import Spoopy from '../../assets/image/skeleton-doot.gif'

import Lancer0 from '../../assets/image/Lancer_Empty.png'
import Lancer1 from '../../assets/image/Lancer_1.gif';
import Lancer1_static from '../../assets/image/Lancer_1.png';
import Lancer2 from '../../assets/image/Lancer_2.gif';
import Lancer2_static from '../../assets/image/Lancer_2.png';
import Lancer3 from '../../assets/image/Lancer_Ending.gif';
import Lancer3_static from '../../assets/image/Lancer_Ending.png';

function Hidden({counter, setCounter, setIsDark, isDark}) {
const navigate = useNavigate();
const [isGoku, setIsGoku] = useState(false);
const [isLancer, setIsLancer] = useState(false);
const [isRock, setIsRock] = useState(false);
const [isSonic, setIsSonic] = useState(false);
const [isSpooky, setIsSpooky] = useState(false);
const [currentGifIndex, setCurrentGifIndex] = useState(0);
const [audioLaugh] = useState(new Audio(Laugh));

const lancerGifs = [Lancer0, Lancer1, Lancer1_static, Lancer2, Lancer2_static, Lancer3, Lancer3_static];

useEffect(() => {
    if (counter === 7){
        setIsGoku(true);
        const timer = setTimeout(() => {
            setIsGoku(false);
            setCounter(0);
        }, 4000);
        return () => {
            clearTimeout(timer);
        };

    } if (counter === 16){
        setIsLancer(true);
        const timer = setTimeout(() => {
            audioLaugh.play();
            setIsLancer(false);
            setCounter(0);
        }, 45000);

        const gifTimer = setTimeout(() => {
        if (currentGifIndex <= 5){
            setCurrentGifIndex(currentGifIndex + 1);
        } else {
            setCurrentGifIndex(6)
        }
        }, 6000);

        return () => {
            clearTimeout(timer);
            clearTimeout(gifTimer);
        };

    } if(counter === 18){
        navigate("/Random");
    } if(counter === 14){
        const timer = setTimeout(() => {
            navigate("/Random");
        }, 7000);
        return () => {
            clearTimeout(timer);
        };
    } if (counter === 20){
        const timer = setTimeout(() => {
            setIsRock(true);
        }, 3400);
        const counterTimer = setTimeout(() => {
            setCounter(0);
        }, 4300);
        return () => {
            clearTimeout(timer);
            clearTimeout(counterTimer);
        };

    } if(counter === 23){
        const timer = setTimeout(() => {
            navigate("/Random");
        }, 4000);
        return () => {
            clearTimeout(timer);
        };
    } if (counter === 25){
        setIsSonic(true);
        const timer = setTimeout(() => {
            setIsSonic(false);
            setCounter(0);
        }, 12000);
        return () => {
            clearTimeout(timer);
        };
    } if (counter === 28){
        setIsDark(true);
    } if (counter === 29){
        setIsSpooky(true);
        const timer = setTimeout(() => {
            setIsSpooky(false);
            setCounter(0);
        }, 1300);
        return () => {
            clearTimeout(timer);
        };
    }else {
        setIsGoku(false)
        setIsRock(false)
        setIsLancer(false)
        setIsSonic(false)
        setIsDark(false)
        setIsSpooky(false)
    }
}, [counter, currentGifIndex, setCounter, audioLaugh, navigate, setIsDark, isDark]);

return (
    <>
        {/* Goku image div */}
        {isGoku && (
          <div className="goku_image">
            <img src={Goku}/>
          </div>
        )}

        {/* sonic image div */}
        {isSonic && (
          <div className="goku_image">
            <img src={Sonic}/>
          </div>
        )}

        {/* Rock image div */}
        {isRock && (
          <div className="rock_image">
            <img src={Rock}/>
          </div>
        )}

        {/* skeleton image div */}
        {isSpooky && (
          <div className="rock_image">
            <img src={Spoopy}/>
          </div>
        )}

        {/* Lancer image div */}
        {isLancer && (
          <div className="lancer_image">
            <img src={lancerGifs[currentGifIndex]}/>
          </div>
        )}

    </>
)
}

export default Hidden
