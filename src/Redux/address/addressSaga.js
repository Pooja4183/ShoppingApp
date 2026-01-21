import { put, call, takeLatest } from "redux-saga/effects";
import { ADDRESS_LIST_REQUEST } from "./addresType";
import {
  fetchAddressSuccess,
  fetchAddressFailure
} from "./addressAction";

// import useFetch from "../../CustomHooks.js/useFetch"; 

function* fetchAddressListSaga(action) {
  try {
    const  jwtToken  = localStorage.getItem("token");

    const response = yield call(() =>
      // useFetch(`app-category/${categoryName}`)
      fetch(`${process.env.REACT_APP_BASE_URL}/address/`,{
        headers:{
          Authorization:`Bearer ${jwtToken}`
        }
      })
    );
    const data = yield response.json();
console.log("from the address saga:",data.data)
    yield put(fetchAddressSuccess(data.data));
  } catch (error) {
    yield put(fetchAddressFailure(error.message));
  }
}

function* fetchAddressListWatcher() {
  yield takeLatest(ADDRESS_LIST_REQUEST, fetchAddressListSaga);
}

export default fetchAddressListWatcher;
