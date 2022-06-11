/* eslint-disable prettier/prettier */
import axiosInstance from '../axiosInstance';

export async function getStudyList() {
  try {
    const response = await axiosInstance.get('/studies');
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getStudyDetails(studyId){
  try{
    const response = await axiosInstance.get(`/studies/${studyId}`);
    return response;
  }catch(err){
    console.log(err);
  }
}
