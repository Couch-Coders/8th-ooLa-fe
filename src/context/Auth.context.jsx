/* eslint-disable prettier/prettier */
import React, { useEffect, createContext, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, googleLogOut } from '../service/firebase';

export const AuthContext = createContext();

function getIsLogin() {
  const isLogin = localStorage.getItem('isLogin');
  return isLogin ? JSON.parse(isLogin) : false;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(()=>{
    const initailState = getIsLogin();
    return initailState;
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const token = await user.getIdToken();
        const strToken = JSON.stringify(token);
        localStorage.setItem('token', strToken);
        console.log('구글 토큰', token)
        console.log('로컬 스토리지 토큰', localStorage.getItem('token'))
      }
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const loginHandler = () => {
    localStorage.setItem('isLogin', JSON.stringify(true));
    setUser(true);
  };

  const logoutHandler = async () => {
    await googleLogOut();
    localStorage.removeItem('isLogin');
    localStorage.removeItem('token');
    setUser(false);
  };

  const value = {
    loginHandler,
    logoutHandler,
    user
  };


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
