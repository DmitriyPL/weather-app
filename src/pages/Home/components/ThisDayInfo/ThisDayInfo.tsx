import cloud from "../../../../assets/cloud.png";
import { ThisDayItem } from "./ThisDayItem";

import s from "./ThisDayInfo.module.scss";
import { getDirection } from "../helpers";
import { Item } from "../../../../shared/types/types";

interface Props {
  weather: any;
}

export const ThisDayInfo = ({ weather }: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(weather?.temp)}° ощущается как ${Math.floor(
        weather?.feels_like
      )}°`,
    },
    {
      icon_id: "pressure",
      name: "Давление и Влажность",
      value: `${Math.floor(weather?.pressure)} мм рт.ст. / ${Math.floor(
        weather?.humidity
      )}%`,
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: `${
        weather?.rain
          ? `${weather.rain["1h"]} мм осадков за последний час`
          : "Без осадков"
      }`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${Math.floor(weather?.wind_speed)} м/с. ${getDirection(
        Math.floor(weather?.wind_deg)
      )}`,
    },
  ];
  return (
    <div className={s.this__day_info}>
      {items.map((item: Item) => (
        <ThisDayItem key={item.icon_id} item={item} />
      ))}
      <img className={s.cloud__img} src={cloud} alt="облако" />
    </div>
  );
};
