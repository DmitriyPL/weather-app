import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { storage } from "../helper/Storage";

import { SelectItem } from "../shared/types/types";
import type { RootState } from "./store";

interface SelectState {
  selItems: SelectItem[];
  selectItem: SelectItem;
}

const initialState: SelectState = {
  selItems: storage.getCities("cities"),
  selectItem: { value: "", label: "" },
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    addSelectItem: (state, action: PayloadAction<SelectItem>) => {
      const newItem = state.selItems.find(
        (item) =>
          item.value.toLowerCase() === action.payload.value.toLowerCase()
      );
      if (!newItem) {
        state.selItems.push(action.payload);
        storage.setItem("cities", state.selItems);
      }
    },
    setSelectItem: (state, action: PayloadAction<SelectItem>) => {
      state.selectItem = action.payload;
    },
  },
});

export const { addSelectItem, setSelectItem } = selectSlice.actions;

export const selectSelItem = (state: RootState) => state.select.selectItem;
export const selectSelItems = (state: RootState) => state.select.selItems;

export default selectSlice.reducer;
