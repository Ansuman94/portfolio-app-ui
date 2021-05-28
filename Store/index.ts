import reducer from "../redux/reducers";
import { applyMiddleware, createStore } from "redux";
import rootSaga from "../redux/saga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleWare = createSagaMiddleware();
const Store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);
export default Store;
