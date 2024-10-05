import { useNavigate } from "react-router-dom";
import { useState, useEffect,} from "react";
import "./RandomScreen.css";
function RandomScreen({counter, setCounter}) {
  const navigate = useNavigate();
  // Media state
  const [media, setMedia] = useState(null);
  const [timeoutDuration, setTimeoutDuration] = useState(null);

  // Choose random media
  useEffect(() => {
    function chooseRandomMedia() {
      if (counter === 23) {
        setTimeoutDuration(25000); // Set the timeout to 25 seconds
        return (
          <div style={{ pointerEvents: 'none' }}>
            <iframe width="900" height="655" alt="EvenLongerVideo" 
            src='https://www.youtube.com/embed/bmfudW7rbG0?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=5' 
            title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
          </div>
        );
      } else {
      const mediaList = [
              // Media list (images and videos)

              { type: 'specialLong', url: 'https://www.youtube.com/embed/DJfg39WkMvE?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=5'},

              { type: 'special', url: 'https://www.youtube.com/embed/OYG8Ul276-w?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=790'},
              { type: 'special', url: 'https://www.youtube.com/embed/OYG8Ul276-w?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=584'},
              { type: 'special', url: 'https://www.youtube.com/embed/OYG8Ul276-w?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=80'},
              { type: 'special', url: 'https://www.youtube.com/embed/OYG8Ul276-w?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=7'},

              { type: 'special', url: 'https://www.youtube.com/embed/ddWJatRxfz8?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=83'},
              { type: 'special', url: 'https://www.youtube.com/embed/ddWJatRxfz8?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=50'},
              { type: 'specialShort', url: 'https://www.youtube.com/embed/ddWJatRxfz8?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=25'},
              { type: 'specialShort', url: 'https://www.youtube.com/embed/ddWJatRxfz8?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},

              { type: 'EvenLongerVideo', url: 'https://www.youtube.com/embed/OnFYspZag28?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'EvenLongerVideo', url: 'https://www.youtube.com/embed/w56X_U9TZ-s?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},

              { type: 'LongerVideo', url: 'https://www.youtube.com/embed/Z93msbCiHnM?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'LongerVideo', url: 'https://www.youtube.com/embed/PGfhtLrwiKo?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=7'},
              { type: 'LongerVideo', url: 'https://www.youtube.com/embed/fjCOot3CApc?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'LongerVideo', url: 'https://www.youtube.com/embed/vzcGtJ2TC3I?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'LongerVideo', url: 'https://www.youtube.com/embed/04u2ctimwss?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'LongerVideo', url: 'https://www.youtube.com/embed/gDul8BcdeNk?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},

              { type: 'NormalVideo', url: 'https://www.youtube.com/embed/RxW4EhTXBaI?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'NormalVideo', url: 'https://www.youtube.com/embed/h7FJ9ddRNdA?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'NormalVideo', url: 'https://www.youtube.com/embed/v3Sj7T9D1_Q?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'NormalVideo', url: 'https://www.youtube.com/embed/19DY8iNYXSs?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'NormalVideo', url: 'https://www.youtube.com/embed/Sj10ELmeJL8?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&starts=151'},
              { type: 'NormalVideo', url: 'https://www.youtube.com/embed/tPsJPtrMpKA?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&starts=4'},

              { type: 'Shorts', url: 'https://www.youtube.com/embed/iBF_mDFgtH4?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'Shorts', url: 'https://www.youtube.com/embed/K-bP87jsrW4?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'Shorts', url: 'https://www.youtube.com/embed/IzV-EoGxtME?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'Shorts', url: 'https://www.youtube.com/embed/08XyCs4yVEU?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'Shorts', url: 'https://www.youtube.com/embed/-fgL_rNwa5Y?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'Shorts', url: 'https://www.youtube.com/embed/4LeTZRKRE8Q?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=30'},
              
              { type: 'ShorterVideo', url: 'https://www.youtube.com/embed/SqE2J9V3a8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'ShorterVideo', url: 'https://www.youtube.com/embed/1iG_d0tgZEY?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=05'},

              { type: 'EvenShorterVideo', url: 'https://www.youtube.com/embed/2gMemLkfYWY?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'EvenShorterVideo', url: 'https://www.youtube.com/embed/iRTNUTcPZL4?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'EvenShorterVideo', url: 'https://www.youtube.com/embed/MfA6NAha2K0?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'EvenShorterVideo', url: 'https://www.youtube.com/embed/zOYJDdqDhR8?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'EvenShorterVideo', url: 'https://www.youtube.com/embed/aq_UO_ttn-k?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'EvenShorterVideo', url: 'https://www.youtube.com/embed/iNXel1vG8Sw?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'EvenShorterVideo', url: 'https://www.youtube.com/embed/aH56oeU5soo?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'EvenShorterVideo', url: 'https://www.youtube.com/embed/6eA4YXjOEnQ?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'EvenShorterVideo', url: 'https://www.youtube.com/embed/Mi8za2kTJDs?si=jZMPlxAouzCeaZ9rautoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},

              { type: 'AsShortAsPossibleVideo', url: 'https://www.youtube.com/embed/zoMiYklHvjk?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'AsShortAsPossibleVideo', url: 'https://www.youtube.com/embed/YrBP0XhEpWo?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},

              // Add more images and YouTube links to the list
      ];

      const randomIndex = Math.floor(Math.random() * mediaList.length);
      const media = mediaList[randomIndex];

      ////////////////////////////////////
      if (media.type === 'NormalVideo') {
        setTimeoutDuration(13000); // Set the timeout to 13 seconds
        return (
          <div style={{ pointerEvents: 'none' }}>
            <iframe width="900" height="655" alt="NormalVideo" src={media.url} title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
          </div>
        );
      }else if (media.type === 'EvenLongerVideo') {
        setTimeoutDuration(25000); // Set the timeout to 25 seconds
        return (
          <div style={{ pointerEvents: 'none' }}>
            <iframe width="900" height="655" alt="EvenLongerVideo" src={media.url} title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
          </div>
        );
      }else if (media.type === 'LongerVideo') {
        setTimeoutDuration(18000); // Set the timeout to 18 seconds
        return (
          <div style={{ pointerEvents: 'none' }}>
            <iframe width="900" height="655" alt="LongerVideo" src={media.url} title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
          </div>
        );
      }else if (media.type === 'Shorts') {
        setTimeoutDuration(10500); // Set the timeout to 10.5 seconds
        return (
          <div style={{ pointerEvents: 'none' }}>
            <iframe width="900" height="655" alt="Shorts" src={media.url} title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
          </div>
        );
      }else if (media.type === 'ShorterVideo') {
        setTimeoutDuration(9000); // Set the timeout to 9 seconds
        return (
          <div style={{ pointerEvents: 'none' }} >
            <iframe width="900" height="655" alt="ShorterVideo" src={media.url} title="YouTube video player" allow="autoplay; encrypted-media;"></iframe>
          </div>
        );
      } else if (media.type === 'EvenShorterVideo') {
        setTimeoutDuration(7000); // Set the timeout to 7 seconds
        return (
          <div style={{ pointerEvents: 'none' }} >
            <iframe width="900" height="655" alt="EvenShorterVideo"  src={media.url} title="YouTube video player" allow="autoplay; encrypted-media;"></iframe>
          </div>
        );
      } else if (media.type === 'AsShortAsPossibleVideo') {
        setTimeoutDuration(3000); // Set the timeout to 3 seconds
        return (
          <div style={{ pointerEvents: 'none' }} >
            <iframe width="900" height="655" alt="EvenShorterVideo"  src={media.url} title="YouTube video player" allow="autoplay; encrypted-media;"></iframe>
          </div>
        );
      }
      //////////////////////////////////////////////////////////////
      if (media.type === 'special') {
        setTimeoutDuration(32500); // Set the timeout to 33 seconds
        return (
          <div style={{ pointerEvents: 'none' }} >
            <iframe width="900" height="655" alt="special" src={media.url} title="YouTube video player" allow="autoplay; encrypted-media;"></iframe>
          </div>
        );
        } else if (media.type === 'specialShort') {
          setTimeoutDuration(25000); // Set the timeout to 25 seconds
          return (
            <div style={{ pointerEvents: 'none' }} >
              <iframe width="900" height="655" alt="specialShort" src={media.url} title="YouTube video player" allow="autoplay; encrypted-media;"></iframe>
            </div>
          );
          } else if (media.type === 'specialLong') {
          setTimeoutDuration(65000); // Set the timeout to 1 minute and 30 seconds
          return (
            <div style={{ pointerEvents: 'none' }}>
              <iframe width="900" height="655" alt="specialLong" src={media.url} title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
            </div>
          );
        }
    }
  }

    setMedia(chooseRandomMedia());
  }, [counter]);

  // Set the timeout based on the selected media type
  useEffect(() => {
    if (timeoutDuration !== null) {
      const timer = setTimeout(() => {
          navigate("/");
          setCounter(0);
      }, timeoutDuration);

      // Cleanup function
      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeoutDuration, navigate, setCounter]);

  // Refresh media on click
  function refreshMedia() {
    setMedia(null);
  }

return(
<div className="randomContainer">
<div className="media" onClick={refreshMedia}>
        {media}
      </div>
    </div>
);
}
export default RandomScreen;