import { useSelector } from "react-redux";
import { GlobalSvgSelector } from "../../icons/global/GlobalSvgSelector";
import { selectGeoStatus } from "../../redux/geoSlice";
import { selectWeatherStatus } from "../../redux/weatherSlice";
import { RequestStatus } from "../types/types";
import { FindCity } from "./components/FindCity";
import { Loading } from "./components/Loading";
import { SelectWrap } from "./components/Select";
import { Theme } from "./components/Theme";

import s from "./Header.module.scss";

export const Header = () => {
  const geoStatus = useSelector(selectGeoStatus);
  const weatherStatus = useSelector(selectWeatherStatus);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>Weather App</div>
      </div>
      {(geoStatus === RequestStatus.PENDING ||
        weatherStatus === RequestStatus.PENDING) && <Loading />}
      <div className={s.wrapper}>
        <FindCity />
        <Theme />
        <SelectWrap />
      </div>
    </header>
  );
};
