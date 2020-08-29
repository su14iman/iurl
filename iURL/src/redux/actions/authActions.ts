
import {Dispatch} from 'react'; 
import app from '../../utils/feathers-client';
import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGNUP_ATTEMPT,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
    LOGOUT,
} from '../types';
import { AsyncStorage } from 'react-native';


// export interface UserModel {
//   FullName: String;
//   accessToken: String;
//   Email: String;
//   error: String;
// }


export interface LOGIN_ATTEMPT {
  readonly type: 'LOGIN_ATTEMPT';
  payload: any;
}

export interface LOGIN_SUCCESS {
  readonly type: 'LOGIN_SUCCESS';
  payload: any;
}

export interface LOGIN_FAILED {
  readonly type: 'LOGIN_FAILED';
  payload: any;
  
}




export interface LOGOUT {
  readonly type: 'LOGOUT';
  payload: boolean;
}






export type AuthActions = LOGIN_ATTEMPT | LOGIN_SUCCESS | LOGIN_FAILED | LOGOUT;

// dispatch actions

// Post request func

export const onLogin = (email: String, password: String) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    await app
      .authenticate({strategy: 'local', email, password})
      .then((res) => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: res,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'LOGIN_FAILED',
          payload: err,
        });
      });
  };
};

export const onSignup = (fullname:String,email: String, password: String) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    await app.service('users').create({fullname,email, password})
  };
};

export const onLogout = (accessToken:String) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    // await true;
    
    await AsyncStorage.removeItem('auth').then(()=>{
      dispatch({
        type: 'LOGOUT',
        payload: true,
      });
    });
    AsyncStorage.removeItem

  };
};

