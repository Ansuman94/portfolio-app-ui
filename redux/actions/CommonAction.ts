import * as commonTypes from "../types/commonTypes";
export const handleTheme = (): commonTypes.IhandleThemeChange => {
  return {
    type: "CHANGE_THEME"
  };
};
export const getData = (): commonTypes.IGetData => {
  return {
    type: "GET_DATA"
  };
};
