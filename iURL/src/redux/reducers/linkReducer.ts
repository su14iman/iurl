import {linkActions} from '../actions/linkActions';
import {
    LINKS_ATTEMPT,
    LINKS_SUCCESS,
    LINKS_FAILED,
    LINKS_READY,
} from '../types';

type linkStateType = {
    link: any;
    error: string | undefined;
    loadingState: boolean;
    added: boolean;
  };

const INITIAL_STATE = { 
    loadingState: false,
    error: undefined,
    added: false,
    link:{},
};



const LinkReducer = (state: linkStateType = INITIAL_STATE, action:linkActions)=> {
    switch (action.type) {
       
        case LINKS_ATTEMPT:
            return {
                ...state,
                loadingState: true,
             };

        case LINKS_SUCCESS:
            return {
                ...state,
                loadingState: false,
                added: true,
                link: action.payload,
             };

        case LINKS_FAILED:
            return {
                ...state,
                loadingState: false,
                error: action.payload,
             };

        case LINKS_READY:
            return {
                ...state,
                added: false,
             };

        default: 
            return state;
    }
  }

  export {LinkReducer};