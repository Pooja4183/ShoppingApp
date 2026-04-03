import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  RESET_ORDER_STATE,
} from "./OrderTypes";

const initialState = {
  loading: false,
  success: false,
  order: null,
  error: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
        success: true,
        error: null,
      };

    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };

    case RESET_ORDER_STATE:
      return {
        loading: false,
        success: false,
        order: null,
        error: null,
      };

    default:
      return state;
  }
};

export default orderReducer;
