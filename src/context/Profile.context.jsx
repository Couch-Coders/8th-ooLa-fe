import React from 'react';
import { createContext, useReducer } from 'react';

export const ProfileContext = createContext({
  imgUrl: '',
  name: '',
  nickname: '',
  email: '',
  blogUrl: '',
  gitUrl: '',
  selfIntroduction: '',
  techStack: [],
  updateItemtoTechStack: () => {},
  inputChangeHandler: () => {},
});

const INITIAL_STATE = {
  imgUrl: 'https://joeschmoe.io/api/v1/random',
  name: '유진',
  email: 'email@email.com',
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
    default:
      throw new Error('에러 발생');
  }
};

export const ProfileProvider = ({ children }) => {
  const [
    {
      name,
      nickname,
      email,
      blogUrl,
      gitUrl,
      techStack,
      imgUrl,
      selfIntroduction,
    },
    dispatch,
  ] = useReducer(profileFormReducer, INITIAL_STATE);

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

  const value = {
    name,
    nickname,
    email,
    blogUrl,
    gitUrl,
    techStack,
    imgUrl,
    selfIntroduction,
    updateItemtoTechStack,
    inputChangeHandler,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
