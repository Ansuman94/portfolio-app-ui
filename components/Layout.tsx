import { useSelector, useDispatch } from "react-redux";
import { IState } from "../redux/reducers";
import * as commonActions from "../redux/actions/CommonAction";

export default function Layout(layoutProps: any) {
  const commonState = useSelector((state: IState) => state.commonState);
  const dispatch = useDispatch();
  const dataTobeShown = JSON.stringify(commonState.data);
  return (
    <div>
      {/* {commonState.theme ? "light" : "dark"} */}
      <button onClick={() => dispatch(commonActions.getData())}>
        Get Data
      </button>
      {dataTobeShown}
    </div>
  );
}
