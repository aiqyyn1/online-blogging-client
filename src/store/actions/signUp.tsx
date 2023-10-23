import {  Dispatch} from 'redux';

import Cookies from 'js-cookie';

import { signUpApi } from '../../components/api/api';
import  {UserAction, requestRequest,requestSuccess, requestFailure, requestAction} from './signInAction'

export const setUserName =(username:string) : UserAction =>({
  type:'SET_USERNAME',
  payload:username
})
export const signInUser = (email: string, password: string, username:string): any => {
  return async (dispatch: Dispatch<requestAction>) => {
    dispatch(requestRequest());

    try {
      const data = {
        user: {
          email,
          username,
          password,

        },
      };

      const token = Cookies.get('token');
      const response = await signUpApi.post(
        '/',
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(requestSuccess(response));
    } catch (error) {
      
      dispatch(requestFailure(String(error)));
    }
  };
};