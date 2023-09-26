import axios from 'axios';
import { AppDispatch } from '../store';

import { postSlice } from './PostSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const fetchPost = createAsyncThunk('post', async (formData:FormData, thunkApi) => {
  try{
    const response = await axios.post(
      'http://localhost:8080/api/create',
      formData
    );
    return response.data
  }catch(err:any){
    return thunkApi.rejectWithValue(err.message)
  }

});
