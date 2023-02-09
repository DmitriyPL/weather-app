import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Geo, RequestStatus } from "../shared/types/types";
import { fetchCurrentGeo, fetchGeoByCity } from "./appApi";
import type { RootState } from "./store";

interface GeoState {
  data: Geo;
  status: RequestStatus;
  error: any;
}

const initialState: GeoState = {
  data: {
    lat: "",
    lon: "",
    city: "",
  },
  status: RequestStatus.IDLE,
  error: null,
};

export const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {
    setGeo: (state, action: PayloadAction<Geo>) => {
      state.data = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCurrentGeo.pending, (state, action) => {
      state.status = RequestStatus.PENDING;
      state.error = null;
    });

    builder.addCase(fetchCurrentGeo.rejected, (state, action) => {
      state.status = RequestStatus.FAILED;
      state.error = action.payload;
      state.data = { lat: "51.5074", lon: "0.1278", city: "London" };
    });

    builder.addCase(fetchCurrentGeo.fulfilled, (state, action) => {
      state.status = RequestStatus.SUCCEEDED;
      state.data = action.payload;
    });

    builder.addCase(fetchGeoByCity.pending, (state, action) => {
      state.status = RequestStatus.PENDING;
      state.error = null;
    });

    builder.addCase(fetchGeoByCity.rejected, (state, action) => {
      state.status = RequestStatus.FAILED;
      state.error = action.payload;
    });

    builder.addCase(fetchGeoByCity.fulfilled, (state, action) => {
      state.status = RequestStatus.SUCCEEDED;
      state.data = action.payload;
    });
  },
});

export const { setGeo } = geoSlice.actions;

export const selectGeo = (state: RootState) => state.geo.data;
export const selectGeoStatus = (state: RootState) => state.geo.status;

export default geoSlice.reducer;
