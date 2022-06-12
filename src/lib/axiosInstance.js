/* eslint-disable dot-notation */
import axios from 'axios';
import { auth } from '../service/firebase';

const baseURL = 'https://studyoola.herokuapp.com';

const fetchClient = (() => {
  const getAuthToken = async () => {
    try {
      return 'Bearer ' + (await auth.currentUser?.getIdToken());
    } catch (err) {
      throw new Error(err);
    }
  };

  const instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  instance.interceptors.request.use(async config => {
    config.headers['Authorization'] = await getAuthToken();
    return config;
  });

  return instance;
})();

export default fetchClient;
