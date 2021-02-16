/* <---React---> */
import React, { useState, useRef, FC } from "react";

/* <---Styled components---> */
import {
  PlayIcon,
  PauseIcon,
  ReloadIcon,
  ProgressBar,
  PlayerButton,
  PlayerButtons,
  PlayerContainer
} from "./audio-player-elements";

/* <---Global colors---> */
import { 
  white, 
  lightBlue 
} from '../../shared/styles/global-variables';

/* <---Props interface---> */
interface APProps {
  urlPreview: string;
}

interface ActiveButton {
  pause: string;
  play: string;
}

const AudioPlayer: FC<APProps> = ({ urlPreview }: APProps): JSX.Element => {
  
  const [time, setTime] = useState<number>(0);
  const [activeButton, setActiveButton] = useState<ActiveButton>({
    pause: white,
    play: white
  });

  const audioElement = useRef<HTMLAudioElement>(null);

  //Pause the song when it gets out of the details :)
  window.onhashchange = () => audioElement.current!.pause();

  //Event that assigns the value to the progressive bar :)
  if(audioElement.current) {
    audioElement.current!.addEventListener(
      "timeupdate",
      function () {
        if(!audioElement.current?.currentTime) return null;
        const currentTime: number = audioElement.current!.currentTime;
        const timePercentage = Math.round((currentTime * 100) / 30);
        setTime(timePercentage);
      },
      false
    );
  }
  
  const controlPreview = (type: string) => {
    if (audioElement.current === null) return null;
    switch(type) {
      case 'pause':
        setActiveButton({
          play: white,
          pause: lightBlue
        });
        return audioElement.current.pause();
      case 'play':
        setActiveButton({
          play: lightBlue,
          pause: white
        });
        return audioElement.current.play();
      case 'reset':
        setTime(0);
        return audioElement.current.currentTime = 0;  
      default:
        return null;
    }
  };

  return (
      <PlayerContainer>
        <ProgressBar width={time}/>
        <PlayerButtons>
            <PlayerButton onClick={() => controlPreview('pause')}>
                <PauseIcon color={activeButton.pause}/>
            </PlayerButton>
            <PlayerButton onClick={() => controlPreview('play')}>
                <PlayIcon color={activeButton.play}/>
            </PlayerButton>
            <PlayerButton onClick={() => controlPreview('reset')}>
                <ReloadIcon />
            </PlayerButton>
            <audio ref={audioElement} src={urlPreview} />
        </PlayerButtons>
    </PlayerContainer>
  );
};

export default AudioPlayer;
