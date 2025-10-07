import {
  SEARCH_PRODUCT_REQUEST,
  SEARCH_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_FAILURE,
} from "../actions/types";

const initialState = {
  searchResult: [],
  loading: true,
  error: null,
};

const searchProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      

      };

    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        searchResult: action.payload, // update search results
      };

    case SEARCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        searchResult: [], // clear results on failure
      };

    default:
      return state;
  }
};

export default searchProductReducer;
