import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Given the Header component", () => {
  describe("when you enter in the component", () => {
    test("then it should render it", () => {
      render(
        <Header>
          <>
            <menu></menu>
          </>
        </Header>
      );
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});
