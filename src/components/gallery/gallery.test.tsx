/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Register } from "../register/register";
import Gallery from "./gallery";

jest.mock("../register/register");

beforeEach(() => {
  render(
    <Provider store={store}>
      <Gallery></Gallery>
    </Provider>
  );
});

describe("Given the gallery component", () => {
  describe("when we render all imag", () => {
    test("then register have ben called", () => {
      expect(Register).toHaveBeenCalled();
    });
  });
  describe("when we check the buttons", () => {
    test("then they should be in the document", () => {
      const button = screen.getAllByRole("button");

      fireEvent.click(button[0]);
      fireEvent.click(button[1]);
      expect(button[0]).toBeInTheDocument();
      expect(button[1]).toBeInTheDocument();
    });
  });
});
