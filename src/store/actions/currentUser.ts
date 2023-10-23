import { Dispatch } from 'redux';
import {
  requestAction,
  requestFailure,
  requestRequest,
  requestSuccess,
} from './signInAction';
import { getCurrentUser as currentUser } from '../../components/api/api';

export const getCurrentUser = () => {
  return async (dispatch: Dispatch<requestAction>) => {
    dispatch(requestRequest());
    try {
      const response = await currentUser.get('/');
   
      const {user: { username, image, email }, } = response.data;
      
      dispatch(requestSuccess({username, image, email}));
    
    } catch (error) {
      dispatch(requestFailure(String(error)));
    }
  };
};
