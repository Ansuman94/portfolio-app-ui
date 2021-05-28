import { all } from "redux-saga/effects";
import actionWatcherCommon from "./sagaCommon";
export default function*() {
  yield all([actionWatcherCommon()]);
}
