import fetchClient from '../axiosInstance';

export async function fetchStudyInfo(studyid) {
  try {
    const response = await fetchClient.get(`/studies/${studyid}
    `);

    // db.json Test

    // const response = await fetchClient.get(
    //   'http://localhost:3009/studyDetails',
    // );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function updateStudyInfo(submitEditStudy, studyid) {
  try {
    const response = await fetchClient.patch(
      `studies/${studyid}`,
      JSON.stringify(submitEditStudy),
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}
