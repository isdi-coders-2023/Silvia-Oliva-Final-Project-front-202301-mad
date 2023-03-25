import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducer/users.slice";
import { toyReducer } from "../reducer/toy.slice";
export const store = configureStore({
  reducer: {
    users: userReducer,
    toys: toyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
