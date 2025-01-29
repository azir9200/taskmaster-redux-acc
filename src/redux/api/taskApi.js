import { baseApi } from "./baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/api/task",
      providesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/task/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/api/task",
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
