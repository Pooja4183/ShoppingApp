import apiClient from "./apiClient";

// Dropdown APIs
export const fetchCategories = () => apiClient.get("/category");
export const fetchBrands = () => apiClient.get("/brand");
export const fetchColors = () => apiClient.get("/color");

// Product Create
export const createProduct = (data) =>
  apiClient.post("/products", data, {
  });