export {};
// /* eslint-disable testing-library/no-render-in-setup */
// import { render, screen } from "@testing-library/react";
// import { MemoryRouter as Router } from "react-router-dom";
// import { Menu, MenuProps } from "../menu/menu";

// describe("Given the menu component", () => {
//   // describe("when we render the component", () => {
//     test("then it should render the menu component in the header component", () => {
//       const mockOptions: MenuProps = {
//         options: [
//           {
//             label: "test",
//             path: "/test",
//           },
//         ],
//       };
//       render(
//         <Router>
//           <Menu options={mockOptions.options}></Menu>
//         </Router>
//       );

//       const element = screen.getByText(mockOptions.options[0].label);
//       expect(element).toBeInTheDocument();
//     });
//   });
// });
