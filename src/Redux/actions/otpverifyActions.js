import {
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAIL,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL
 
} from "./types";

export const sendOtpRequest=(payload)=>({
    type: SEND_OTP_REQUEST,
    payload,

});

export const sendOtpSuccess=(payload)=>({
  type:SEND_OTP_SUCCESS,
  payload
});

export const sendOtpFail =(payload)=>({
type:SEND_OTP_FAIL,
payload,
});

export const verifyOtpRequest =(payload)=>({
  type:VERIFY_OTP_REQUEST,
  payload,

});

export const verifyOtpSuccess = (payload)=>({
  type:VERIFY_OTP_SUCCESS,
  payload,
});

export const verifyOtpFail=(payload)=>({
  type:VERIFY_OTP_FAIL,
  payload,
});

