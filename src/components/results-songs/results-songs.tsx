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
      {
        state.songList.length !== 0 ?
        <ResultsContainer>
          {
            state.songList.map((song: Song, i: number) => (
              <ResultLetter key={i} song={song}/>
            ))
          }    
        </ResultsContainer>
        :
        <StartContainer>
                <StartTitle>APOLO</StartTitle>
                <StartSubtitle>
                  {state.search ? 'Hmm, sin resultados...' : 'Busca tus canciones favoritas'}
                </StartSubtitle>
        </StartContainer>
      } 
    </>
  );
};

export default ResultsSongs;
