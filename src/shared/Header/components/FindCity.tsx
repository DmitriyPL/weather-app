import { ChangeEvent, useState, KeyboardEvent } from "react";

import { fetchGeoByCity } from "../../../redux/appApi";
import findIcon from "../../../assets/search.png";
import { useAppDispatch } from "../../../redux/store";

import s from "../Header.module.scss";

export const FindCity = () => {
  const [city, setCity] = useState("");
  const dispatch = useAppDispatch();

  const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const submitHandle = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(fetchGeoByCity(city));
      setCity("");
    }
  };

  return (
    <div className={s.find}>
      <input
        value={city}
        name="findCity"
        onChange={changeHandle}
        onKeyPress={submitHandle}
      />
      <div className={s.find_img}>
        <img src={findIcon} alt="Find icon" />
      </div>
    </div>
  );
};
