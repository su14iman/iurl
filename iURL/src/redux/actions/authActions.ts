
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

export interface LOGOUT {
  readonly type: 'LOGOUT';
}








export type AuthActions = LOGIN_ATTEMPT | LOGIN_SUCCESS | LOGIN_FAILED | LOGOUT | SIGNUP_ATTEMPT | SIGNUP_SUCCESS |SIGNUP_FAILED ;

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
    await app.service('users').create({fullname,email, password}).then((data)=>{

      app.authenticate({strategy: 'local', email, password})
      .then((res) => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    }).catch((errr)=>{
      dispatch({
        type: 'SIGNUP_FAILED',
        payload: errr,
      });
    });
  };
};

export const onLogout = () => {
  return async (dispatch: Dispatch<AuthActions>) => {    
    await app.logout().then(()=>{
      dispatch({type: 'LOGOUT'});
    }).catch((err)=>{
      console.log("Error: "+err);
    });

  };
};


export const onCheck = () => {
  return async (dispatch: Dispatch<AuthActions>) => {    
    await app.authentication.getAccessToken().then((data)=>{
      console.log(data)
    });

  };
};









