import * as commonTypes from "../types/commonTypes";
export interface ICommonStateType {
  theme: boolean;
  isLoading: boolean;
  data: any;
}
const initialState: ICommonStateType = {
  theme: false,
  isLoading: false,
  data: []
};
export default function(
  state: ICommonStateType = initialState,
  action: commonTypes.ICommonActions
): ICommonStateType {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: !state.theme
      };
    case "GET_DATA":
      console.log("getting data");
      return {
        ...state,
        isLoading: true
      };
    case "RECEIVED_DATA":
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    default:
      return state;
  }
}
