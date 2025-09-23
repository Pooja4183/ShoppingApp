import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "../../api/apiClient";
import {
  signupSuccess,
  signupFail,
  loginSuccess,
  loginFail,
} from "../actions/authActions";
import {
  SIGNUP_REQUEST,
  LOGIN_REQUEST,
  LOGOUT,
} from "../actions/types";

// Signup worker
function* signupSaga(action) {
  try {

    const response = yield call(axios.post, "/users/register", action.payload);
    localStorage.setItem("userEmail",response.data.email);
    yield put(signupSuccess(response.data)); // contains {message,user}
   
  } catch (error) {
    const message = error.response?.data?.message || "Signup Failed";
    yield put(signupFail(message));
  }
}

// Login worker
function* loginSaga(action) {
  try {
    const response = yield call(axios.post, "/auth/login", action.payload);
    localStorage.setItem("token", response.data.token);
    yield put(loginSuccess(response.data));
    
  } catch (error) {
    const message = error.response?.data?.message || "Login failed";
    yield put(loginFail(message));
  }
}

function* logoutSaga() {
  yield call([localStorage, "removeItem"], "token");
  yield call([localStorage,"removeItem"],"userEmail")
}

// Watcher saga
function* watchAuthSaga() {
  yield all([
    takeLatest(SIGNUP_REQUEST, signupSaga),
    takeLatest(LOGIN_REQUEST, loginSaga),
    takeLatest(LOGOUT, logoutSaga),
  ]);
}

export default watchAuthSaga;
