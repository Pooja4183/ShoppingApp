// validations/productSchema.js
import * as yup from "yup";

export const productSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than zero")
    .required("Price is required"),
  description: yup.string().required("Description is required"),
  brand: yup.string().required("Brand is required"),
  category: yup.string().required("Category is required"),
  images: yup
    .mixed()
    .test("required", "At least one image is required", (value) => {
      return value && value.length > 0;
    }),
});
