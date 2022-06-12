/* eslint-disable prettier/prettier */
import fetchClient from '../axiosInstance';

export async function getStudyList(pageNum, size) {
  try {
    const response = await fetchClient.get(`/mystudies?page=${pageNum}&size=${size}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getStudyDetails(studyId){
  try{
    const response = await fetchClient.get(`/mystudies/${studyId}`);
    return response;
  }catch(err){
    console.log(err);
  }
}
