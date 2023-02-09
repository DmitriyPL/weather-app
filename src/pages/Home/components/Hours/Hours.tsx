import React from "react";
import { CardItem } from "../../../../shared/types/types";
import { Card } from "../Card/Card";
import { getDirection, getTime } from "../helpers";

import s from "./Hours.module.scss";

interface Props {
  weather: any[];
  offset: number;
  city: string;
}

export const Hours = ({ weather, offset, city }: Props) => {
  return (
    <div className={s.hours}>
      {weather &&
        weather.slice(0, 7).map((item: any, index) => {
          const newHour: CardItem = {
            title: getTime(offset, index),
            item_info: '',
            icon_id: item.weather[0].icon,
            temp_day: item.temp,
            temp_night: item.feels_like,
            desc: item.weather[0].description,
            pressure: item.pressure,
            rain: item.rain,
            wind_speed: item.wind_speed,
            wind_dir: getDirection(Math.floor(item?.wind_deg)),
            time: `День: Сегодня`,
            city: city,
          };
          return <Card item={newHour} key={"hour" + index} />;
        })}
    </div>
  );
};
