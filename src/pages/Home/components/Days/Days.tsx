import { CardItem } from "../../../../shared/types/types";

import { Card } from "../Card/Card";
import { getDirection } from "../helpers";

import s from "./Days.module.scss";

const DaysOfWeek = [
  "",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SARTURDAY",
  "SUNDAY",
];

interface Props {
  weather: any[];
  offset: number;
  city: string;
}

const getDate = (index: number) => {
  const date = new Date();
  date.setDate(date.getDate() + index);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const convertDay = day < 10 ? "0" + day : day;
  const convertMonth = month < 10 ? "0" + month : month;
  return `${convertDay}.${convertMonth}`;
};

const getDayOfWeek = (index: number) => {
  const date = new Date();
  const currentDay = date.getDay();
  let day = currentDay + index;
  if (day > 7) {
    day = day - 7;
  }
  return DaysOfWeek[day];
};

export const Days = ({ weather, offset, city }: Props) => {
  return (
    <div className={s.days}>
      {weather &&
        weather.slice(0, 7).map((item: any, index) => {
          const newDay: CardItem = {
            title: getDayOfWeek(index),
            item_info: getDate(index),
            icon_id: item.weather[0].icon,
            temp_day: item.temp.day,
            temp_night: item.temp.night,
            desc: item.weather[0].description,
            pressure: item.pressure,
            rain: item.rain,
            wind_speed: item.wind_speed,
            wind_dir: getDirection(Math.floor(item?.wind_deg)),
            time: `Дата: ${getDate(index)}`,
            city: city,
          };
          return <Card item={newDay} key={"day" + index} />;
        })}
    </div>
  );
};
