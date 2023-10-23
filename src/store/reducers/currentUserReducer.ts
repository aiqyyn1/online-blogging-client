import { Reducer } from 'redux';
import {
  REQUEST_REQUEST,
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  requestAction,
  UserAction,
} from '../actions/signInAction';
import { profileType } from '../../types/ProfileType';

interface State {
  data: profileType;
}
const initialState: State = {
  data: {

    username: '',
    image: '',
    email: '',

  },
};
export const currentReducer: Reducer<State, requestAction> = (
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

        error: action.error,
      };
    default:
      return state;
  }
};
