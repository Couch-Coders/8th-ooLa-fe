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
  const { setIsFilteringStart, filterVal } = useContext(StudyListContext);
  const [user, setUser] = useState(()=>{
    const initailState = getIsLogin();
    return initailState;
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const loginHandler = () => {
    localStorage.setItem('isLogin', JSON.stringify(true));
    setUser(true);
    filterVal.current = {};
    setIsFilteringStart(true);
  };

  const logoutHandler = async () => {
    await googleLogOut();
    localStorage.removeItem('isLogin');
    setUser(false);
    filterVal.current = {};
    setIsFilteringStart(true);
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
