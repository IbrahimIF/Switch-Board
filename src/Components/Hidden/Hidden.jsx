
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hidden.css';
import Laugh from '../../assets/audio/Switch sound/Lancer Laugh.mp3';

/* Image */
import Goku from '../../assets/image/Thate One Goku PNG.png';

import Lancer0 from '../../assets/image/Lancer_Empty.png'
import Lancer1 from '../../assets/image/Lancer_1.gif';
import Lancer1_static from '../../assets/image/Lancer_1.png';
import Lancer2 from '../../assets/image/Lancer_2.gif';
import Lancer2_static from '../../assets/image/Lancer_2.png';
import Lancer3 from '../../assets/image/Lancer_Ending.gif';
import Lancer3_static from '../../assets/image/Lancer_Ending.png';

function Hidden({counter, setCounter}) {
const navigate = useNavigate();
const [isGoku, setIsGoku] = useState(false);
const [isLancer, setIsLancer] = useState(false);
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
    }else {
        setIsGoku(false)
        setIsLancer(false)
    }
}, [counter, currentGifIndex, setCounter, audioLaugh, navigate]);

return (
    <>
        {/* Goku image div */}
        {isGoku && (
          <div className="goku_image">
            <img src={Goku}/>
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
