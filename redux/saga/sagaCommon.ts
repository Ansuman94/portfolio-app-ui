import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import Axios from "axios";

function* fetchData() {
  try {
    console.log("fetching data");
    Axios.defaults.headers.common[
      "Authorization"
    ] = `bearer ${localStorage.getItem("token")}`;
    const fetchedData = yield axios.get<any>(
      //"http://localhost:3001/api/portfolios"
      `${process.env.NEXT_PUBLIC_WEB_API_URL}portfolios`
    );
    const receivedData = fetchedData.data;
    yield put({
      type: "RECEIVED_DATA",
      payload: receivedData
    });
  } catch (e) {
    console.log("error", e);
  }
}
export default function* actionWatcherCommon() {
  yield takeEvery("GET_DATA", fetchData);
}
