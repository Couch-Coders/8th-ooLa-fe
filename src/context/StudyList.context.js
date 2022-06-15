/* eslint-disable no-sequences */
/* eslint-disable prettier/prettier */
import React, { createContext, useState } from 'react';
import { getStudyList, getStudyFilter } from '../lib/apis/main';

export const StudyListContext = createContext();

export const StudyListProvider = ({ children }) => {
  const [pageNum, setPageNum] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [studies, setStudies] = useState([]);
  const [filterValue, setFilterValue] = useState({});
  const [isFilteringStart, setIsFilteringStart] = useState(false);

  const getAllstudyLists = async pageNum => {
    const response = await getStudyList(pageNum, 15);
    setIsLast(response.last);
    const content = response.content;
    return content;
  };

  const getStudyFiltering = async (pageNum, filterValue) => {
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
    const newStudies = await getStudyFiltering(pageNum, filterValue);
    setStudies(prev => [...prev, ...newStudies]);
    setPageNum(prev => prev + 1);
    setIsLoading(false);
  };

  const value = {isLast,
        isLoading,
        isFilteringStart,
        studies,
        setPageNum,
        setFilterValue,
        fetchStudyFiltering,
        fetchStudyList,
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
