import { put, call, takeLatest } from "redux-saga/effects";
import { SEARCH_PRODUCT_REQUEST } from "../actions/types";
import {
  searchProductFailure,
  searchProductSuccess,
} from "../actions/searchProductAaction";

function* searchProductSaga(action) {
  try {
    const response = yield call(() => 
      fetch(
        `http://localhost:5000/api/products/search?query=${action.payload.query}`
      )
    );

    const data = yield response.json();
    yield put(searchProductSuccess(data.data));
  } catch (error) {
    yield put(searchProductFailure(error.message));
  }
}

function* searchProductWatcher() {
  yield takeLatest(SEARCH_PRODUCT_REQUEST, searchProductSaga);
}

export default searchProductWatcher;
