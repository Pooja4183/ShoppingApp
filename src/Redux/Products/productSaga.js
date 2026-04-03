import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProductSuccess,
  fetchProductFailure,
} from "./productFetchActions";
import { FETCH_PRODUCT_REQUEST } from "./types";

function* fetchProductSaga(action) {
  console.log("Procut Saga...", action);
  try {
    const queryParams = new URLSearchParams();
    const { category, brand, color, search, priceMin, priceMax, sort, page } =
      action.payload || {};

    if (category) queryParams.append("category", category);
    if (brand) queryParams.append("brand", brand);
    if (color) queryParams.append("color", color);
    if (priceMin) queryParams.append("priceMin", priceMin);
    if (priceMax) queryParams.append("priceMax", priceMax);
    if (sort) queryParams.append("sort", sort);
    if (search) queryParams.append("search", search);
    if (page) queryParams.append("page", page);
    queryParams.append("limit", 10);

    const url = `${process.env.REACT_APP_BASE_URL}/products?${queryParams.toString()}`;
    console.log("API URL", url);

    const response = yield call(fetch, url);
    const data = yield response.json();
    yield put(
      fetchProductSuccess({ products: data.data, pagination: data.pagination }),
    );

    console.log("Search value:", search);
    console.log("from product saga:", data);
    console.log("Pagination Data from redux:", data.pagination);
  } catch (error) {
    yield put(fetchProductFailure(error.message));
  }
}

function* productSaga() {
  yield takeLatest(FETCH_PRODUCT_REQUEST, fetchProductSaga);
}

export default productSaga;
