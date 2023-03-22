/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import { Provider } from "react-redux";

import { useUsers } from "../../hooks/use.users";
import { UsersRepo } from "../../services/user.repo";
import { store } from "../../store/store";
import { Register } from "./register";
jest.mock("../../hooks/use.users");

describe("Given the Register component", () => {
  beforeEach(async () => {
    await act(async () => {
      (useUsers as jest.Mock).mockReturnValue({
        userRegister: jest.fn(),
      });
      render(
        <Provider store={store}>
          <Register></Register>
        </Provider>
      );
    });
  });
  describe("When rendering", () => {
    test("then it should render title Register", () => {
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });

    test("Then the <button> should be in the document", () => {
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the submit button is clicked", () => {
    test("Then, the handleSubmit function should be called", async () => {
      const usersMockRepo = {
        create: jest.fn(),
      } as unknown as UsersRepo;
      const inputs = screen.getAllByRole("textbox");
      await userEvent.type(inputs[0], "test");
      await userEvent.type(inputs[1], "test");

      const button = screen.getByRole("button");
      await userEvent.click(button);
      expect(useUsers(usersMockRepo).userRegister).toHaveBeenCalledWith({
        email: "test",
        passwd: "test",
      });
    });
  });
});
