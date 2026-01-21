import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  RESET_ORDER_STATE,
} from "./OrderTypes";

export const createOrderRequest = (payload) => ({
  type: CREATE_ORDER_REQUEST,
  payload,
});

export const createOrderSuccess = (payload) => ({
  type: CREATE_ORDER_SUCCESS,
  payload,
});

export const createOrderFailure = (error) => ({
  type: CREATE_ORDER_FAILURE,
  payload:error,
});

export const resetOrderState = ()=>({
  type:RESET_ORDER_STATE,
})