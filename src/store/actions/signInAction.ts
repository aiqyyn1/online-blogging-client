import { Dispatch } from 'redux';

import Cookies from 'js-cookie';
import { Action } from 'redux';

import { loginApi } from '../../components/api/api';
import { useNavigate } from 'react-router-dom';

export interface UserAction extends Action {
  type: string;
  payload: string;
}
export const setEmail = (email: string): UserAction => ({
  type: 'SET_EMAIL',
  payload: email,
});

export const setPassword = (password: string): UserAction => ({
  type: 'SET_PASSWORD',
  payload: password,
});
export const REQUEST_REQUEST = 'REQUEST_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

export interface RequestAction {
  type: typeof REQUEST_REQUEST;
}

export interface RequestSuccessAction {
  type: typeof REQUEST_SUCCESS;
  payload: any;
}

export interface RequestFailureAction {
  type: typeof REQUEST_FAILURE;
  error: string | null;
}

export type requestAction =
  | RequestAction
  | RequestSuccessAction
  | RequestFailureAction;

export const requestRequest = (): RequestAction => ({
  type: REQUEST_REQUEST,
});

export const requestSuccess = (data: any): RequestSuccessAction => ({
  type: REQUEST_SUCCESS,
  payload: data,
});

export const requestFailure = (error: string): RequestFailureAction => ({
  type: REQUEST_FAILURE,
  error,
});

export const loginUser = (email: string, password: string): any => {

  return async (dispatch: Dispatch<requestAction>) => {
    dispatch(requestRequest());

    try {
      const data = {
        user: {
          email,
          password,
        },
      };

      const response = await loginApi.post(
        'https://api.realworld.io/api/users/login',
        data
      )

      Cookies.set('token', response.data.user.token, { expires: 365 });
      dispatch(requestSuccess(response.status));
      
    } catch (error) {
      dispatch(requestFailure(String(error)));
    }
  };
};
