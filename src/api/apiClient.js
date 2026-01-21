import axios from "axios";

// Base API URL — adjust to your backend port
const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`, // ✅ include /api if your routes start with /api
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token if available
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
