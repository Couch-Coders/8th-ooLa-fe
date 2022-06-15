import React, { createContext, useState } from 'react';
import { getStudyList, getStudyFilter } from '../lib/apis/main';

export const StudyListContext = createContext();

export const StudyListProvider = ({ children }) => {
  const [pageNum, setPageNum] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [studies, setStudies] = useState([]);
  const [filterValue, setFilterValue] = useState({});

  const getAllstudyLists = async pageNum => {
    const response = await getStudyList(pageNum, 15);
    setIsLast(response.last);
    const content = response.content;
    return content;
  };

  const getStudyFiltering = async (
    pageNum,
    studyTypeName,
    studyDays,
    timeZone,
  ) => {
    const response = await getStudyFilter(pageNum, 15, filterValue);
    setIsLast(response.last);
    const content = response.content;
    return content;
  };

  const fetchStudyList = async () => {
    setIsLoading(true);
    const newStudies = await getAllstudyLists(pageNum);
    setStudies(prev => [...prev, ...newStudies]);
    setPageNum(prev => prev + 1);
    setIsLoading(false);
  };

  const fetchStudyFiltering = async () => {
    setIsLoading(true);
    const newStudies = await getStudyFilter(pageNum, filterValue);
    setStudies(prev => [...prev, ...newStudies]);
    setPageNum(prev => prev + 1);
    setIsLoading(false);
  };

  return (
    <StudyListContext.Provider
      value={(isLast, isLoading, studies, setFilterValue)}
    >
      {children}
    </StudyListContext.Provider>
  );
};
