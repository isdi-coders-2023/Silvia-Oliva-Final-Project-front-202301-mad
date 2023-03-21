import { render, screen } from "@testing-library/react";
import { MenuOption } from "../app/app";
import { MemoryRouter as Router } from "react-router-dom";
import { Menu } from "../menu/menu";

describe("Given the menu component", () => {
  describe("when we render the component", () => {
    test("then it should render the menu component in the header component", () => {
      const mockOptions: MenuOption[] = [
        {
          label: "test",
          path: "/test",
        },
      ];
      render(
        <Router>
          <Menu options={mockOptions}></Menu>
        </Router>
      );

      const element = screen.getByAltText(mockOptions[0].label);
      expect(element).toBeInTheDocument();
    });
  });
});
