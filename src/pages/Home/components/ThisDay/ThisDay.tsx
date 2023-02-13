import { Geo } from '../../../../shared/types/types';

import s from './ThisDay.module.scss';

interface Props {
  weather: any;
  geo: Geo;
  offset: number;
}

const getTime = (targetoffset: number) => {
  const date = new Date();
  const currentOffset = date.getTimezoneOffset();
  const offset = currentOffset + targetoffset / 60;

  let hour = date.getHours() + offset / 60;
  if (hour < 0){
    hour = 24 + hour;
  }

  const convertHour = hour < 10 ? "0" + hour : hour;
  const minute = date.getMinutes();
  const conveMinute = minute < 10 ? "0" + minute : minute;

  if(!convertHour){
    return "-:-";
  }

  return `${convertHour}:${conveMinute}`;
}

export const ThisDay = ({ weather, geo, offset }: Props) => {

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temp}>{weather?.temp && Math.floor(weather?.temp)}°</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        {weather?.weather && <img src={`${process.env.REACT_APP_API_IMG_URL}${weather?.weather[0].icon}@4x.png`} alt="Weather icon" />}
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{getTime(offset)}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>{geo.city}</span>
        </div>
      </div>
    </div>
  );
};
