import {
 FETCH_CATEGORY_REQUEST,
 FETCH_CATEGORY_SUCCESS,
 FETCH_CATEGORY_FAILURE
} from "./types";

// Request: user clicks on category (men, women, kids etc)
export const fetchCategoryRequest = (categoryName) => ({
  type: FETCH_CATEGORY_REQUEST,
  payload: categoryName,
});

// Success: backend returns results
export const fetchCategorySuccess = (CategoryListProduct) => ({
  type:FETCH_CATEGORY_SUCCESS,
  payload: CategoryListProduct, // CategoryListProduct = array of filterd category related products
});

// Failure: backend fails
export const fetchCategoryFailure = (error) => ({
  type: FETCH_CATEGORY_FAILURE,
  payload:{message:error} ,
});
