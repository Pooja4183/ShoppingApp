import {all} from 'redux-saga/effects';
import productSaga from './productSaga';
import productIdSaga from './productDetailSaga';

export default function* rootSaga(){
    yield all([ 
        productSaga(), // we can more sagas here in the root file
        productIdSaga()
    ]);
}