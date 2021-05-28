export const CHANGE_THEME = "CHANGE_THEME";
export const GET_DATA = "GET_DATA";
export const RECEIVED_DATA = "RECEIVED_DATA";

export interface IhandleThemeChange {
  type: typeof CHANGE_THEME;
}

export interface IGetData {
  type: typeof GET_DATA;
}
export interface IReceivedData {
  type: typeof RECEIVED_DATA;
  payload: any;
}

export type ICommonActions = IhandleThemeChange | IGetData | IReceivedData;
