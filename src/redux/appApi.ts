import { createAsyncThunk } from "@reduxjs/toolkit";
import { Geo } from "../shared/types/types";

export const fetchWeatherByGeo = createAsyncThunk(
  "weather/fetchWeatherByGeo",
  async (params: Geo) => {
    const resp = await fetch(
      `${process.env.REACT_APP_API_WEATHER_URL}onecall?lat=${params.lat}&lon=${params.lon}&appid=${process.env.REACT_APP_API_WEATHER_KEY}&units=metric&exclude=minutely` as RequestInfo,
      {
        credentials: "same-origin",
      }
    );
    const data = await resp.json();
    return data;
  }
);

export const fetchCurrentGeo = createAsyncThunk(
  "geo/fetchCurrentGeo",
  async () => {
    const resp = await fetch(
      `${process.env.REACT_APP_API_GEO_URL}?apiKey=${process.env.REACT_APP_API_GEO_KEY}` as RequestInfo,
      {
        credentials: "same-origin",
      }
    );
    const data = await resp.json();
    const geo: Geo = {
      lat: data.location.lat,
      lon: data.location.lng,
      city: data.location.city,
    };
    return geo;
  }
);

export const fetchGeoByCity = createAsyncThunk(
  "geo/fetchGeoByCity",
  async (city: string) => {
    const resp = await fetch(
      `${process.env.REACT_APP_API_WEATHER_GEO_URL}direct?q=${city}&appid=${process.env.REACT_APP_API_WEATHER_KEY}` as RequestInfo
    );
    const data = await resp.json();
    const res = data[0];
    const geo: Geo = {
      lat: res.lat,
      lon: res.lon,
      city: res.name,
    };
    return geo;
  }
);
