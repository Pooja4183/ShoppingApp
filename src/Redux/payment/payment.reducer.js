import {
  INITIATE_PAYMENT,
  PAYMENT_FAILED,
  RESET_PAYMENT,
  PAYMENT_SUCCESS,
  PAYMENT_COMPLETE
} from "./payment.types";

const initialState = {
  error: null,
  status: "idle",
  payment:null,
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_PAYMENT:
      return {
        ...state,
        error: null,
        status: "processing",
      };
    case PAYMENT_SUCCESS:
      return {
        ...state,
        error: null,
        status: "success",
        payment:action.payload,
      };

      case PAYMENT_COMPLETE:
      return {
        ...state,
        error: null,
        status: "complete",
        payment:action.payload,
      };

    case PAYMENT_FAILED:
      return {
        ...state,
        error: action.payload,
        status: "failed",
      };

    case RESET_PAYMENT:
      return  initialState;

    default:
      return state;
  }
};
