import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as types from "./orderListTypes";

function* fetchOrderListSaga() {
  try {

    // Token handling (important for protected route)
    const token = localStorage.getItem("token");

    const response = yield call(() =>
      axios.get("http://localhost:5000/api/order/my-orders", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    );

    yield put({
      type: types.FETCH_ORDER_LIST_SUCCESS,
      payload: response.data.data,
    });

  } catch (error) {

    yield put({
      type: types.FETCH_ORDER_LIST_FAILURE,
      payload: error.response?.data?.message || error.message,
    });

  }
}

export function* watchOrderList() {
  yield takeLatest(
    types.FETCH_ORDER_LIST_REQUEST,
    fetchOrderListSaga
  );
}
