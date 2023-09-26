import { combineReducers, configureStore} from '@reduxjs/toolkit';
import PostSlice from './reducer/PostSlice';
import { postApi } from '../service/UserService';
const rootReducer = combineReducers({
   PostSlice,
   [postApi.reducerPath] : postApi.reducer
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => 
     
  getDefaultMiddleware().concat(postApi.middleware)
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];
