import {combineReducers} from 'redux';
import productReducer from './productReducer';
import product_IdReducer from './product_IdReducer';
import cartReducer from './cartReducer';
import wishlistReducer from './wishlistReducer';
import authReducer from './authReducer';
import OtpReducer from './OtpReducer';
import searchProductReducer from './searchProductReducer';
import fetchCategoryReducer from './categoryReducer'
import filterCategoryReducer from './filterCategoryReducer';
import sidebarFiltersReducer from './sidebarFiltersReducer';

const rootReducer =combineReducers({
    products:productReducer, // this becomes state.prodcuts
    product:product_IdReducer,
    cart:cartReducer,
    wishList:wishlistReducer,
    auth:authReducer,
    otp:OtpReducer,
    searchResult:searchProductReducer,
    categoryListProduct:fetchCategoryReducer,
    filterdProduct:filterCategoryReducer,
    filters:sidebarFiltersReducer,
    


});

export default rootReducer;