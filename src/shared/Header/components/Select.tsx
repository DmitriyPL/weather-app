import { useSelector } from 'react-redux'
import Select, { SingleValue } from 'react-select';

import { selectCurrentTheme, ThemeEnum } from '../../../redux/themeSlice';
import { fetchGeoByCity } from '../../../redux/appApi';
import { useAppDispatch } from '../../../redux/store';
import { SelectItem } from '../../types/types';
import { selectSelItem, selectSelItems, setSelectItem } from '../../../redux/selectSlice';


export const SelectWrap = () => {

  const selItem = useSelector(selectSelItem);
  const cites = useSelector(selectSelItems);
  const theme = useSelector(selectCurrentTheme);
  const dispatch = useAppDispatch();

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        theme === ThemeEnum.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === ThemeEnum.DARK ? '#fff' : '#000',
    }),
  };

  const handleOnChange = (item: SingleValue<SelectItem>) => {
    if (item)
    {
      dispatch(setSelectItem(item));
      dispatch(fetchGeoByCity(item.value));
    }
  }

  return (
    <Select
          defaultValue={cites[0]}
          styles={colourStyles}
          options={cites}
          onChange={handleOnChange}
          value={selItem}
    />
  )
}