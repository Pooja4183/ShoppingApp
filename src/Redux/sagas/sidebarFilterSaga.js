import { put, call, takeLatest } from "redux-saga/effects";
import { SIDEBAR_FILTERS_REQUEST } from "../actions/types";
import {
  sidebarFiltersSuccess,
 sidebarFiltersFailure ,
} from "../actions/sidebarFiltersAction";

function* sidebarFilterSaga(action) {
   //console.log("Saga triggered ✅", action);// check if it triggers
  try {
    const { categoryName } = action.payload; // destructure payload

    const response = yield call(() =>
      fetch(`http://localhost:5000/api/filters/${categoryName}`)
    );
    const data = yield response.json();

    yield put(sidebarFiltersSuccess(data.data));
  } catch (error) {
    yield put(sidebarFiltersFailure(error.message));
  }
}

function* sidebarFilterWatcher() {
  yield takeLatest(SIDEBAR_FILTERS_REQUEST, sidebarFilterSaga);
}

export default sidebarFilterWatcher;
