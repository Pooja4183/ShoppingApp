// Formik and Yup validation
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest, loginRequest } from "../Redux/actions/authActions";
import { SignupSchema } from "../Components/Signup_Schema";
import { LoginSchema } from "../Components/LoginSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";

function AuthForm() {
  const dispatch = useDispatch();
  const [justSignedUp, setJustSignedUp] = useState(false);

  const inputRef = useRef(); // used for focusing the input on mount
  const navigate = useNavigate();
  const location = useLocation();

  // access the auth state from the redux
  const { isAuthenticated, error } = useSelector(
    (state) => state.auth
  );

  // ✅ Dynamically set form mode based on the current route
  const isSignup = location.pathname === "/signup";
  
  useEffect(() => {
    inputRef.current?.focus();

    // Redirect only after successful signup
    if (isSignup && justSignedUp && !isAuthenticated) {
      alert("Signup successful!");
      navigate("/verify-otp"); 
      setJustSignedUp(false);
    }

    // Redirect after successful login
    if (!isSignup && isAuthenticated) {
      navigate("/");
    }
  }, [isSignup, isAuthenticated, navigate, justSignedUp]);

  return (
    <div className="flex justify-center items-center h-[90vh] bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">
          {isSignup ? "Create an Account" : "Login to Your Account"}
        </h2>
        {/* Replaced usestate + handlechange with Formik's form state */}
        <Formik
          initialValues={{ name: "", email: "", password: "" ,confirmPassword:""}} // Same fields for both forms
          validationSchema={isSignup ? SignupSchema : LoginSchema} // use dynamic Yup schema
          onSubmit={(values, { setSubmitting }) => {
            // replaced the manual handelsubmit logic
            if (isSignup) {
              setJustSignedUp(true);
              dispatch(signupRequest(values)); // dispatching redux action function
            } else {
              dispatch(
                loginRequest({ email: values.email, password: values.password })
              );
            }
            setSubmitting(false);
          }}
        >
          {/* Formik provides errors, touched etc here */}
          {({ errors, touched }) => (
            <Form>
              {/* Conditional render name field for signup */}
              {isSignup && (
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Field
                    ref={inputRef}
                    type="text"
                    name="name"
                    className="w-full border rounded px-3 py-2 focus:outline-pink-500"
                    placeholder="Your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}
              {/* Email field always shown */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <Field
                  ref={!isSignup ? inputRef : null} // autofocus for login
                  type="email"
                  name="email"
                  className="w-full border rounded px-3 py-2 focus:outline-pink-500"
                  placeholder="you@example.com"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              {/* 🔁 Password Field - always shown */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="w-full border rounded px-3 py-2 focus:outline-pink-500"
                  placeholder="********"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              {/* Redux error message (not fromik)  */}

              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

              
              {/* 🔁 Confirm Password Field on signup only */}
              {isSignup && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full border rounded px-3 py-2 focus:outline-pink-500"
                  placeholder="********"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              )}
              {/* 🔁 Submit button triggers Formik's onSubmit */}
              <button
              type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded font-semibold font-24"
              >
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </Form>
          )}
        </Formik>
        
        {/* 🔁 Login/Signup toggle link remains the same */}
        <p className="mt-4 text-center text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => navigate(isSignup ? "/login" : "/signup")}
            className="text-pink-600 hover:underline font-medium"
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;


