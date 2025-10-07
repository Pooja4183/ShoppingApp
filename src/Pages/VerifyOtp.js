// Formik and Yup validation
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtpRequest } from "../Redux/actions/otpverifyActions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {RESET_OTP} from '../Redux/actions/types'

function VerifyOtp() {
  const dispatch = useDispatch();
  const { otpVerified,email } = useSelector((state) => state.otp);
  const userEmail = localStorage.getItem("userEmail");

  const inputRef = useRef(); // used for focusing the input on mount
  const navigate = useNavigate();

  // otp schema
  const otpSchema = Yup.object({
    otp: Yup.string()
      .matches(/^\d{6}$/, "Invalid OTP")
      .required("Otp is required"),
  });
  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // navigate when otp is verified
  useEffect(() => {
    if(otpVerified){ 
      navigate("/login");
      dispatch({type:RESET_OTP})
    }
   
  }, [otpVerified, navigate, dispatch]);

  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        {/* <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">
          {isSignup ? "Create an Account" : "Login to Your Account"}
        </h2> */}
        {/* Replaced usestate + handlechange with Formik's form state */}
        <Formik
          initialValues={{ otp: "" }}
          validationSchema={otpSchema}
          onSubmit={(values) => {
           
            // replaced the manual handelsubmit logic
            // Redirect only after successfull otp verification
            
            console.log("Email before OTP verification:", email);

            dispatch(verifyOtpRequest({email:userEmail, otp:values.otp})); // dispatching redux action function
             console.log("should get the OTP here:", values);
          }}
        >
          {/* Formik provides errors, touched etc here */}
          {({ errors, touched }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">OTP</label>
                <Field
                  // ref={!isSignup ? inputRef : null} // autofocus for login
                  type="text"
                  name="otp"
                  className="w-full border rounded px-3 py-2 focus:outline-pink-500"
                />
                <ErrorMessage
                  name="otp"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded font-semibold "
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default VerifyOtp;
