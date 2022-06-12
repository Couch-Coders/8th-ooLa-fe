import fetchClient from '../axiosInstance';

export async function createStudy(submitCreateStudy) {
  try {
    const response = await fetchClient.post(
      '/mystudies',
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
