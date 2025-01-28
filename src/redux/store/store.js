import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/user/loginSlice";
import registerReducer from "../features/user/registerSlice";
import { baseApi } from "../api/baseApi";
import userReducer from "../features/user/userSlice";
import tasksReducer from "../features/tasks/tasksSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistUserConfig = {
  key: "user",
  storage,
};
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    login: loginReducer,
    register: registerReducer,
    user: persistedUserReducer,
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

// Persistor to manage rehydration of state
export const persistor = persistStore(store);
