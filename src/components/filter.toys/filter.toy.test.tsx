export {};
// /* eslint-disable testing-library/no-unnecessary-act */
// /* eslint-disable testing-library/no-render-in-setup */
// import { act, render, screen } from "@testing-library/react";
// import { MemoryRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "../../store/store";
// import "@testing-library/jest-dom";
// import { useToys } from "../../hooks/use.toys";
// import { ToysApiRepo } from "../../services/toys.api.repo";
// import userEvent from "@testing-library/user-event";
// import { FilterToy } from "./filter.toys";

// jest.mock("../../hooks/use.toys");

// describe("Given the FilterToy component", () => {
//   describe("When the component is rendered", () => {
//     beforeEach(async () => {
//       await act(async () => {
//         (useToys as jest.Mock).mockReturnValue({
//           loadToys: jest.fn(),
//         });

//         render(
//           <Provider store={store}>
//             <Router>
//               <FilterToy></FilterToy>
//             </Router>
//           </Provider>
//         );
//       });
//     });

//     test("Then if the user click on All Filter Button, the loadToy function should be called", async () => {
//       const toysMockRepo = {} as unknown as ToysApiRepo;

//       const elements = screen.getAllByRole("button");
//       await act(async () => userEvent.click(elements[0]));
//       expect(useToys(toysMockRepo).loadToys).toHaveBeenCalled();
//     });

//     test("Then if the user click on Animal model Filter Button, the loadToy function should be called", async () => {
//       const toysMockRepo = {} as unknown as ToysApiRepo;

//       const elements = screen.getAllByRole("button");
//       await act(async () => userEvent.click(elements[1]));
//       expect(useToys(toysMockRepo).loadToys).toHaveBeenCalled();
//     });

//     test("Then if the user click on Name Filter Button, the loadToy function should be called", async () => {
//       const toysMockRepo = {} as unknown as ToysApiRepo;

//       const elements = screen.getAllByRole("button");
//       await act(async () => userEvent.click(elements[2]));
//       expect(useToys(toysMockRepo).loadToys).toHaveBeenCalled();
//     });
//   });
// });
