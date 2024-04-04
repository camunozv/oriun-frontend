import { ACCESS_TOKEN } from "@/constants";
import axios from "axios";

const BASE_URL = process.env.BASE_API_URL;

export const api_instance = axios.create({
  baseURL: BASE_URL,
});

// We must add interceptor to add manually headers to our requests.
api_instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api_instance;
