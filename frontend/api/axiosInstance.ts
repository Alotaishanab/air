import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://172.20.10.2:8000/api/user/',  
});

export default axiosInstance;
