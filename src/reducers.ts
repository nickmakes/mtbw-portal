import { combineReducers, Reducer } from 'redux';

import { AppState } from './app-state';
import { reducer as userReducer } from './user';

export const reducers: Reducer<AppState> = combineReducers({
  user: userReducer
});
