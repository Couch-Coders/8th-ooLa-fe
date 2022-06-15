import React, { createContext, useState } from 'react';
import { useCallback } from 'react';
import { getStudyList } from '../lib/apis/main';

export const StudyListContext = createContext();

export const StudyListProvider = ({ children }) => {
  const [pageNum, setPageNum] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [studies, setStudies] = useState([]);

  const getAllStudyLists = async pageNum => {
    const response = await getStudyList(pageNum, 15);
    setIsLast(response.last);
    const content = response.content;
    return content;
  };

  const fetchStudyList = async () => {
    setIsLoading(true);
    const newStudies = await getAllStudyLists(pageNum);
    setStudies(prev => [...prev, ...newStudies]);
    setPageNum(prev => prev + 1);
    setIsLoading(false);
  };

  return (
    <StudyListContext.Provider value={(isLast, isLoading, studies)}>
      {children}
    </StudyListContext.Provider>
  );
};
