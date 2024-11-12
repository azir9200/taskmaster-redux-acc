import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api", // Add the reducer path for integration with Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getPostsById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    setPost: builder.mutation({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetUsersQuery,
  useGetPostsByIdQuery,
  useSetPostMutation,
} = baseApi;
export default baseApi;
