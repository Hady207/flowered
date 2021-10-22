import { put, call, takeLatest } from "redux-saga/effects";
import { getHomeData } from "../../services/home";
import { HomeTypes, HomeActions } from "./reducer";

function* fetchHomeSaga() {
  try {
    const res = yield call(getHomeData);
    yield put(HomeActions.homeDataSuccess(res?.data));
  } catch (error) {
    yield put(HomeActions.homeDataFail(error.message));
  }
}

export default function* loginRootWacher() {
  yield takeLatest(HomeTypes.REQUEST_HOME_DATA, fetchHomeSaga);
}
