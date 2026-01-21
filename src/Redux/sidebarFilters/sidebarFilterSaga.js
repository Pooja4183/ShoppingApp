import { put, call, takeLatest } from "redux-saga/effects";
import { SIDEBAR_FILTERS_REQUEST } from "./sidebarFiltersType";
import {
  sidebarFiltersSuccess,
 sidebarFiltersFailure ,
} from "./sidebarFiltersAction";

function* sidebarFilterSaga(action) {
   //console.log("Saga triggered ✅", action);// check if it triggers
  try {
    const { categoryName } = action.payload; // destructure payload

    const response = yield call(() =>
      fetch(`${process.env.REACT_APP_BASE_URL}/filters/${categoryName}`)
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
