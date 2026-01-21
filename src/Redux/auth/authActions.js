import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

export const signupRequest=(payload)=>({
    type: SIGNUP_REQUEST,
    payload,

});

export const signupSuccess=(payload)=>({
  type:SIGNUP_SUCCESS,
  payload
});

export const signupFail =(payload)=>({
type:SIGNUP_FAIL,
payload,
});

export const loginRequest =(payload)=>({
  type:LOGIN_REQUEST,
  payload,

});

export const loginSuccess = (payload)=>({
  type:LOGIN_SUCCESS,
  payload,
});

export const loginFail=(payload)=>({
  type:LOGIN_FAIL,
  payload,
});

export const logout=()=>({
  type:LOGOUT,
});