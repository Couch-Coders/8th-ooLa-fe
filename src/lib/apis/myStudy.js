import fetchClient from '../axiosInstance';

// 진행 스터디 + 진행예정 스터디 조회
export async function getProgressStudy() {
  try {
    const response = await fetchClient.get('/mystudies/progress');

    return response;
  } catch (err) {
    throw new Error(err);
  }
}

// 내가 만든 스터디 조회
export async function getCreationStudy() {
  try {
    const response = await fetchClient.get('/mystudies/creation');
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

// 완료 스터디 조회
export async function getCompletionStudy() {
  try {
    const response = await fetchClient.get('/mystudies/completion');

    return response;
  } catch (err) {
    throw new Error(err);
  }
}

// 관심 스터디 조회
export async function getLikeStudy() {
  try {
    const response = await fetchClient.get('/mystudies/likes');

    return response;
  } catch (err) {
    throw new Error(err);
  }
}
