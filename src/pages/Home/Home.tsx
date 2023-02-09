import { useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchCurrentGeo, fetchWeatherByGeo } from "../../redux/appApi";
import { addSelectItem, setSelectItem } from "../../redux/selectSlice";
import { SelectItem, WeatherPeriods } from "../../shared/types/types";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { useAppDispatch } from "../../redux/store";
import { Hours } from "./components/Hours/Hours";
import { selectGeo } from "../../redux/geoSlice";
import { Tabs } from "./components/Tabs/Tabs";
import { Days } from "./components/Days/Days";
import {
  selectCurrentWeather,
  selectWeatherPeriod,
} from "../../redux/weatherSlice";

import s from "./Home.module.scss";

export const Home = () => {
  const period = useSelector(selectWeatherPeriod);
  const weather = useSelector(selectCurrentWeather);
  const geo = useSelector(selectGeo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrentGeo());
  }, [dispatch]);

  useEffect(() => {
    if (geo.city) {
      const newSelectItem: SelectItem = { value: geo.city, label: geo.city };
      dispatch(setSelectItem(newSelectItem));
      dispatch(addSelectItem(newSelectItem));
      dispatch(fetchWeatherByGeo(geo));
    }
  }, [geo, geo.city, dispatch]);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay
          weather={weather?.current}
          geo={geo}
          offset={weather?.timezone_offset}
        />
        <ThisDayInfo weather={weather?.current} />
      </div>
      <Tabs />
      { period === WeatherPeriods.DAY && <Hours weather={weather?.hourly} offset={weather?.timezone_offset} city={geo?.city} /> }
      { period === WeatherPeriods.WEEK && <Days weather={weather?.daily} offset={weather?.timezone_offset} city={geo?.city} /> }
    </div>
  );
};
