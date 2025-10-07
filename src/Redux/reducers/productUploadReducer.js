import {
  UPLOAD_PRODUCT_REQUEST,
  UPLOAD_PRODUCT_SUCCESS,
  UPLOAD_PRODUCT_FAILURE,
} from "../actions/types";

const intialState = {
  loading: false,
  success: false,
  error: null,
};

const uploadProductReducer = (state = intialState, action) => {
  switch (action.type) {
    case UPLOAD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case UPLOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        success:true,
      };

    case UPLOAD_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default uploadProductReducer;
