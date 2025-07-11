import {call,put, takeLatest} from "redux-saga/effects";
import { FETCH_PRODUCT_REQUEST,fetchProductSuccess,fetchProductFailure, } from "../actions/productActions"; 

function* fetchProductSaga(){

    try{

        const response = yield call(()=>
        fetch("https://fakestoreapi.com/products"));
        const data = yield response.json();
        yield put(fetchProductSuccess(data));

    } catch (error){
        yield put(fetchProductFailure(error.message));

    }
}

function* productSaga(){
    yield takeLatest( FETCH_PRODUCT_REQUEST,fetchProductSaga);
}

export default productSaga