/* <---React---> */
import React, { FC, useContext, useEffect } from 'react';

/* <---Interfaces---> */
import { ContextDefaultValue } from '../shared/interfaces/global-interfaces';

/* <---Routing---> */
import { Route } from 'react-router-dom';

/* <---Contex---> */
import AppContex from '../context/app-contex';

/* <---Components---> */
import SearchBar from '../components/search-bar/search-bar';
import ResultSongs from '../components/results-songs/results-songs';
import SongDetails from '../components/song-details/song-details';

/* <---Global styles---> */
import GlobalStyles from '../shared/styles/global-styles';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';

const App: FC = (): JSX.Element => {

  const { getToken } = useContext(AppContex) as ContextDefaultValue;
  
  useEffect(() => {
    getToken();
  }, []);
  
  return (
    <>
      <Route path='/' component={SearchBar}/>
      <Route exact path='/' component={ResultSongs}/>
      <Route exact path='/track/:trackId' render={({match}) => <SongDetails songId={match.params.trackId}/>}/>
      <GlobalStyles/>
    </>
  );
}

export default App;
