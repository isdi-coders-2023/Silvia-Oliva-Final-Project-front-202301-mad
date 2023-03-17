import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { store } from "../../store/store";
import { MenuOption } from "../app/app";
import { AppRouter } from "./app.router";

describe("Given the app router component", () => {
  const mockOptions: MenuOption[] = [
    { label: "Home", path: "/home" },
    { label: "Gallery", path: "/gallery" },
  ];

  const mockRouterFunctions = (num: number) => {
    render(
      <Provider store={store}>
        <Router initialEntries={["/home", "/gallery"]} initialIndex={num}>
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      </Provider>
    );
  };

  describe("when the route is Home", () => {
    test("then it should go to /home and render it", async () => {
      await waitFor(async () => mockRouterFunctions(0));
      const element = await screen.findByRole("heading", {
        name: "Home",
      });
      expect(element).toBeInTheDocument();
    });
  });
  describe("when the route is Gallery", () => {
    test("then it should go to /profile and render it", async () => {
      await waitFor(async () => mockRouterFunctions(1));
      const element = await screen.findByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
