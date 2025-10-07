import {
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
} from "./types";

// Request: user types a query
export const searchProductRequest = (query) => ({
  type: SEARCH_PRODUCT_REQUEST,
  payload: { query },
});

// Success: backend returns results
export const searchProductSuccess = (results) => ({
  type: SEARCH_PRODUCT_SUCCESS,
  payload: results, // // results = array of products
});

// Failure: backend fails
export const searchProductFailure = (error) => ({
  type: SEARCH_PRODUCT_FAILURE,
  payload:{message:error} ,
});
