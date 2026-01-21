import { takeLatest, call, put } from "redux-saga/effects";
import { createOrderSuccess, createOrderFailure } from "./orderAction";
import { CREATE_ORDER_REQUEST } from "./OrderTypes";
import {createOrderApi} from "../../service/orderApi";

function* createOrderSaga(action) {

  try {
    const data = yield call(createOrderApi, action.payload);

        console.log("from order saga:",data)
    yield put(createOrderSuccess(data.data));
   
  } catch (error) {
    yield put(createOrderFailure( error.response?.data?.message || error.message));
  }
};

function* order_WatcherSaga (){
  yield  takeLatest(CREATE_ORDER_REQUEST,createOrderSaga);
}

export default order_WatcherSaga;

