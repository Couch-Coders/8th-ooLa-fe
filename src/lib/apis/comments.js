import axiosInstance from '../axiosInstance';

export async function postComments(submitComment, studyId) {
  try {
    const response = await axiosInstance.post(
      `/studies/${studyId}/comments`,
      JSON.stringify(submitComment),
    );
    // console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getComments(studyId) {
  try {
    const response = await axiosInstance.get(`/studies/${studyId}/comments`);
    return response;
  } catch (err) {
    console.log(err);
  }
}
