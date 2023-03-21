import { PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../model/user";
import { userReducer, State, loginToken } from "./users.slice";

const mockPasswd = "test";

const mockUser = {
  id: "5",
  email: "revilla@gmail.com",
  passwd: mockPasswd,
};
const mockInitialState: State = {
  userLogged: {} as UserStructure,
  users: [],
  token: "string",
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

// import { loginToken } from "./loginToken";
// import { UserStructure } from "./UserStructure";

// describe("loginToken function", () => {
//   it("should update state with userLogged property", () => {
//     const state = { userLogged: null };
//     const user = new UserStructure("John", "Doe");
//     // const action = { type: "loginToken", payload: user };
//     const newState = loginToken(state);
//     expect(newState.userLogged).toEqual(user);
//   });
// });
