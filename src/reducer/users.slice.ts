import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../model/user";

export type State = {
  userLogged: UserStructure;
  token: string;
};

const initialState: State = {
  userLogged: {
    id: "",
    email: "",
    passwd: "",
  } as UserStructure,
  token: "No token",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginToken(state: State, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    loginUser(state: State, action: PayloadAction<UserStructure>) {
      state.userLogged = action.payload;
    },
  },
});

export const { loginToken, loginUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
