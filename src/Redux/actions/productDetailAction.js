// Action type

export const FETCH_PRODUCT_ID_REQUEST = "FETCH_PRODUCT_ID_REQUEST";
export const FETCH_PRODUCT_ID_SUCCESS = "FETCH_PRODUCT_ID_SUCCESS";
export const FETCH_PRODUCT_ID_FAILURE = "FETCH_PRODUCT_ID_FAILURE";

//Action creators

export const fetchProductIdRequest =(id)=>({
    type:  FETCH_PRODUCT_ID_REQUEST,
    payload:id,
});

export const fetchProductIdSuccess = (product)=>({
    type: FETCH_PRODUCT_ID_SUCCESS,
    payload: product
});

export const fetchProductIdFailure = (error)=>({
    type: FETCH_PRODUCT_ID_FAILURE,
    payload: error,
});

