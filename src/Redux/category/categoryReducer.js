import {
 FETCH_CATEGORY_REQUEST,
 FETCH_CATEGORY_SUCCESS,
 FETCH_CATEGORY_FAILURE,
} from "./types";

const initialState = {
  categoryListProduct: [],
  loading: true,
  error: null,
};

const fetchCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,

      };

    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        categoryListProduct: action.payload, // update search results
      };

    case FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        categoryListProduct: [], // clear results on failure
      };

    default:
      return state;
  }
};

export default fetchCategoryReducer;
