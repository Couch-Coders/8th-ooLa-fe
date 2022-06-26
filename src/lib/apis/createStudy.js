import fetchClient from '../axiosInstance';

export async function createStudy(submitCreateStudy) {
  try {
    const response = await fetchClient.post(
      '/studies',
      JSON.stringify(submitCreateStudy),
    );
    return response;
  } catch (err) {}
}
