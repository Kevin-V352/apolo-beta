/* <---Types---> */
import { GET_TOKEN, GET_SONGS_LIST } from './types';

/* <---Interfaces---> */
import { ContexState, Action } from '../shared/interfaces/globalInterfaces';

export default (state: any, action: Action) => {

    const { payload, type} = action;
    
    switch(type) {
        case GET_TOKEN: 
            return {
                ...state,
                token: payload
            }
        case GET_SONGS_LIST:
            return {
                ...state,
                songList: payload,
                search: true
            }
        default:
            return state;
    };
};


