import fetchClient from '../axiosInstance';

export async function postLikeStudy(submitPostLikeStudy, studyId) {
  try {
    const response = await fetchClient.post(
      `/studies/${studyId}/likes`,
      JSON.stringify(submitPostLikeStudy),
    );

    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteLikeStudy(submitDeleteLikeStudy, studyId) {
  try {
    const response = await fetchClient.delete(`/studies/${studyId}/hates`, {
      data: {
        ...submitDeleteLikeStudy,
      },
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
}
