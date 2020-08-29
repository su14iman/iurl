
import {Dispatch} from 'react'; 
import app from '../../utils/feathers-client';
import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SIGNUP_ATTEMPT,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED,
} from '../types';


export interface ProfileModel {
  FullName: String;
  accessToken: String;
  Email: String;
  error: String;
}


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


export interface SIGNUP_ATTEMPT {
  readonly type: 'SIGNUP_ATTEMPT';
  payload: any;
}

export interface SIGNUP_SUCCESS {
  readonly type: 'SIGNUP_SUCCESS';
  payload: any;
}

export interface SIGNUP_FAILED {
  readonly type: 'SIGNUP_FAILED';
  payload: any;
}

export type AuthActions = LOGIN_ATTEMPT | LOGIN_SUCCESS | LOGIN_FAILED | SIGNUP_ATTEMPT |SIGNUP_SUCCESS | SIGNUP_FAILED;

// dispatch actions

// Post request func
export const onLogin = (email: String, password: String) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    await app
      .authenticate({strategy: 'local', email, password})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('LoginPage: API call failed: ', err);
      });
  };
};
