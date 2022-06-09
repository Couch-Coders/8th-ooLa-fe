/* eslint-disable prettier/prettier */
import React, { useEffect, createContext, useState } from 'react';
import { onIdTokenChanged } from 'firebase/auth';
import { auth, googleLogOut } from '../service/firebase';

export const AuthContext = createContext();

function getIsLogin() {
  const isLogin = localStorage.getItem('isLogin');
  return isLogin ? JSON.parse(isLogin) : false;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getIsLogin);

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, async user => {
      if (user) {
        const token = await user.getIdToken();
        const strToken = JSON.stringify(token);
        localStorage.setItem('token', strToken);
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
