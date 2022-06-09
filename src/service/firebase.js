import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBc1sOyeU1nIoLZ97kWKD2DmoDKXCVpY6w',
  authDomain: 'oola-oauth.firebaseapp.com',
  projectId: 'oola-oauth',
  storageBucket: 'oola-oauth.appspot.com',
  messagingSenderId: '164936276045',
  appId: '1:164936276045:web:25082d9cd3bbefcd0d6404',
  measurementId: 'G-LXTT21SZJ7',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export const googleLogOut = () => signOut(auth);
