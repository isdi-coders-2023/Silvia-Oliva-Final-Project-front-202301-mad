export {};
// /* eslint-disable testing-library/no-render-in-setup */
// /* eslint-disable testing-library/no-unnecessary-act */
// import { act, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import { Provider } from "react-redux";
// import { ToyStructure } from "../model/toy";
// import { ServerType, UserStructure } from "../model/user";
// import { ToysApiRepo } from "../services/toys.api.repo";
// import { UsersRepo } from "../services/user.repo";
// import { store } from "../store/store";
// import { useToys } from "./use.toys";
// import { useUsers } from "./use.users";

// describe("Given the useToys Custom Hook, a ToyApiRepo mock and a TestToyComponent", () => {
//   let mockToyRepo: ToysApiRepo;
//   let mockToyPayload: ToyStructure;

//   let mockUserRepo: UsersRepo;
//   let mockUserPayload: UserStructure;
//   let mockUserResponse: ServerType;
//   let mockUserResponseFalse: ServerType;

//   let falseToken: () => void;
//   let trueToken: () => void;

//   beforeEach(async () => {
//     mockToyRepo = {
//       loadGallery: jest.fn(),
//       loadDetails: jest.fn(),
//       createToy: jest.fn(),
//       updateToy: jest.fn(),
//       deleteOneToy: jest.fn(),
//     } as unknown as ToysApiRepo;

//     mockToyPayload = {
//       id: "1",
//       name: "test",
//       animalModel: "test",
//       height: "test",
//       description: "test",
//       img: "test",
//     } as unknown as ToyStructure;

//     mockUserPayload = {
//       email: "test",
//       id: "1",
//       token: "test",
//     } as unknown as UserStructure;

//     mockUserResponse = {
//       results: [mockUserPayload],
//     } as unknown as ServerType;

//     mockUserResponseFalse = {
//       results: [
//         {
//           email: "test",
//           id: "1",
//         },
//       ],
//     } as unknown as ServerType;

//     mockUserRepo = {
//       create: jest.fn(),
//     } as unknown as UsersRepo;

//     trueToken = () => {
//       (mockUserRepo.create as jest.Mock).mockResolvedValueOnce(
//         mockUserResponse
//       );
//     };

//     falseToken = () => {
//       (mockUserRepo.create as jest.Mock).mockResolvedValueOnce(
//         mockUserResponseFalse
//       );
//     };

//     const TestToyComponent = function () {
//       const { userLogin } = useUsers(mockUserRepo);
//       const { loadGallery, loadDetails, createToy, updateToy, deleteOneToy } =
//         useToys(mockToyRepo);

//       return (
//         <>
//           <button onClick={() => userLogin(mockUserPayload)}>login</button>
//           <button onClick={() => loadGallery()}>loadToys</button>
//           <button onClick={() => loadDetails()}>loadToys</button>
//           <button onClick={() => loadOneToy("mockIdToy")}>loadOneToy</button>
//           <button onClick={() => createToy(mockToyPayload)}>createToy</button>
//           <button onClick={() => updateToy("mockIdToy", mockToyPayload)}>
//             updateToy
//           </button>
//           <button onClick={() => deleteOneToy("mockIdToy")}>
//             deleteOneToy
//           </button>
//         </>
//       );
//     };

//     await act(async () =>
//       render(
//         <Provider store={store}>
//           <TestToyComponent></TestToyComponent>
//         </Provider>
//       )
//     );
//   });

//   describe("When the TestToyComponent is rendered", () => {
//     test("Then, the button should be in the document", async () => {
//       const elements = await screen.findAllByRole("button");
//       expect(elements[0]).toBeInTheDocument();
//     });
//   });

//   describe("When the TestToyComponent is rendered and the loadToys button is clicked", () => {
//     test("Then, if there is userToken, the query toy repo method should be called", async () => {
//       const elements = await screen.findAllByRole("button");
//       trueToken();
//       await act(async () => userEvent.click(elements[0]));
//       await act(async () => userEvent.click(elements[1]));

//       expect(mockToyRepo.query).toHaveBeenCalled();
//     });

//     test("Then, if there is no userToken, the query toy repo should NOT been called", async () => {
//       const elements = await screen.findAllByRole("button");
//       falseToken();
//       await act(async () => userEvent.click(elements[0]));
//       await act(async () => userEvent.click(elements[1]));

//       expect(mockToyRepo.query).not.toHaveBeenCalled();
//     });
//   });

//   describe("When the TestToyComponent is rendered and the loadOneToys button is clicked", () => {
//     test("Then, if there is userToken, the queryId toy repo method should be called", async () => {
//       const elements = await screen.findAllByRole("button");
//       trueToken();
//       await act(async () => userEvent.click(elements[0]));
//       await act(async () => userEvent.click(elements[2]));

//       expect(mockToyRepo.queryId).toHaveBeenCalled();
//     });

//     test("Then, if there is no userToken, the queryId toy repo should NOT been called", async () => {
//       const elements = await screen.findAllByRole("button");
//       falseToken();
//       await act(async () => userEvent.click(elements[0]));
//       await act(async () => userEvent.click(elements[2]));

//       expect(mockToyRepo.queryId).not.toHaveBeenCalled();
//     });
//   });

//   describe("When the TestGuitarComponent is rendered and the createGuitar button is clicked", () => {
//     test("Then, if there is userToken, the create toy repo method should be called", async () => {
//       const elements = await screen.findAllByRole("button");
//       trueToken();
//       await act(async () => userEvent.click(elements[0]));
//       await act(async () => userEvent.click(elements[3]));

//       expect(mockToyRepo.create).toHaveBeenCalled();
//     });

//     test("Then, if there is no userToken, the create toy repo should NOT been called", async () => {
//       const elements = await screen.findAllByRole("button");
//       falseToken();
//       await act(async () => userEvent.click(elements[0]));
//       await act(async () => userEvent.click(elements[3]));

//       expect(mockToyRepo.create).not.toHaveBeenCalled();
//     });
//   });

//   describe("When the TestGuitarComponent is rendered and the updateGuitar button is clicked", () => {
//     test("Then, if there is userToken, the update toy repo method should be called", async () => {
//       const elements = await screen.findAllByRole("button");
//       trueToken();
//       await act(async () => userEvent.click(elements[0]));
//       await act(async () => userEvent.click(elements[4]));

//       expect(mockToyRepo.update).toHaveBeenCalled();
//     });

//     test("Then, if there is no userToken, the update toy repo should NOT been called", async () => {
//       const elements = await screen.findAllByRole("button");
//       falseToken();
//       await act(async () => userEvent.click(elements[0]));
//       await act(async () => userEvent.click(elements[4]));

//       expect(mockToyRepo.update).not.toHaveBeenCalled();
//     });
//   });

//   describe("When the TestGuitarComponent is rendered and the deleteOneGuitar button is clicked", () => {
//     test("Then, if there is userToken, the delete toy repo method should be called", async () => {
//       const elements = await screen.findAllByRole("button");
//       trueToken();
//       await act(async () => userEvent.click(elements[0]));
//       await act(async () => userEvent.click(elements[5]));

//       expect(mockToyRepo.delete).toHaveBeenCalled();
//     });

//     test("Then, if there is no userToken, the delete toy repo should NOT been called", async () => {
//       const elements = await screen.findAllByRole("button");
//       falseToken();
//       await act(async () => userEvent.click(elements[0]));
//       await act(async () => userEvent.click(elements[5]));

//       expect(mockToyRepo.delete).not.toHaveBeenCalled();
//     });
//   });
// });
