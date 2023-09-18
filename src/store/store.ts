import { combineReducers, configureStore } from '@reduxjs/toolkit';
import PostSlice from './reducer/PostSlice';
const rootReducer = combineReducers({
   PostSlice
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];
