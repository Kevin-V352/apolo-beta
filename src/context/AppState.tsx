/* <---React---> */
import React, { FC, useReducer } from 'react';

/* <---Axios---> */
import axios from 'axios';

/* <---Interfaces---> */
import { ContexState, Action } from '../shared/interfaces/globalInterfaces';

/* <---Contex---> */
import AppContext from './AppContex';

/* <---Types---> */
import {
    GET_TOKEN,
    GET_SONGS_LIST
} from './types';

/* <---Reducer---> */
import AppReducer from './AppReducer';


const AppState: FC = (props): JSX.Element => {

    const { 
        REACT_APP_CLIENT_ID,
        REACT_APP_CLIENT_SECRET 
    } = process.env;

    const initialState: ContexState = {
        token: '',
        songList: [],
        search: false
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);

    /* <---Get the token to access Spotify resources---> */

    const getToken = () => {
        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(`${REACT_APP_CLIENT_ID}:${REACT_APP_CLIENT_SECRET}`)
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
        .then(response => {
           dispatch({ type: GET_TOKEN, payload: response.data.access_token })
        })
        .catch(error => console.log(`ERROR_GET_TOKEN: ${error}`));
    };

    /* <---Get the song list---> */

    const getSongsList = (query: string, token: string) => {

        const formatQuery: string = encodeURI(query).replace(/%20/g, '+');

        axios(`https://api.spotify.com/v1/search?query=${formatQuery}&offset=0&limit=20&type=track`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        })
        .then(response => {
            dispatch({ type: GET_SONGS_LIST, payload: response.data.tracks.items});
        })
        .catch(error => console.log(`ERROR_GET_TRACKS: ${error}`))
    };

    return (
      <AppContext.Provider value={{ 
          state,
          getToken,
          getSongsList   
        }}>
          {props.children}
      </AppContext.Provider>  
    )
}

export default AppState;