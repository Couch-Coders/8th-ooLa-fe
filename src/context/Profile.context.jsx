import React from 'react';
import { createContext, useReducer, useState } from 'react';

export const ProfileContext = createContext({
  nickname: '',
  blogUrl: '',
  gitUrl: '',
  selfIntroduction: '',
  techStack: [],
  updateItemtoTechStack: () => {},
  inputChangeHandler: () => {},
  fetchUserProfile: () => {},
  clearUserProfile: () => {},
});

const INITIAL_STATE = {
  nickname: '',
  blogUrl: '',
  gitUrl: '',
  selfIntroduction: '',
  techStack: [],
};

//배열에 없는 기술이 클릭 추가
//배열에 있는 기술이 클릭 제거
const updateTechItem = (techStack, techToUpdate) => {
  const existingTechItem = techStack.find(tech => tech === techToUpdate);
  if (existingTechItem) {
    return techStack.filter(tech => tech !== techToUpdate);
  } else {
    return [...techStack, techToUpdate];
  }
};

const profileFormReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case 'UPDATE_TECH_STACK':
      return {
        ...state,
        techStack: payload,
      };
    case 'FETCH_USER_PROFILE':
      return {
        ...payload,
      };
    case 'CLEAR_USER_PROFILE':
      return INITIAL_STATE;
    default:
      throw new Error('에러 발생');
  }
};

export const ProfileProvider = ({ children }) => {
  const [{ nickname, blogUrl, gitUrl, techStack, selfIntroduction }, dispatch] =
    useReducer(profileFormReducer, INITIAL_STATE);

  const inputChangeHandler = (name, value) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name, value },
    });
  };

  const updateItemtoTechStack = techToUpdate => {
    const newTechStack = updateTechItem(techStack, techToUpdate);
    dispatch({ type: 'UPDATE_TECH_STACK', payload: newTechStack });
  };

  const fetchUserProfile = profile => {
    dispatch({ type: 'FETCH_USER_PROFILE', payload: profile });
  };

  const clearUserProfile = () => {
    dispatch({ type: 'CLEAR_USER_PROFILE' });
  };

  const value = {
    nickname,
    blogUrl,
    gitUrl,
    techStack,
    selfIntroduction,
    updateItemtoTechStack,
    inputChangeHandler,
    fetchUserProfile,
    clearUserProfile,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
