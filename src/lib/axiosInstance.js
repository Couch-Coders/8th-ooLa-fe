import axios from 'axios';

const baseURL = 'https://studyoola.herokuapp.com';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = 'Bearer ' + JSON.parse(token);
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export default axiosInstance;
