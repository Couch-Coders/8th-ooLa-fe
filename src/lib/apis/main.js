/* eslint-disable prettier/prettier */
import fetchClient from '../axiosInstance';

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
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function getStudyMembers (studyId){
  try{
    const response = await fetchClient.get(`/studies/${studyId}/members`)
    return response.data;
  }catch(err){
    console.log(err)
  }
}

export async function postApplyStudy (studyId){
  try{
    const response = await fetchClient.post(`/studies/${studyId}/members`)
    console.log(response);
    return response;
  }catch(err){
    console.log(err);
  }
}
