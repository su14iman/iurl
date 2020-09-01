import {linkActions} from '../actions/linkActions';
import {
    LINKS_ATTEMPT,
    LINKS_SUCCESS,
    LINKS_FAILED,
    LINKS_READY,
    LINKS_LOAD_ATTEMPT,
    LINKS_LOAD_SUCCESS,
    LINKS_LOAD_FAILED,
    LINKS_LOAD_REFRESH,
    LINKS_LOAD_REFRESH_OUT,
    LINKS_OPEN,
} from '../types';

type linkStateType = {
    data: any;
    dataDone: boolean;
    dataLoading: boolean;
    error: string | undefined;
    loadingState: boolean;
    added: boolean;
    refresh:boolean;
    OpenLink:any;
  };

const INITIAL_STATE = { 
    loadingState: false,
    added: false,
    error: undefined,
    data:[{}],
    dataLoading: false,
    dataDone: false,
    refresh:false,
    OpenLink:{},

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


        case LINKS_LOAD_ATTEMPT:
            return {
                ...state,
                dataLoading:true,
             };

        case LINKS_LOAD_SUCCESS:
            return {
                ...state,
                data: action.payload,
                dataLoading: false,
                dataDone: true,
                refresh:false,
             };

        case LINKS_LOAD_FAILED:
            return {
                ...state,
                error: action.payload,
                dataLoading: false,
             };
        
        case LINKS_LOAD_REFRESH:
            return {
                ...state,
                refresh:true,

            }
        case LINKS_LOAD_REFRESH_OUT:
            return {
                ...state,
                refresh:false,

            }
        
        case LINKS_OPEN:
            return {
                ...state,
                OpenLink:action.payload,

            }

        default: 
            return state;
    }
  }

  export {LinkReducer};