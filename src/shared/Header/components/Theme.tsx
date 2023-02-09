import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectCurrentTheme, setTheme, ThemeEnum } from '../../../redux/themeSlice';
import { GlobalSvgSelector } from '../../../icons/global/GlobalSvgSelector';
import { changeCssRootVariables } from '../../../helper/ChangeCssRootVariables';
import { storage } from '../../../helper/Storage';

import s from '../Header.module.scss';

export const Theme = () => {
  const theme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch()

  useEffect(() => {
    storage.setItem('theme', theme);
  }, [ theme ])

  const handleChange = () => {
    const next = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK
    dispatch(setTheme(next))
    changeCssRootVariables(next);
  }

  return (
    <div className={s.change_theme} onClick={handleChange}>
        <GlobalSvgSelector id="change-theme" />
    </div>
  )
}