import fetchClient from '../axiosInstance';

export async function login() {
  try {
    const response = await fetchClient.get('/members/me');
    return response;
  } catch (err) {
    err.statusCode = 404;
    throw err;
  }
}

export async function signup(profile) {
  try {
    const response = await fetchClient.post(
      '/members',
      JSON.stringify(profile),
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchMyProfile() {
  try {
    const response = await fetchClient.get('/members/myprofile');
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function updateMyProfile(profile) {
  try {
    const response = await fetchClient.patch(
      '/members/me',
      JSON.stringify(profile),
    );
    return response;
  } catch (err) {
    console.log(err);
  }
}
