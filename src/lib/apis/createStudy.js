<<<<<<< HEAD
import { axiosInstance } from '../axiosInstance';
=======
import fetchClient from '../axiosInstance';
>>>>>>> 9322a016a52790222c7404d998feb6e86d267b73

export async function createStudy(submitCreateStudy) {
  try {
    const response = await fetchClient.post(
      '/studies',
      JSON.stringify(submitCreateStudy),
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getCreateStudy(data) {
  try {
    const response = await fetchClient.get('/studies/{studyid}');
    return response;
  } catch (err) {
    throw err;
  }
}
