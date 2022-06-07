import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCoHRsqhO15IrixCH4ho-kzVf08Tel8mug',
  authDomain: 'oola-fe.firebaseapp.com',
  projectId: 'oola-fe',
  storageBucket: 'oola-fe.appspot.com',
  messagingSenderId: '842130078212',
  appId: '1:842130078212:web:ad0d5fb5a9f167cbc11351',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
