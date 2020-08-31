
import {Dispatch} from 'react'; 
import app from '../../utils/feathers-client';
import {
  LINKS_ATTEMPT,
  LINKS_SUCCESS,
  LINKS_FAILED,
  LINKS_READY,
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










export type linkActions = LINKS_ATTEMPT | LINKS_SUCCESS |LINKS_FAILED;

// dispatch actions

// Post request func

export const onAdd = (Title: String, URL: String) => {
  return async (dispatch: Dispatch<linkActions>) => {
    await app
    .service('urls').create({Title,URL})
      .then((res) => {
        // console.log(res);
        dispatch({
          type: 'LINKS_SUCCESS',
          payload: res,
        });
      })
      .catch((err) => {
        // console.log(err);
        dispatch({
          type: 'LINKS_FAILED',
          payload: err,
        });
      });
  };
};


/**
 * 
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: res,
        });
 */









