import { ACCESS_TOKEN } from "@/constants";
import axios from "axios";
import { useSession } from "next-auth/react";
import { options } from "./auth/[...nextauth]/credentials_options";
import { redirect } from "next/navigation";
import { getToken } from "next-auth/jwt";

const BASE_URL = "http://127.0.0.1:8000/";

export const api_instance = axios.create({
  baseURL: BASE_URL  
});

// We must add interceptor to avoid add manually headers to our requests so that the backend knows we
// are authenticated.

// api_instance.interceptors.request.use(
//   (config) => {
    
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default api_instance;
