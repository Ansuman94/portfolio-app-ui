import { combineReducers } from "redux";
import commonState, { ICommonStateType } from "../reducers/CommonReducer";
export interface IState {
  commonState: ICommonStateType;
}
const allReducres = combineReducers({
  commonState
});
export default allReducres;
