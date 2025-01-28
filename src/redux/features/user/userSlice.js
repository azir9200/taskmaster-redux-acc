import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: {
    name: "",
    email: "",
    role: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setToken, setUser, logout } = userSlice.actions;
export default userSlice.reducer;

// Selectors
export const useCurrentToken = (state) => state.user.token;
export const selectCurrentUser = (state) => state.user.user;
