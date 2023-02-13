import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardItem, Item } from "../shared/types/types";
import type { RootState } from "./store";

interface PopupState {
  isActive: boolean;
  data: CardItem | null;
  items: Item[];
}

const initialState: PopupState = {
  isActive: false,
  data: null,
  items: [],
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopupActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
    setPopupData: (state, action: PayloadAction<CardItem>) => {
      const data = action.payload;
      state.data = data;
      state.items = [
        {
          icon_id: "temp",
          name: "Температура",
          value: `${Math.floor(data?.temp_day)}° - ощущается как ${
            data?.temp_night
          }°`,
        },
        {
          icon_id: "pressure",
          name: "Давление",
          value: `${data?.pressure} мм ртутного столба`,
        },
        {
          icon_id: "precipitation",
          name: "Осадки",
          value: `${
            data?.rain ? `${data.rain} мм осадков в час` : "Без осадков"
          }`,
        },
        {
          icon_id: "wind",
          name: "Ветер",
          value: `${data?.wind_speed} м/с. ${data?.wind_dir}`,
        },
      ];
    },
  },
});

export const { setPopupActive, setPopupData } = popupSlice.actions;

export const selectPopupIsActive = (state: RootState) => state.popup.isActive;
export const selectPopupData = (state: RootState) => state.popup.data;
export const selectPopupItems = (state: RootState) => state.popup.items;

export default popupSlice.reducer;
