import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../model/user";

export type State = {
  userLogged: UserStructure;
  users: UserStructure[];
  token: string;
};

const initialState: State = {
  userLogged: {} as UserStructure,
  users: [],
  token: "no token",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register(state, action: PayloadAction<UserStructure>) {
      state.users = [...state.users, action.payload];
    },
    login(state, action: PayloadAction<UserStructure>) {
      debugger;
      state.userLogged = action.payload;
    },
    loginToken(state, action: PayloadAction<UserStructure>) {
      debugger;
      state.userLogged = action.payload;
    },
  },
});

export const { register, login, loginToken } = userSlice.actions;

export const userReducer = userSlice.reducer;
