import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchPost } from './ActionPost';

interface PostState {
  data:{}
  isLoading: boolean;
  error: string;
}
const initialState: PostState = {
  data:{},
  isLoading: false,
  error: '',
};
export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPost.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.data = action.payload;
    },
    [fetchPost.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPost.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default postSlice.reducer;
