/* eslint-disable prettier/prettier */
import fetchClient from '../axiosInstance';

// export async function getStudyList(pageNum, size) {
//   try {
//     const response = await fetchClient.get(
//       `/studies?page=${pageNum}&size=${size}`,
//     );
//     console.log(response);
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// }

export async function getStudyFilter(pageNum, size, filterValue) {
  let encodedUrl = encodeURI( `/studies?page=${pageNum}&size=${size}&studyType=${filterValue?.studyTypeName||''}&studyDays=${filterValue?.studyDays||''}&timeZone=${filterValue?.timeZone||''}`)
  try {
    const response = await fetchClient.get(encodedUrl);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getStudyDetails(studyId) {
  try {
    const response = await fetchClient.get(`/studies/${studyId}`);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
}
