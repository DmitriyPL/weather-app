import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { storage } from '../helper/Storage';
import type { RootState } from './store'

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeState {
  style: ThemeEnum | undefined,
}

const initialState: ThemeState = {
  style: storage.getItem('theme'),
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeEnum>) => {
        state.style = action.payload;
    },
  },
})

export const { setTheme } = themeSlice.actions;

export const selectCurrentTheme = (state: RootState) => state.theme.style;

export default themeSlice.reducer;