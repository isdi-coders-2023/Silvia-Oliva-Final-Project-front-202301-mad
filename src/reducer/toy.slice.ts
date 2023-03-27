import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToyStructure } from "../model/toy";

export type ToyState = {
  allToys: ToyStructure[];
  toy: ToyStructure;
};

const initialState: ToyState = {
  allToys: [],
  toy: {} as ToyStructure,
};

const toySlice = createSlice({
  name: "toy",
  initialState,

  reducers: {
    loadGallery(state, action: PayloadAction<ToyStructure[]>) {
      state.allToys = action.payload;
    },

    loadDetails(state, action: PayloadAction<ToyStructure>) {
      state.toy = action.payload;
    },

    createToy(state, action: PayloadAction<ToyStructure>) {
      state.allToys = [...state.allToys, action.payload];
    },

    updateToy(state, action: PayloadAction<ToyStructure>) {
      const actualInfo = [...state.allToys];

      state.allToys = actualInfo.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    },

    deleteToy(state, action: PayloadAction<ToyStructure["id"]>) {
      const actualInfo = [...state.allToys];

      state.allToys = actualInfo.filter((item) => item.id !== action.payload);
    },
  },
});

export const { loadGallery, loadDetails, createToy, updateToy, deleteToy } =
  toySlice.actions;
export const toyReducer = toySlice.reducer;
