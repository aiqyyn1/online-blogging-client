import { Reducer } from 'redux';
import { RegType } from '../../types/RegType';
import { UserAction } from '../actions/signInAction';

interface State {
  loading: boolean;
  error: string | null;
  user: RegType;
}
const initialState: State = {
  loading: false,
  error: null,
  user: {
    email: '',
    username: '',
    password: '',
  },
};
export const signUpReducer: Reducer<RegType, UserAction> = (
  state = initialState.user,
  action
) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
