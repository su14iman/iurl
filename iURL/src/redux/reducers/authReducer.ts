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
    user: any; //
    error: string | undefined;
    LoginLoading: boolean;
    login: boolean;
    accessToken:string;
  };

const INITIAL_STATE = { 
    LoginLoading: false,
    error: undefined,
    login: false,
    accessToken:'',
    user:{},
};



const AuthReducer = (state: authStateType = INITIAL_STATE, action:AuthActions)=> {
    switch (action.type) {
       
        case LOGIN_ATTEMPT:
            return {
                ...state,
                LoginLoading: true,
             };

        case LOGIN_SUCCESS:
            return {
                ...state,
                LoginLoading: false,
                login:true,
                error:undefined,
                user:action.payload.user,
                accessToken:action.payload.accessToken,
                
             };

        case LOGIN_FAILED:
            return {
                ...state,
                LoginLoading: false,
                login: false,
                error:action.payload,
             };





        case LOGOUT:
            return {
                ...state,
                LoginLoading: false,
                login:false,
                error:undefined,
                accessToken:'',
             };

        


        default: 
            return state;
    }
  }

  export {AuthReducer};