import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RequestStatus, WeatherPeriods } from "../shared/types/types";
import { fetchWeatherByGeo } from "./appApi";
import type { RootState } from "./store";

interface WeatherState {
  data: any;
  status: RequestStatus;
  error: any;
  period: WeatherPeriods;
}

const initialState: WeatherState = {
  data: null,
  status: RequestStatus.IDLE,
  error: null,
  period: WeatherPeriods.DAY,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setWeatherPeriod: (state, action: PayloadAction<WeatherPeriods>) => {
      state.period = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchWeatherByGeo.pending, (state, action) => {
      state.status = RequestStatus.PENDING;
      state.error = null;
    });

    builder.addCase(fetchWeatherByGeo.rejected, (state, action) => {
      state.status = RequestStatus.FAILED;
      state.error = action.payload;
    });

    builder.addCase(fetchWeatherByGeo.fulfilled, (state, action) => {
      state.status = RequestStatus.SUCCEEDED;
      state.data = action.payload;
    });
  },
});

export const { setWeather, setWeatherPeriod } = weatherSlice.actions;

export const selectWeatherStatus = (state: RootState) => state.weather.status;
export const selectCurrentWeather = (state: RootState) => state.weather.data;
export const selectWeatherPeriod = (state: RootState) => state.weather.period;

export default weatherSlice.reducer;
