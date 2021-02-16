/* <---React---> */
import React, { FC, useContext } from "react";

/* <---Styled components---> */
import { 
  StartTitle, 
  StartSubtitle,
  StartContainer,
  ResultsContainer
} from "./results-songs-elements";

/* <---Interfaces---> */
import { 
  Song, 
  ContextDefaultValue 
} from "../../shared/interfaces/globalInterfaces";

/* <---Contex---> */
import AppContex from '../../context/AppContex';

/* <---Components---> */
import ResultLetter from '../result-letter/result-letter';

const ResultsSongs: FC = (): JSX.Element => {

  const { state } = useContext(AppContex) as ContextDefaultValue;

  return (
    <>
      <ResultsContainer>
        {
          state.songList.length !== 0 ? 
            state.songList.map((song: Song, i: number) => (
              <ResultLetter key={i} song={song}/>
            ))
            :
            <StartContainer>
              <StartTitle>APOLO</StartTitle>
              <StartSubtitle>
                {state.search ? 'Hmm, sin resultados...' : 'Busca tus canciones favoritas'}
              </StartSubtitle>
            </StartContainer>  
        }    
      </ResultsContainer>
    </>
  );
};

export default ResultsSongs;
