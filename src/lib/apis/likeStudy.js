import fetchClient from '../axiosInstance';

export async function postLikeStudy(submitPostLikeStudy, studyId) {
  try {
    const response = await fetchClient.post(
      `/studies/${studyId}/likes`,
      JSON.stringify(submitPostLikeStudy),
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteLikeStudy(submitDeleteLikeStudy, studyId) {
  try {
    const response = await fetchClient.delete(
      `/studies/${studyId}/hates`,
      JSON.stringify(submitDeleteLikeStudy),
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}
