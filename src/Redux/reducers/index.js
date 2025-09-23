import {combineReducers} from 'redux';
import productReducer from './productReducer';
import product_IdReducer from './product_IdReducer';
import cartReducer from './cartReducer';
import wishlistReducer from './wishlistReducer';
import authReducer from './authReducer';
import OtpReducer from './OtpReducer';

const rootReducer =combineReducers({
    products:productReducer, // this becomes state.prodcuts
    product:product_IdReducer,
    cart:cartReducer,
    wishList:wishlistReducer,
    auth:authReducer,
    otp:OtpReducer,

});

export default rootReducer;