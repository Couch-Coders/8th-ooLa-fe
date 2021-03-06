import fetchClient from '../axiosInstance';

export async function postComments(submitComment, studyId) {
  try {
    const response = await fetchClient.post(
      `/studies/${studyId}/comments`,
      JSON.stringify(submitComment),
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getComments(studyId) {
  try {
    const response = await fetchClient.get(`/studies/${studyId}/comments`);

    return response;
  } catch (err) {
    throw new Error(err);
  }
}
export async function deleteComments(commentId) {
  try {
    const response = await fetchClient.delete(`/studies/comments/${commentId}`);
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

// λκΈ μμ 

export async function updateComments(updateComment, commentId, studyId) {
  try {
    const response = await fetchClient.patch(
      `/studies/${studyId}/comments/${commentId}`,
      JSON.stringify(updateComment),
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
}
