import {combineReducers} from 'redux';
import {AuthReducer} from './authReducer';
import {LinkReducer} from './linkReducer';

const rootReducer = combineReducers({
  authReducer: AuthReducer,
  linkReducer:LinkReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export {rootReducer};
