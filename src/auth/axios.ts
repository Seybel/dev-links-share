import axios from "axios"
import router from "../../router";
import { store } from "../store";

const baseURL = 'http://localhost:3000/'

const Axios = axios.create({
    baseURL,
    headers: { 
      "Content-Type": "application/json",
    },
    withCredentials: true,
});

Axios.interceptors.response.use(
  res => res,
  error => {
    if (error.response.status === 401) {
      store.setAuth(false);
      router.push('/login');
    }
    return Promise.reject(error);
  });

Axios.interceptors.request.use(
  config => {
    const token = store.access_token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

  export default Axios;
