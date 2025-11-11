import { FILTERED_CATEGORY_REQUEST } from "../actions/types";
import { takeLatest, call, put } from "redux-saga/effects";
import {
  filteredCategorySuccess,
  filteredCategoryFailure,
} from "../actions/filterCategoryAction";

function* filterCategorySaga(action) {
  try {
    const { categoryName, filters } = action.payload;

    const query = new URLSearchParams(filters).toString();
    const response = yield call(() =>
      fetch(
        `http://localhost:5000/api/products/${categoryName}/filters?${query}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      )
    );

    const data = yield response.json();
   
    yield put(filteredCategorySuccess(data.data));
  } catch (error) {
    yield put(filteredCategoryFailure(error.message));
  }
}

function* filterCategoryWatcher() {
  yield takeLatest(FILTERED_CATEGORY_REQUEST, filterCategorySaga);
}

export default filterCategoryWatcher;
