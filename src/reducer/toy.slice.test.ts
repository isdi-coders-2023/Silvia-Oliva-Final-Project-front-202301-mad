import { PayloadAction } from "@reduxjs/toolkit";
import { ToyStructure } from "../model/toy";
import { toyReducer, ToyState } from "./toy.slice";

describe("Given the toySlice with payload and initial state mocked", () => {
  let mockInitialState: ToyState;
  let mockPayload: ToyStructure;
  let mockToy: ToyStructure;

  beforeEach(() => {
    mockInitialState = {
      allToys: [],
      toy: {} as ToyStructure,
    };

    mockPayload = {
      id: "1",
      name: "test",
      animalModel: "test",
      height: "test",
      description: "test",
      img: "test",
    };

    mockToy = {
      id: "2",
      name: "test2",
      animalModel: "test2",
      height: "test2",
      description: "test2",
      img: "test2",
    };
  });

  describe("When the loadGallery action is called", () => {
    test("Then, if the initial state allToys is empty, it should return the payload in the allToys property of the state", () => {
      const mockQueryAction: PayloadAction<ToyStructure[]> = {
        type: "toy/query",
        payload: [mockPayload],
      };
      const result = toyReducer(mockInitialState, mockQueryAction);
      expect(result).toEqual({
        allToys: [mockPayload],
        toy: {},
      });
    });
  });

  describe("When the loadDetails action is called", () => {
    test("Then, if the initial state toy is empty, it should return the payload in the toy property of the state", () => {
      const mockQueryIdAction: PayloadAction<ToyStructure> = {
        type: "toy/queryId",
        payload: mockPayload,
      };
      const result = toyReducer(mockInitialState, mockQueryIdAction);
      expect(result).toEqual({
        allToys: [],
        toy: mockPayload,
      });
    });
  });

  describe("When the create action is called", () => {
    test("Then, if the initial state allToys is empty, it should return the payload in the allToys property of the state", () => {
      const mockCreateAction: PayloadAction<ToyStructure> = {
        type: "toy/create",
        payload: mockPayload,
      };
      const result = toyReducer(mockInitialState, mockCreateAction);
      expect(result).toEqual({
        allToys: [mockPayload],
        toy: {},
      });
    });
  });

  describe("When the update action is called", () => {
    test("Then, if the initial state allToys is an Array of mockPayload and mockToy, it should return the allToy state with the mockUpdateAction", () => {
      mockInitialState = {
        allToys: [mockPayload, mockToy],
        toy: {} as ToyStructure,
      };

      const mockUpdateAction: PayloadAction<ToyStructure> = {
        type: "toy/update",
        payload: {
          id: "3",
          name: "test3",
          animalModel: "test3",
          height: "test3",
          description: "test3",
          img: "test3",
        },
      };
      const result = toyReducer(mockInitialState, mockUpdateAction);
      expect(result).toEqual({
        allToys: [
          {
            id: "3",
            name: "test3",
            animalModel: "test3",
            height: "test3",
            description: "test3",
            img: "test3",
          },
          mockToy,
        ],
        toy: {},
      });
    });
  });

  describe("When the deleteToy action is called", () => {
    test("Then, if the initial state allToys is an Array of mockPayload and mockToy, it should return the payload in the allToys property of the state", () => {
      mockInitialState = {
        allToys: [mockPayload, mockToy],
        toy: {} as ToyStructure,
      };

      const mockDeleteAction: PayloadAction<ToyStructure["id"]> = {
        type: "toy/deleteToy",
        payload: "3",
      };
      const result = toyReducer(mockInitialState, mockDeleteAction);
      expect(result).toEqual({
        allToys: [mockToy],
        toy: {},
      });
    });
  });
});
