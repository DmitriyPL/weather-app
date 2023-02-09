import { configureStore } from '@reduxjs/toolkit'

import weatherReducer from "./weatherSlice";
import { useDispatch } from 'react-redux';
import themeReducer from "./themeSlice";
import selectReducer from "./selectSlice";
import geoReducer from "./geoSlice";
import popupReducer from "./popupSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
    geo: geoReducer,
    select: selectReducer,
    popup: popupReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export function useAppDispatch() {
  return useDispatch<AppDispatch>();
}