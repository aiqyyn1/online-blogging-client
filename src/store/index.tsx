import { createStore, combineReducers, Store, applyMiddleware } from 'redux';

import { loginReducer } from './reducers/signInReducer';
import { requestReducer } from './reducers/signInReducer';
import thunk from 'redux-thunk';
import { signUpReducer } from './reducers/signUpReduce';
import { currentReducer } from './reducers/currentUserReducer';

export interface RootState {
  userSignUp: ReturnType<typeof signUpReducer>;
  userLogin: ReturnType<typeof loginReducer>;
  request: ReturnType<typeof requestReducer>;
  current: ReturnType<typeof currentReducer>;
}

const rootReducer = combineReducers<RootState>({
  userSignUp: signUpReducer,
  userLogin: loginReducer,
  request: requestReducer,
  current: currentReducer,
});

const store: Store<RootState> = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
