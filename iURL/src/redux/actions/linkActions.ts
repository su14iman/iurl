
import {Dispatch} from 'react'; 
import app from '../../utils/feathers-client';
import {
  LINKS_ATTEMPT,
  LINKS_SUCCESS,
  LINKS_FAILED,
  LINKS_READY,
  LINKS_LOAD_ATTEMPT,
  LINKS_LOAD_SUCCESS,
  LINKS_LOAD_FAILED,
  LINKS_LOAD_REFRESH_OUT,
  LINKS_LOAD_REFRESH,
  LINKS_OPEN,
} from '../types';

export interface LINKS_ATTEMPT {
  readonly type: 'LINKS_ATTEMPT';
}

export interface LINKS_READY {
  readonly type: 'LINKS_READY';
}

export interface LINKS_SUCCESS {
  readonly type: 'LINKS_SUCCESS';
  payload: any;
}

export interface LINKS_FAILED {
  readonly type: 'LINKS_FAILED';
  payload: any;
}




export interface LINKS_LOAD_ATTEMPT {
  readonly type: 'LINKS_LOAD_ATTEMPT';
}
export interface LINKS_LOAD_REFRESH {
  readonly type: 'LINKS_LOAD_REFRESH';
}
export interface LINKS_LOAD_REFRESH_OUT {
  readonly type: 'LINKS_LOAD_REFRESH_OUT';
}

export interface LINKS_LOAD_SUCCESS {
  readonly type: 'LINKS_LOAD_SUCCESS';
  payload: any;
}

export interface LINKS_LOAD_FAILED {
  readonly type: 'LINKS_LOAD_FAILED';
  payload: any;
}

export interface LINKS_OPEN {
  readonly type: 'LINKS_OPEN';
  payload: any;
}










export type linkActions = 
LINKS_ATTEMPT | LINKS_SUCCESS |LINKS_FAILED | LINKS_READY 
| LINKS_LOAD_ATTEMPT | LINKS_LOAD_SUCCESS | LINKS_LOAD_FAILED|LINKS_LOAD_REFRESH|LINKS_LOAD_REFRESH_OUT
| LINKS_OPEN;

// dispatch actions

// Post request func

export const onAdd = (Title: String, URL: String) => {
  return async (dispatch: Dispatch<linkActions>) => {
    await app
    .service('urls').create({Title,URL})
      .then((res: any) => {
        // console.log(res);
        dispatch({
          type: 'LINKS_SUCCESS',
          payload: res,
        });
      })
      .catch((err: any) => {
        // console.log(err);
        dispatch({
          type: 'LINKS_FAILED',
          payload: err,
        });
      });
  };
};



export const onLoadLinkData = () => {
  return async (dispatch: Dispatch<linkActions>) => {
    await app
    .service('urls').find().then((data:any)=>{
      dispatch({
        type: 'LINKS_LOAD_SUCCESS',
        payload: data,
      });
    }).catch((err:any)=>{
      dispatch({
        type: 'LINKS_LOAD_FAILED',
        payload: err,
      });
    });
      
  };
};


export const onLoadLinkDataOn = () => {
  return async (dispatch: Dispatch<linkActions>) => {
    await app.service('urls').on('patched');
      
  };
};


/**
 * 
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: res,
        });
 */









