import { call, put, takeLatest } from "redux-saga/effects";
import {
  uploadProductSuccess,
  uploadProductFailure,
} from "./productUploadActions";
import { UPLOAD_PRODUCT_REQUEST } from "./productUploadTypes";
import { uploadProductApi } from "../../service/productApi";

function* uploadProductSaga(action) {
  try {
    // call() handles async function

    const data = yield call(uploadProductApi, action.payload);

    yield put(uploadProductSuccess(data));
  } catch (error) {
    yield put(uploadProductFailure(error.message));
  }
}

function* upload_ProductSaga() {
  yield takeLatest(UPLOAD_PRODUCT_REQUEST, uploadProductSaga);
}

export default upload_ProductSaga;
