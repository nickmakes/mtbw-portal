import { HttpClient } from 'mmdb-client-factory';
import { RouterState } from 'connected-react-router';

export interface AsyncContext {
  client: HttpClient;
  env: ProcessEnv;
}

export interface UserState {
  username?: string;
}

export interface AppState {
  user: UserState;
  router?: RouterState;
}

export const initialAppState: AppState = {
  user: {
    username: undefined
  }
};
