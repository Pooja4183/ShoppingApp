import { put, call, takeLatest } from "redux-saga/effects";
import { FETCH_CATEGORY_REQUEST } from "../actions/types";
import {
  fetchCategorySuccess,
  fetchCategoryFailure,
} from "../actions/categoryAction";

function* fetchCategorySaga(action){
  try {
    const response = yield call(() => 
      fetch(`http://localhost:5000/api/app-category/${action.payload}`)
    );
    const data = yield response.json();
    console.log('category list Saga', data)
    yield put(fetchCategorySuccess(data.data));
  } catch (error) {
    yield put(fetchCategoryFailure(error.message));
  }
}

function* fetchCategoryWatcher() {
  yield takeLatest(FETCH_CATEGORY_REQUEST, fetchCategorySaga);
}

export default fetchCategoryWatcher;
