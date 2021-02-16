/* <---React---> */
import React, { useState ,useEffect, useContext, FC } from "react";

/* <---Axios---> */
import axios from 'axios';

/* <---Styled components---> */
import {
  DetailsImg,
  PreviewInfo,
  DetailsInfo,
  DetailsTitle,
  DetailsLyrics,
  DetailsHeader,
  LoaderContainer,
  CustomScrollbar,
  DetailsSubtitle,
  DetailsContainer
} from "./song-details-elements";

/* <---Interfaces---> */
import { 
  Song, 
  Artist, 
  ContextDefaultValue 
} from "../../shared/interfaces/globalInterfaces";

/* <---Contex---> */
import AppContext from "../../context/AppContex";

/* <---Components---> */
import AudioPlayer from '../audio-player/audio-player';

/* <---Parse---> */
import parse from 'html-react-parser';

/* <---Loader component---> */
import Loader from "react-loader-spinner";

/* <---Global colors---> */
import { lightBlue } from '../../shared/styles/global-variables';

/* <---Props interface---> */
interface SDProps {
  songId: string;
}

const SongDetails: FC<SDProps> = ({ songId }: SDProps): JSX.Element => {

  const [songDetails, setSongDetails] = useState<Song>();
  const [lyrics, setLyrics] = useState<string>();
  const { state } = useContext(AppContext) as ContextDefaultValue;

  const getSong = (songId: string, token: string) => {
    axios(`https://api.spotify.com/v1/tracks/${songId}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
        setSongDetails(response.data);
        const { name, artists }: Song = response.data;
        axios.get(`https://api.lyrics.ovh/v1/${artists[0].name}/${name}`)
        .then(lyric => {
          setLyrics(lyric.data.lyrics);
        });
    });
  };
  
  const orderArtists = (artists: Artist[]): string => {
    if (artists.length === 1) return artists[0].name;

    let result: string = '';
    for (let i: number = 0; i < artists.length; i++) {
      if (i !== artists.length - 1) {
        result += `${artists[i].name}, `;
      } else {
        result += artists[i].name;
      }
    }
    return result;
  };

  const dateFormat = (date: string): string => {
    return date.split('-').reverse().join('/');
  };

  const trackDuration = (ms: number) => {
    const minutes: number = Math.floor(ms / 60000);
    const seconds: number = parseInt(((ms % 60000) / 1000).toFixed(0));
    return minutes + ':' + (seconds < 10 ? '0': '') + seconds;
  };

  const letterSeparator = (lyrics: string | undefined) => {
    if(!lyrics) return null;
    const hola = lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
    return hola;
  };

  useEffect(() => {
    if(state.token === '') {
      setTimeout(() => {
        getSong(songId, state.token);
      }, 500);
    }
    else {
      getSong(songId, state.token);
    }
  }, []);

  return (
    <DetailsContainer>
      {
        songDetails ?
        <>
          <DetailsHeader>
            <DetailsImg src={songDetails.album.images[0].url} /> 
            {
              songDetails.preview_url ? 
                <AudioPlayer urlPreview={songDetails.preview_url}/>  
                :
                <PreviewInfo>Vista previa no disponible</PreviewInfo>
            }  
          </DetailsHeader> 
          <DetailsInfo> 
            <DetailsTitle>{songDetails.name}</DetailsTitle>
            <DetailsSubtitle>Álbum: {songDetails.album.name}</DetailsSubtitle>
            <DetailsSubtitle>Artistas: {orderArtists(songDetails.artists)}</DetailsSubtitle>
            <DetailsSubtitle>Fecha de lanzamiento: {dateFormat(songDetails.album.release_date)}</DetailsSubtitle>
            <DetailsSubtitle>Duración: {trackDuration(songDetails.duration_ms)}</DetailsSubtitle>
            {
              lyrics === null || lyrics === undefined ?
              <DetailsSubtitle>Letra: 
                <Loader 
                  type='Bars'
                  color={lightBlue}
                  height={40}
                  width={40}
                  timeout={100000}
                />
              </DetailsSubtitle>
              :
              lyrics === '' ?
              <DetailsSubtitle>Letra: No disponible</DetailsSubtitle>
              :
              <>
              <DetailsSubtitle>Letra:</DetailsSubtitle>
              <CustomScrollbar>
                <DetailsLyrics>
                  {parse(`${letterSeparator(lyrics)}`)}
                </DetailsLyrics>
              </CustomScrollbar>
              </>
            }   
          </DetailsInfo>
        </>
        :
        <LoaderContainer>
          <Loader 
            type='Oval'
            color={lightBlue}
            height={100}
            width={100}
            timeout={100000}
          />
        </LoaderContainer>
      }  
    </DetailsContainer>
  );
};

export default SongDetails;
