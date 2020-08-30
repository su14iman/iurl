import {AuthActions} from '../actions/authActions';
import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGNUP_ATTEMPT,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
    LOGOUT,
} from '../types';

type authStateType = {
    user: any;
    error: string | undefined;
    loadingState: boolean;
    login: boolean;
  };

const INITIAL_STATE = { 
    loadingState: false,
    error: undefined,
    login: false,
    user:{},
};



const AuthReducer = (state: authStateType = INITIAL_STATE, action:AuthActions)=> {
    switch (action.type) {
       
        case LOGIN_ATTEMPT:
            return {
                ...state,
                loadingState: true,
             };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loadingState: false,
                login:true,
                error:undefined,
                user:action.payload.user,                
             };

        case LOGIN_FAILED:
            return {
                ...state,
                loadingState: false,
                login: false,
                error:action.payload,
             };

        case SIGNUP_FAILED:
            return {
                ...state,
                loadingState: false,
                login: false,
                error:action.payload,
             };





        case LOGOUT:
            return {
                ...state,
                login:false,
                user:'',
                loadingState: false,
                error:undefined,
             };

        


        default: 
            return state;
    }
  }

  export {AuthReducer};