import {useEffect} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {ApplicationState, onLogin} from '../redux';

import app from '../utils/feathers-client';

export const CheckAuth = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {user, error, loadingState, login} = useSelector(
    (state: ApplicationState) => state.authReducer,
  );

  useEffect(() => {
    app.authentication
      .getAccessToken()
      .then((token) => {
        // frist get old token
        if (token == null) {
          navigation.push('Login');
        } else {
          app.authentication
            .reAuthenticate(false) // reconnect to server with old token
            .then((data) => {
              // if can connect
              if (user._id == undefined) {
                // for no-repet
                dispatch({
                  type: 'LOGIN_SUCCESS',
                  payload: data,
                });
              }
              // console.log(user._id);
              navigation.push('TapNavi');
            })
            .catch((err) => {
              // if token is expired
              console.log(err);
              app.logout().then(() => {
                // frist logout for remove old token from storage
                dispatch({type: 'LOGOUT'}); // active LOGOUT Mode from redux
                navigation.push('Login'); // go to login page
              });
            });
        }
        // console.log('Token: ' + token);
        // token == null ? navigation.push('Login') : navigation.push('TapNavi');
      })
      .catch((err) => {
        console.log('error: ' + err);
      });
  });

  return null;
};
