import {
 FILTERED_CATEGORY_REQUEST,
 FILTERED_CATEGORY_SUCCESS,
 FILTERED_CATEGORY_FAILURE

} from "./types";

// Request: user select (price, brand, color etc)
export const filteredCategoryRequest  = (categoryName,filters) => ({
  type: FILTERED_CATEGORY_REQUEST,
  payload: {categoryName, filters},
});

export const filteredCategorySuccess  = (categoryName,filters) => ({
  type: FILTERED_CATEGORY_SUCCESS,
  payload: {categoryName, filters},
});

export const filteredCategoryFailure  = (categoryName,filters) => ({
  type: FILTERED_CATEGORY_FAILURE,
  payload: {categoryName, filters},
});

