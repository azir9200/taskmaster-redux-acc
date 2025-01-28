import { baseApi } from "./baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/api/v1/task",
      providesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/task/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/api/v1/task",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});
export const { useGetTasksQuery, useUpdateTaskMutation, useAddTaskMutation } =
  taskApi;
export default taskApi;
