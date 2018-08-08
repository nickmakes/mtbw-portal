import actionCreatorFactory from 'typescript-fsa';

import { UserState } from './app-state';
import { buildReducer, newActionHandler } from './util';

const userAction = actionCreatorFactory('user');

export const login = userAction<string>('login');
export const logout = userAction('logout');

export const initialUserState: UserState = {};

export const reducer = buildReducer(initialUserState, [
  newActionHandler(login, (state, username) => {
    state.username = username;
  })
]);
