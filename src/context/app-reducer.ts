/* <---Types---> */
import { GET_TOKEN, GET_SONGS_LIST } from './types';

/* <---Interfaces---> */
import { Action } from '../shared/interfaces/global-interfaces';

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


