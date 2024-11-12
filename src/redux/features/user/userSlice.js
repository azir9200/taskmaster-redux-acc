import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Mia Hussain",
  email: "mir@gmail.com",
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
