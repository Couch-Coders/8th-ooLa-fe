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
    console.log(response);
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

export async function patchFinishStudy(studyId, studyData){
  try{
    const response = await fetchClient.patch(`/studies/${studyId}/completion`,
    JSON.stringify(studyData))
    console.log(response);
    return response;
  }catch(err){
    console.log(err);
  }
}

export async function postSharingComment (studyId, sharingComment) {
  try{
    const response = await fetchClient.post(`/studies/${studyId}/blogs`, JSON.stringify(sharingComment))
    return response;
  }catch(err){
    console.log(err);
  }
};

export async function getSharingComment (studyId) {
  try{
    const response = await fetchClient.get(`/studies/${studyId}/blogs`);
    console.log(response);
    return response;
  }catch(err){
    console.log(err);
  }
}