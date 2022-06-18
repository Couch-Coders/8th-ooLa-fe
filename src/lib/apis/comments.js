import axiosInstance from '../axiosInstance';

export async function postComments(submitComments, studyId, commentId) {
  try {
    const response = await axiosInstance.post(
      `/${studyId}/comments/${commentId}`,
      JSON.stringify(submitComments),
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getComments(studyId) {
  try {
    // test db.json
    const response = await axiosInstance.get(
      'http://localhost:3009/commentArray',
    );
    // const response = await axiosInstance.get(`/studies/${studyId}/comments`);
    return response;
  } catch (err) {
    console.log(err);
  }
}
