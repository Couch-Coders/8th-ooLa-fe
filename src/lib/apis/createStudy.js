import axiosInstance from '../axiosInstance';

export async function createStudy(submitCreateStudy) {
  try {
    const response = await axiosInstance.post(
      '/mystudies',
      JSON.stringify(submitCreateStudy),
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function createStudyInfo() {
  try {
    // const response = await axiosInstance.get('/studies/{studyid}');
    const response = await axiosInstance.get(
      'http://localhost:3004/studyDetails',
    );
    return response;
  } catch (err) {
    throw err;
  }
}
