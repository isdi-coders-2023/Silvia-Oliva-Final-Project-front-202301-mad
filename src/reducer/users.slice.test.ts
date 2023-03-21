import { PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../model/user";
import { State, userReducer } from "./users.slice";

const mockPasswd = "revilla";

const mockUser = {
  id: "3",
  username: "revilla",
  email: "revilla",
  password: mockPasswd,
};
const mockInitialState: State = {
  userLogged: {} as UserStructure,
  users: [],
};

describe("Given the userSlice", () => {
  describe("When the method REGISTER is called", () => {
    test("Then it should return in element.users the mock user on an array", () => {
      const mockRegisterAction: PayloadAction<UserStructure> = {
        type: "user/register",
        payload: mockUser,
      };
      const element = userReducer(mockInitialState, mockRegisterAction);
      expect(element.users).toEqual([mockUser]);
    });
  });
  describe("When the method LOGIN is called", () => {
    test("Then it should return in element.userLogged the mock user as an object", () => {
      const mockRegisterAction: PayloadAction<UserStructure> = {
        type: "user/login",
        payload: mockUser,
      };
      const element = userReducer(mockInitialState, mockRegisterAction);
      expect(element.userLogged).toBe(mockUser);
    });
  });
});
