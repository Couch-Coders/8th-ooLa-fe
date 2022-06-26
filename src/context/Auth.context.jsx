/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';
import { googleLogOut } from '../service/firebase';

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const loginHandler = () => {
    localStorage.setItem('isLogin', JSON.stringify(true));
    setUser(true);
  };

  const logoutHandler = async () => {
    await googleLogOut();
    localStorage.removeItem('isLogin');
    setUser(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const value = {
    showModal,
    handleCancel,
    loginHandler,
    logoutHandler,
    user,
    isModalVisible
  };


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
