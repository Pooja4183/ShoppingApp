// Product Action type

export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";

//Action creators

export const fetchProductRequest =()=>({
    type:  FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (products)=>({
    type: FETCH_PRODUCT_SUCCESS,
    payload: products
});

export const fetchProductFailure = (error)=>({
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
});

