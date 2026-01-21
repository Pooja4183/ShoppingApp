import {call,put, takeLatest} from "redux-saga/effects";
import {fetchProductSuccess,fetchProductFailure, } from "./productFetchActions"; 
import {FETCH_PRODUCT_REQUEST} from './types'

function* fetchProductSaga(){

    try{
        const response = yield call(()=>
        fetch(`${process.env.REACT_APP_BASE_URL}/products/`));
        const data = yield response.json();
        yield put(fetchProductSuccess(data.data));
        console.log("from product saga:", data)

    } catch (error){
        yield put(fetchProductFailure(error.message));

    }
}

function* productSaga(){
    yield takeLatest( FETCH_PRODUCT_REQUEST,fetchProductSaga);
}

export default productSaga