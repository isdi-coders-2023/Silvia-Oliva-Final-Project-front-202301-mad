import { render } from "@testing-library/react";
import { Gallery } from "./gallery";

jest.mock("./gallery");

describe("Given GalleryPage component", () => {
  describe("When it is render", () => {
    test("Then it should be called", () => {
      render(<Gallery></Gallery>);
      expect(Gallery).toHaveBeenCalled();
    });
  });
});
export default Gallery;
