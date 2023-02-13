import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { changeCssRootVariables } from "../helper/ChangeCssRootVariables";
import { selectPopupIsActive } from "../redux/popupSlice";
import { selectCurrentTheme } from "../redux/themeSlice";
import { Header } from "../shared/Header/Header";
import { Popup } from "../shared/Popup/Popup";

export const Layout = () => {
  const popupIsActive = useSelector(selectPopupIsActive);
  const theme = useSelector(selectCurrentTheme);

  useEffect(() => {
    if (theme) {
      changeCssRootVariables(theme);
    }
  }, [theme]);

  return (
    <div className="global-container">
      {popupIsActive && <Popup />}
      <div className="container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
