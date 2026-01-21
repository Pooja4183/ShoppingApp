import { put, call, takeLatest } from "redux-saga/effects";
import { SEARCH_PRODUCT_REQUEST } from "./searchProductTypes";
import {
  searchProductFailure,
  searchProductSuccess,
} from "./searchProductAaction";

function* searchProductSaga(action) {
  try {
    const response = yield call(() => 
      fetch(
        `${process.env.REACT_APP_BASE_URL}/products/search?query=${action.payload.query}`
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
