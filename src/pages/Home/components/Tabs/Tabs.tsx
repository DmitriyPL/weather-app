import { MouseEvent, useState } from "react";

import { setWeatherPeriod } from '../../../../redux/weatherSlice';
import { WeatherPeriods } from "../../../../shared/types/types";
import { useAppDispatch } from "../../../../redux/store";

import s from "./Tabs.module.scss";

const tabs = [WeatherPeriods.DAY, WeatherPeriods.WEEK];

export const Tabs = () => {

  const [pressed, setPressed] = useState<HTMLBaseElement | null>(null);
  const dispatch = useAppDispatch();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const selDiv = event.target as HTMLBaseElement;
    if (pressed) {
      pressed.classList.remove(s.active);
    } else {
      const firstBtn = document.querySelector(
        `div.${s.tabs} button:first-child`
      ) as HTMLBaseElement;
      firstBtn.classList.remove(s.active);
    }
    selDiv.classList.add(s.active);
    setPressed(selDiv);

    if ( selDiv.textContent === WeatherPeriods.WEEK ) {
      dispatch(setWeatherPeriod(WeatherPeriods.WEEK))
    } else {
      dispatch(setWeatherPeriod(WeatherPeriods.DAY))
    }

  };

  return (
    <div className={s.tabs}>
      {tabs.map((value, index) => (
        <button
          className={s.tab + (index === 0 ? " " + s.active : "")}
          key={value}
          onClick={handleClick}
        >
          {value}
        </button>
      ))}
    </div>
  );
};
