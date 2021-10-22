import { fork } from "redux-saga/effects";
import HomeSaga from "../pages/Home/saga";

export default function* root() {
  yield fork(HomeSaga);
}
