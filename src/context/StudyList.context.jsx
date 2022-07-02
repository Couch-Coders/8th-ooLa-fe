/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect, useRef } from 'react';
import { getStudyFilter } from '../lib/apis/main';

export const StudyListContext = createContext();

const recruitingFilter = allStudies => {
  return allStudies.filter(
    study =>
      new Date(study.startDate) > new Date() &&
      study.currentParticipants < study.participants &&
      study.status !== '완료',
  );
};

export const StudyListProvider = ({ children }) => {
  const pageNum = useRef(0);
  const filterVal = useRef({});
  const [isLast, setIsLast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [studies, setStudies] = useState([]);
  const [progressStudies, setProgressStudies] = useState([]);
  const [isFilteringStart, setIsFilteringStart] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);

  async function fetchStudyFiltering(pageNum, filterValue) {
    setIsLoading(true);
    const response = await getStudyFilter(pageNum, 12, filterValue);
    const content = response.content;
    setStudies(prev => [...prev, ...content]);
    setProgressStudies(prev => {
      const allArr =  [...prev, ...content];
      return recruitingFilter(allArr);
    });
    setIsLast(response.last);
    setIsLoading(false);
  }

  useEffect(() => {
    if (isFilteringStart) {
      pageNum.current = 0;
      setStudies([]);
      setProgressStudies([]);
      setIsLast(false);
      setIsFilteringStart(false);
    }
  }, [isFilteringStart]);

  const toggleHandler = () => setIsToggleOn(state => !state);

  const value = {
    isLast,
    isLoading,
    isFilteringStart,
    studies,
    progressStudies,
    pageNum,
    filterVal,
    isToggleOn,
    toggleHandler,
    setStudies,
    fetchStudyFiltering,
    setIsFilteringStart,
  };

  return (
    <StudyListContext.Provider value={value}>
      {children}
    </StudyListContext.Provider>
  );
};
