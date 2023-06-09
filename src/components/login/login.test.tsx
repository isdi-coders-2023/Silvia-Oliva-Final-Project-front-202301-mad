/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-unnecessary-act */
import userEvent from "@testing-library/user-event/";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { useUsers } from "../../hooks/use.users";
import { UsersRepo } from "../../services/user.repo";
import { store } from "../../store/store";
import Login from "./login";

jest.mock("../../hooks/use.users");
const mockPasswd = "pass test";

jest.mock("../../hooks/use.users");

beforeEach(() => {
  (useUsers as jest.Mock).mockReturnValue({ userLogin: jest.fn() });

  render(
    <Provider store={store}>
      <Login></Login>
    </Provider>
  );
});

describe("when you you press the submit button", () => {
  test("then the email and passwd should be send", async () => {
    const mockRepo = {} as UsersRepo;

    const inputs = screen.getByRole("textbox");
    const pass = screen.getByTestId("password");
    const fireButton = screen.getByRole("button");

    await userEvent.type(inputs, "test");
    await userEvent.type(pass, "pass test");
    await userEvent.click(fireButton);
    expect(fireButton).toBeInTheDocument();
    expect(useUsers(mockRepo).userLogin).toBeCalledWith({
      email: "test",
      passwd: mockPasswd,
    });
  });
});
