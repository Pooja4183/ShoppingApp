import {FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE} from './types'

//Action creators
export const fetchProductRequest =(action)=>({
    type:  FETCH_PRODUCT_REQUEST,
    payload: action
});

export const fetchProductSuccess = (products)=>({
    type: FETCH_PRODUCT_SUCCESS,
    payload: products
});

export const fetchProductFailure = (error)=>({
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
});

