import {
  fork,
  take,
  call,
  takeLatest,
  takeEvery,
  put,
  delay,
  select,
} from "redux-saga/effects";
import * as types from "./../constants/index";
import {
  fetchListData,
  addtaskData,
  deleteData,
  updateData,
} from "./../apis/index";

import {
  fetchdatasucces,
  fetchdatafail,
  showloading,
  hideloading,
  addtasksuccess,
  addtaskfail,
  deletetasksuccess,
  deletetaskfail,
  updatetasksuccess,
  updatetaskfail,
} from "../actions";
import { STATUS_CODE } from "../constants/status";
import { hidemodal } from "../actions/modal";

function* addtasksaga({ payload }) {
  const { roomName } = payload;

  yield put(showloading());
  const resp = yield call(addtaskData, roomName);
  const { status, data } = resp;

  if (status === STATUS_CODE.SUCCESS) {
    yield put(addtasksuccess(data));
  } else {
    yield put(addtaskfail(data));
  }
  yield delay(1000);
  yield put(hideloading());
}

function* deletesaga({ payload }) {
  const { id } = payload;
  yield put(showloading());
  const res = yield call(deleteData, id);
  const { status, data } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(deletetasksuccess(id));
    yield put(hidemodal());
  } else {
    yield put(deletetaskfail(data));
  }

  yield delay(1000);
  yield put(hideloading());
}

function* updatesaga({ payload }) {
  const { upData } = payload;
  const roomEditing = yield select((state) => state.task.roomEditing);
  yield put(showloading());
  const res = yield call(updateData, upData, roomEditing.id);
  const { data, status } = res;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(updatetasksuccess(data));
    yield put(hidemodal());
  } else {
    yield put(updatetaskfail(data));
  }
  yield delay(1000);
  yield put(hideloading());
}

function* fetchListTaskSaga() {
  while (true) {
    yield take(types.FETCH_DATA);
    yield put(showloading());
    yield delay(1000);
    const res = yield call(fetchListData);
    var { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchdatasucces(data));
    } else {
      yield put(fetchdatafail(data));
    }
    yield put(hideloading());
  }
}

function* rootsaga() {
  yield fork(fetchListTaskSaga);
  yield takeLatest(types.ADD_DATA, addtasksaga);
  yield takeEvery(types.DELETE_DATA, deletesaga);
  yield takeLatest(types.UPDATE_DATA, updatesaga);
}

export default rootsaga;
