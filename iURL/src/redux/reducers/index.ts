import {combineReducers} from 'redux';
import {UserReducer} from './userReducer';

const rootReducer = combineReducers({
  userReducer: UserReducer,
  // Some more Reducers..
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export {rootReducer};
