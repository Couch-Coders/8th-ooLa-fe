/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
import React, { createContext, useState, useEffect, useRef } from 'react';
import { getStudyList, getStudyFilter } from '../lib/apis/main';

export const StudyListContext = createContext();

export const StudyListProvider = ({ children }) => {
  const [isLast, setIsLast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [studies, setStudies] = useState([]);
  const [filterValue, setFilterValue] = useState({});
  const [isFilteringStart, setIsFilteringStart] = useState(false);
  const [fetchFunction, setFetchFunction] = useState(() => fetchStudyList)

  async function getAllstudyLists (pageNum) {
    const response = await getStudyList(pageNum, 15);
    setIsLast(response.last);
    const content = response.content;
    return content;
  };

  async function getStudyFiltering (pageNum, filterValue) {
    const response = await getStudyFilter(pageNum, 15, filterValue);
    setIsLast(response.last);
    const content = response.content;
    return content;
  };

  async function fetchStudyList (pageNum) {
    setIsLoading(true);
    const newStudies = await getAllstudyLists(pageNum);
    setStudies(prev => [...prev, ...newStudies]);
    setIsLoading(false);
  };

  async function fetchStudyFiltering(pageNum){
    setIsLoading(true);
    const newStudies = await getStudyFiltering(pageNum, filterValue);
    setStudies(prev => [...prev, ...newStudies]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isFilteringStart) {
      setFetchFunction(() => fetchStudyFiltering);
    }
  }, [isFilteringStart]);

  const value = {isLast,
        isLoading,
        isFilteringStart,
        studies,
        setFilterValue,
        fetchFunction,
        setIsFilteringStart
  }

  return (
    <StudyListContext.Provider value={value}>
      {children}
    </StudyListContext.Provider>
  );
};

// const [pageNum, setPageNum] = useState(0);

// const [isToggleOn, setIsToggleOn] = useState(false);
// const recruitingFilter = useCallback(allStudies => {
//   return allStudies.filter(
//     study =>
//       new Date(study.startDate) > new Date() &&
//       study.currentParticipants < study.participants,
//   );
// }, []);
// const toggleHandler = () => setIsToggleOn(state => !state);

// useEffect(() => {
//   if (isToggleOn) {
//     const recruitingStudies = recruitingFilter(studies);
//     setStudies(recruitingStudies);
//   } else {
//     setStudies(studies);
//   }
// }, [isToggleOn]);
