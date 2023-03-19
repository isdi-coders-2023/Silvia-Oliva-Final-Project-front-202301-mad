/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import Login from "./login.js";
import { MemoryRouter } from "react-router";

describe("Given the Login components", () => {
  beforeEach(async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login></Login>
        </MemoryRouter>
      </Provider>
    );
  });
  describe("When we render the component", () => {
    test("Then it should contain the 'button' role", async () => {
      const elements = [screen.getByRole("button")];
      await fireEvent.click(elements[0]);
    });
  });
});
