import {
  SEND_OTP_REQUEST,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAIL,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAIL,
  RESET_OTP,
} from "../actions/types";


const initialState = {
  loading: false,
  error: null,
  success: false,
  otpSent: false,
  otpVerified: false,
  email:"",
};
const OtpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_OTP_REQUEST:
      return { ...state, loading: true, error: null };

    case SEND_OTP_SUCCESS:
      return { ...state, loading: false, otpSent: true, success:true, email:action.payload.email };
    case SEND_OTP_FAIL:
      return { ...state, loading: false, error: action.payload };

    case VERIFY_OTP_REQUEST:
      return { ...state, loading: true, error: null };

    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        otpVerified: true,
        error:null
      };
    case VERIFY_OTP_FAIL:
      return { ...state, loading: false, error: action.payload,otpVerified:false };

      case RESET_OTP:
         localStorage.removeItem("userEmail");
        return{...initialState}

    default:
      return state;
  }
};

export default OtpReducer;
