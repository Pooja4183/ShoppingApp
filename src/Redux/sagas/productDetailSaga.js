import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_PRODUCT_ID_REQUEST, fetchProductIdSuccess, fetchProductIdFailure, } from "../actions/productDetailAction";

function* fetchProductIdSaga(action) {

    try {

        const response = yield call(() =>
            fetch(`https://fakestoreapi.com/products/${action.payload}`));
        const data = yield response.json();
        yield put(fetchProductIdSuccess(data));

    } catch (error) {
        yield put(fetchProductIdFailure(error.message));

    }
}

function* productIdSaga() {
    yield takeLatest(FETCH_PRODUCT_ID_REQUEST, fetchProductIdSaga);
}

export default productIdSaga