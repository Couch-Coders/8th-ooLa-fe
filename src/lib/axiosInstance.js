/* eslint-disable dot-notation */
import axios from 'axios';

const baseURL = 'https://studyoola.herokuapp.com';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('token');
    // eslint-disable-next-line dot-notation
    console.log('요청직전토큰', token);
    config.headers['Authorization'] = 'Bearer ' + JSON.parse(token);
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export default axiosInstance;

// export const authInstance = axios.create({
//   baseURL,
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
// });

// authInstance.interceptors.request.use(
//   async config => {
//     const token = await auth?.currentUser.getIdToken();
//     // eslint-disable-next-line dot-notation
//     config.headers['Authorization'] = 'Bearer ' + JSON.parse(token);
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   },
// );
