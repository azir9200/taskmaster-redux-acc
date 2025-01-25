import baseApi from "./baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/api/v1/tasks",
      providesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/api/v1/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});
export const { useGetTasksQuery, useUpdateTaskMutation, useAddTaskMutation } =
  taskApi;
export default taskApi;
