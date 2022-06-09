import axiosInstance from '../axiosInstance';

export async function login() {
  try {
    const response = await axiosInstance.get('/members/me');
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export async function signup(profile) {
  try {
    const response = await axiosInstance.post('/members', {
      body: JSON.stringify(profile),
    });
    return response;
  } catch (err) {
    console.log(err);
  }
}
