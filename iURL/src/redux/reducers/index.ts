import {combineReducers} from 'redux';
// import {UserReducer} from './userReducer';
import {AuthReducer} from './authReducer';

const rootReducer = combineReducers({
  // userReducer: UserReducer,
  authReducer: AuthReducer,
  // Some more Reducers..
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export {rootReducer};
