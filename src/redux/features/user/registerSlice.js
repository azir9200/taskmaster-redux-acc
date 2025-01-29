import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  role: "",
  address: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    // setCart: (state, action) => {
    //   state.cart = action.payload;
    // },
  },
});

export const { setName, setEmail, setPassword, setRole, setAddress } =
  registerSlice.actions;
export default registerSlice.reducer;
