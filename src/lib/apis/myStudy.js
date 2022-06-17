import fetchClient from '../axiosInstance';

export async function getProgressStudy() {
  try {
    const response = await fetchClient.get('/mystudies/progress');
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
}
