/* eslint-disable testing-library/no-render-in-setup */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store.js";

import Gallery from "./gallery.js";

jest.mock("../register/register");

beforeEach(() => {
  render(
    <Provider store={store}>
      <Gallery></Gallery>
    </Provider>
  );
});

describe("Given the gallery component", () => {
  describe("when we render it", () => {
    test("then ..", () => {
      expect(Gallery).toHaveBeenCalled();
    });
  });
});
