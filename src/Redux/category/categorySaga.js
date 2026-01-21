import { put, call, takeLatest } from "redux-saga/effects";
import { FETCH_CATEGORY_REQUEST } from "./types";
import {
  fetchCategorySuccess,
  fetchCategoryFailure,
} from "./categoryAction";

// import useFetch from "../../CustomHooks.js/useFetch"; 

function* fetchCategorySaga(action) {
  try {
    const  categoryName  = action.payload; // destructure payload

    const response = yield call(() =>
      // useFetch(`app-category/${categoryName}`)
      fetch(`${process.env.REACT_APP_BASE_URL}/app-category/${categoryName}`)
    );
    const data = yield response.json();

    yield put(fetchCategorySuccess(data.data));
  } catch (error) {
    yield put(fetchCategoryFailure(error.message));
  }
}

function* fetchCategoryWatcher() {
  yield takeLatest(FETCH_CATEGORY_REQUEST, fetchCategorySaga);
}

export default fetchCategoryWatcher;
