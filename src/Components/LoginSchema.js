import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("required"),
  password: Yup.string().min(3, "Password must be at least 3 characters").required(
    "required"
  ),
});
