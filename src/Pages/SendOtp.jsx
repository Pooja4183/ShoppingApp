// // Formik and Yup validation
// import { useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { sendOtpRequest } from "../Redux/actions/otpverifyActions";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// function SendOtp() {
//   const dispatch = useDispatch();
//   const inputRef = useRef(); // used for focusing the input on mount
//   const navigate = useNavigate();
//   // access the auth state from the redux
//   const { error } = useSelector((state) => state.otp);

//   // otp schema

//   const otpSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//   });

//   // ✅ Dynamically set form mode based on the current route
//   //   const isSignup = location.pathname === "/signup";

//   useEffect(() => {
//     inputRef.current?.focus();
//   }, [navigate]);

  

//   return (
//     <div className="flex justify-center items-center h-[90vh] bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         {/* Replaced usestate + handlechange with Formik's form state */}
//         <Formik
//           initialValues={{ email: localStorage.getItem("userEmail") || ""  }}
//           validationSchema={otpSchema}
//           onSubmit={(values, { setSubmitting }) => {
//             const email = values.email.trim();
//             console.log("should get the email here:",email);
//             // replaced the manual handelsubmit logic
//             // Redirect only after successfull otp verification
//             setSubmitting(true);
//             dispatch(sendOtpRequest({ email})); // dispatching redux action function
            
//              navigate("/verify-otp");
//           }}
//         >
//           {/* Formik provides errors, touched etc here */}
//           {({ errors, touched }) => (
//             <Form>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <Field
//                   type="email"
//                   name="email"
//                   className="w-full border rounded px-3 py-2 focus:outline-pink-500"
//                   value={localStorage.getItem("userEmail")|| ""}
//                   readOnly
                 
//                 />
//                 <ErrorMessage
//                   name="email"
//                   component="p"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

//               {/* Redux error message (not fromik)  */}
//               {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
//               {/* 🔁 Submit button triggers Formik's onSubmit */}

//               <button
//                 type="submit"
//                 className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded font-semibold "
//               >
//                 Send OTP
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default SendOtp;
