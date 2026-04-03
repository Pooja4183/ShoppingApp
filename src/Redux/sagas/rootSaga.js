import {all} from 'redux-saga/effects';
import productSaga from '../Products/productSaga';
import productIdSaga from '../productDetail/productDetailSaga';
import watchAuthSaga from '../auth/authSaga';
import watchOtpSaga from '../otp/otpSaga';
import upload_ProductSaga from '../uploadProduct/productUploadSaga';
import fetchCategoryWatcher from '../category/categorySaga';
import filterCategoryWatcher from '../filteredCategory/filterCategorySaga';
import sidebarFilterWatcher from '../sidebarFilters/sidebarFilterSaga';
import fetchAddressListWatcher from '../address/addressSaga';
import order_WatcherSaga from '../order/orderSaga';
import paymentWatcherSaga from '../payment/payment.saga';
import { watchOrderList } from "../orderList/orderListSaga";

export default function* rootSaga(){
    yield all([ 
        productSaga(), // we can add more sagas here in the root file
        productIdSaga(),
        watchAuthSaga(),
        watchOtpSaga(),
        upload_ProductSaga(),
        // fetchCategoryWatcher(),
        // filterCategoryWatcher(),
        sidebarFilterWatcher(),
        fetchAddressListWatcher(),
        order_WatcherSaga(),
        paymentWatcherSaga(),
         watchOrderList(),


    ]);
}