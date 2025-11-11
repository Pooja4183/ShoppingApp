import { put, call, takeLatest } from "redux-saga/effects";
import { SIDEBAR_FILTERS_REQUEST } from "../actions/types";
import {
  sidebarFiltersSuccess,
 sidebarFiltersFailure ,
} from "../actions/sidebarFiltersAction";

function* sidebarFilterSaga(action) {
  try {
    const { categoryName } = action.payload; // destructure payload

    const response = yield call(() =>
      fetch(`http://localhost:5000/api/filters/`)
    );
    const data = yield response.json();

    console.log("all filter list Saga", data);
    yield put(sidebarFiltersSuccess(data.data));
  } catch (error) {
    yield put(sidebarFiltersFailure(error.message));
  }
}

function* sidebarFilterWatcher() {
  yield takeLatest(SIDEBAR_FILTERS_REQUEST, sidebarFilterSaga);
}

export default sidebarFilterWatcher;
