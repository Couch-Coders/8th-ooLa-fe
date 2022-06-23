/* eslint-disable prettier/prettier */
import React, { createContext, useState, useContext } from 'react';
import { StudyListContext } from './StudyList.context';
import { googleLogOut } from '../service/firebase';

export const AuthContext = createContext();

function getIsLogin() {
  const isLogin = localStorage.getItem('isLogin');
  return isLogin ? JSON.parse(isLogin) : false;
}

export const AuthProvider = ({ children }) => {
  const { setIsFilteringStart } = useContext(StudyListContext);
  const [user, setUser] = useState(()=>{
    const initailState = getIsLogin();
    return initailState;
  });

  const loginHandler = () => {
    localStorage.setItem('isLogin', JSON.stringify(true));
    setUser(true);
    setIsFilteringStart(true);
  };

  const logoutHandler = async () => {
    await googleLogOut();
    localStorage.removeItem('isLogin');
    setUser(false);
    setIsFilteringStart(true);
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
