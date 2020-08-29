import {AuthActions, ProfileModel} from '../actions/authActions';
import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGNUP_ATTEMPT,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
} from '../types';

type authState = {
    profile: ProfileModel; //
    error: string | undefined;
  };

const INITIAL_STATE = { 
    loading: false,
    error: undefined,
    login: false,
    profile:{} as ProfileModel,
};



const AuthReducer = (state: authState = INITIAL_STATE, action:AuthActions)=> {
    switch (action.type) {
       
        case LOGIN_ATTEMPT:
            return {
                ...state,
                loading: true,
             };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                profile:action.payload,
             };

        case LOGIN_FAILED:
            return {
                ...state,
                loading: true,
                login: true,
                ErrorMSG:action.payload,
             };



        case SIGNUP_ATTEMPT:
            return {
                ...state,
                loading: true,
             };

        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                profile:action.payload,
             };

        case SIGNUP_FAILED:
            return {
                ...state,
                loading: true,
                ErrorMSG:action.payload,
             };

        default: 
            return state;
    }
  }

  export {AuthReducer};