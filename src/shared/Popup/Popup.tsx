import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import { GlobalSvgSelector } from "../../icons/global/GlobalSvgSelector";
import {
  selectPopupData,
  selectPopupItems,
  setPopupActive,
} from "../../redux/popupSlice";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import s from "./Popup.module.scss";
import { Item } from "../types/types";

export const Popup = () => {
  const data = useSelector(selectPopupData);
  const items = useSelector(selectPopupItems);
  const dispatch = useAppDispatch();

  const clickHandle = () => {
    dispatch(setPopupActive(false));
  };

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>
            {data && Math.floor(data?.temp_day)}°
          </div>
          <div className={s.day__name}>{data?.title}</div>
          <div className={s.img}>
            {data?.icon_id && (
              <img
                src={`${process.env.REACT_APP_API_IMG_URL}${data?.icon_id}@4x.png`}
                alt="Weather icon"
              />
            )}
          </div>
          <div className={s.day__time}>
            <span>{data?.time}</span>
          </div>
          <div className={s.day__city}>
            Город: <span>{data?.city}</span>
          </div>
        </div>
        <div className={s.this__day_info}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <div className={s.close} onClick={clickHandle}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
};
