import { LoginType } from '../../types/LoginType';
import { UserAction } from '../actions/signInAction';

import { Reducer } from 'redux';
import {
  REQUEST_FAILURE,
  REQUEST_REQUEST,
  REQUEST_SUCCESS,
  requestAction,
} from '../actions/signInAction';

interface State {
  loading: boolean;
  error: string | null;
  user: LoginType;
}

const initialState: State = {
  loading: false,
  error: null,
  user: {
    email: '',
    password: '',
  },
};
export const loginReducer: Reducer<LoginType, UserAction> = (
  state = initialState.user,
  action
) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export const requestReducer: Reducer<State, requestAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case REQUEST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
