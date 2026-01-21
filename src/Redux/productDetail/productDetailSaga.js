import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_PRODUCT_ID_REQUEST, fetchProductIdSuccess, fetchProductIdFailure, } from "./productDetailAction";

function* fetchProductIdSaga(action) {

    try {

        const response = yield call(() =>
            fetch(`${process.env.REACT_APP_BASE_URL}/products/${action.payload}`));
        const data = yield response.json();
         console.log("from the produt detail saga:", data.product)
        yield put(fetchProductIdSuccess(data.product));

    } catch (error) {
        yield put(fetchProductIdFailure(error.message));

    }
}

function* productIdSaga() {
    yield takeLatest(FETCH_PRODUCT_ID_REQUEST, fetchProductIdSaga);
}

export default productIdSaga