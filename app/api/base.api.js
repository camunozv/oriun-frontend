import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";

export const api_instance = axios.create({
  baseURL: BASE_URL  
});

// We must add interceptor to avoid add manually headers to our requests so that the backend knows we
// are authenticated; it would be great if I knew how to do it :'v

export default api_instance;
