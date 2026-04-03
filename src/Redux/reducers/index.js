import {combineReducers} from 'redux';
import productReducer from '../Products/productReducer';
import product_IdReducer from '../productDetail/product_IdReducer';
import cartReducer from '../cart/cartReducer';
import wishlistReducer from '../wishList/wishlistReducer';
import authReducer from '../auth/authReducer';
import OtpReducer from '../otp/OtpReducer';
import fetchCategoryReducer from '../category/categoryReducer'
import filterCategoryReducer from '../filteredCategory/filterCategoryReducer';
import sidebarFiltersReducer from '../sidebarFilters/sidebarFiltersReducer';
import fetchAddressListReducer from '../address/addressReducer';
import orderReducer from '../order/orderReducer';
import { paymentReducer } from '../payment/payment.reducer';
import orderListReducer from "../orderList/orderListReducer";


const rootReducer =combineReducers({
    products:productReducer, // this becomes state.prodcuts
    product:product_IdReducer,
    cart:cartReducer,
    wishList:wishlistReducer,
    auth:authReducer,
    otp:OtpReducer,
    categoryListProduct:fetchCategoryReducer,
    filterdProduct:filterCategoryReducer,
    filters:sidebarFiltersReducer,
    addressList:fetchAddressListReducer,
    order:orderReducer,
    payment:paymentReducer,
    orderList: orderListReducer,

});

export default rootReducer;