import {UPLOAD_PRODUCT_REQUEST,UPLOAD_PRODUCT_SUCCESS,UPLOAD_PRODUCT_FAILURE,} from './types';

//Action creators
export const uploadProductRequest =(productData)=>({
    type:  UPLOAD_PRODUCT_REQUEST,
    payload: productData,
});

export const uploadProductSuccess = (product)=>({
    type: UPLOAD_PRODUCT_SUCCESS,
    payload: product,
});

export const uploadProductFailure = (error)=>({
    type: UPLOAD_PRODUCT_FAILURE,
    payload: error,
});

