import {
ADDRESS_LIST_REQUEST,
ADDRESS_LIST_SUCCESS,
ADDRESS_LIST_FAILURE
} from "./addresType";

let token = localStorage.getItem('token');

const initialState = {
  addressList: [],
  loading: true,
  error: null,
  token
};

const fetchAddressListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDRESS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,

      };

    case ADDRESS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        addressList: action.payload, // update search results
      };

    case ADDRESS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        addressList: [], // clear results on failure
      };

    default:
      return state;
  }
};

export default fetchAddressListReducer;
