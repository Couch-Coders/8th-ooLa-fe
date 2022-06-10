import axiosInstance from '../axiosInstance';

export async function getStudyList() {
  try {
    const response = await axiosInstance.get('/studies');
    return response;
  } catch (err) {
    console.log(err);
  }
}
