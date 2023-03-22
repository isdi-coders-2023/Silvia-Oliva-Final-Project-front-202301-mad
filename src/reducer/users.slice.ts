import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../model/user";

export type State = {
  userLogged: UserStructure;
  users: UserStructure[];
};

const initialState: State = {
  userLogged: {} as UserStructure,
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action: PayloadAction<UserStructure>) {
      state.users = [...state.users, action.payload];
    },
    login(state, action: PayloadAction<UserStructure>) {
      state.userLogged = action.payload;
    },
  },
});

export const { register, login } = userSlice.actions;

export const userReducer = userSlice.reducer;
