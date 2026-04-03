import {
  FETCH_ORDER_LIST_REQUEST,
  FETCH_ORDER_LIST_SUCCESS,
  FETCH_ORDER_LIST_FAILURE
} from "./orderListTypes";

const initialState = {
  loading: false,
  orders: [],
  error: null
};

const orderListReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_ORDER_LIST_REQUEST:
      return { ...state, loading: true };

    case FETCH_ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload
      };

    case FETCH_ORDER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default orderListReducer;
