import fetchClient from '../axiosInstance';

export async function postComments(submitComment, studyId) {
  try {
    const response = await fetchClient.post(
      `/studies/${studyId}/comments`,
      JSON.stringify(submitComment),
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getComments(studyId) {
  try {
    const response = await fetchClient.get(`/studies/${studyId}/comments`);
    console.log(response);

    return response;
  } catch (err) {
    console.log(err);
  }
}
export async function deleteComments(commentId) {
  try {
    const response = await fetchClient.delete(`/studies/comments/${commentId}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

// 댓글 수정

export async function fetchComments(studyId) {
  try {
    const response = await fetchClient.get(`/studies/${studyId}/comments`);
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function updateComments(updateComment, commentId, studyId) {
  try {
    const response = await fetchClient.patch(
      `/studies/${studyId}/comments/${commentId}`,
      JSON.stringify(updateComment),
    );
    console.log(response.data);
    return response;
  } catch (err) {
    console.log(err);
  }
}
