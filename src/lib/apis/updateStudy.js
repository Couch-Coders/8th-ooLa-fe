import fetchClient from '../axiosInstance';

export async function fetchStudyInfo(studyId) {
  try {
    const response = await fetchClient.get(`/studies/${studyId}`);
    return response;
  } catch (err) {}
}

export async function updateStudyInfo(submitEditStudy, studyid) {
  try {
    const response = await fetchClient.patch(
      `studies/${studyid}`,
      JSON.stringify(submitEditStudy),
    );
    return response;
  } catch (err) {}
}
