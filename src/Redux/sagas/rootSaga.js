import {all} from 'redux-saga/effects';
import productSaga from './productSaga';
import productIdSaga from './productDetailSaga';
import watchAuthSaga from './authSaga';
import watchOtpSaga from './otpSaga';
import upload_ProductSaga from './productUploadSaga';
import searchProductWatcher from './searchProductSaga';
import fetchCategoryWatcher from './categorySaga';

export default function* rootSaga(){
    yield all([ 
        productSaga(), // we can add more sagas here in the root file
        productIdSaga(),
        watchAuthSaga(),
        watchOtpSaga(),
        upload_ProductSaga(),
        searchProductWatcher(),
        fetchCategoryWatcher(),
    ]);
}