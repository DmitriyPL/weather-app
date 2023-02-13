import { setPopupActive, setPopupData } from "../../../../redux/popupSlice";
import { useAppDispatch } from "../../../../redux/store";
import { CardItem } from "../../../../shared/types/types";

import s from "./Card.module.scss";

interface Props {
  item: CardItem;
}

export const Card = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  const clickHandle = () => {
    dispatch(setPopupActive(true));
    dispatch(setPopupData(item));
  };

  return (
    <div className={s.card} onClick={clickHandle}>
      <div className={s.card__title}>{item?.title}</div>
      <div className={s.card__info}>{item.item_info}</div>
      <div className={s.img}>
        <img
          src={`${process.env.REACT_APP_API_IMG_URL}${item.icon_id}@2x.png`}
          alt="Weather icon"
        />
      </div>
      <div className={s.temp__day}>{item.temp_day}</div>
      <div className={s.temp__night}>{item.temp_night}</div>
      <div className={s.desc}>{item.desc}</div>
    </div>
  );
};
