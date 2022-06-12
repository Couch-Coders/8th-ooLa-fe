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

  const loginHandler = () => {
    localStorage.setItem('isLogin', JSON.stringify(true));
    setUser(true);
  };

  const logoutHandler = async () => {
    await googleLogOut();
    localStorage.removeItem('isLogin');
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
