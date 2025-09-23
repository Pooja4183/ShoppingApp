import {call,put, takeLatest} from "redux-saga/effects";
import {fetchProductSuccess,fetchProductFailure, } from "../actions/productFetchActions"; 
import {FETCH_PRODUCT_REQUEST} from '../actions/types'

function* fetchProductSaga(){

    try{
        const response = yield call(()=>
        fetch("http://localhost:5000/api/products/"));
        const data = yield response.json();
        yield put(fetchProductSuccess(data.data));

    } catch (error){
        yield put(fetchProductFailure(error.message));

    }
}

function* productSaga(){
    yield takeLatest( FETCH_PRODUCT_REQUEST,fetchProductSaga);
}

export default productSaga