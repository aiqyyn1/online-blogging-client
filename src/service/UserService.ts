import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api',
  }),
  endpoints: (build) => ({
    handlePostData: build.mutation({
      query: (formData) => ({
        url: '/create',
        method: 'POST',
        body: formData, 
      }),
    }),
  }),
});
export const {useHandlePostDataMutation} = postApi


