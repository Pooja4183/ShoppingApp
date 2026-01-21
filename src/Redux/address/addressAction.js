import { ADDRESS_LIST_REQUEST,ADDRESS_LIST_SUCCESS,ADDRESS_LIST_FAILURE } from "./addresType";

// Request: user can see address list
export const fetchAddressRequest = () => ({
  type: ADDRESS_LIST_REQUEST,

});

// Success: backend returns results
export const fetchAddressSuccess = (addressList) => ({
  type:ADDRESS_LIST_SUCCESS,
  payload: addressList, // addressList = array of address list
});

// Failure: backend fails
export const fetchAddressFailure = (error) => ({
  type: ADDRESS_LIST_FAILURE,
  payload:{message:error} ,
});
