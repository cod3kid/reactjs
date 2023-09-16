import { all } from "redux-saga/effects";
import UserSaga from "./users";

export default function* rootSaga() {
  yield all([...UserSaga]);
}
