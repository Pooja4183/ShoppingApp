import {
 FILTERED_CATEGORY_REQUEST,
 FILTERED_CATEGORY_SUCCESS,
 FILTERED_CATEGORY_FAILURE
} from "./types";

const initialState = {
  filterdProduct: [],
  loading: true,
  error: null,
};

const filterCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,

      };

    case FILTERED_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        filterdProduct: action.payload, // update filtered results
      };

    case FILTERED_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        filterdProduct: [], // clear results on failure
      };

    default:
      return state;
  }
};

export default filterCategoryReducer;
