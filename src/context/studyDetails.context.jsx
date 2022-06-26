import React, { createContext, useState } from 'react';
import { getStudyDetails } from '../lib/apis/main';

export const StudyDetailsContext = createContext();

export const StudyDetailsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [studyData, setStudyData] = useState({});
  const [isStudyFinshed, setIsStudyFinished] = useState(false);
  const [currentRole, setCurrentRole] = useState('');
  const [currentMemberCount, setCurrentMemberCount] = useState();

  const studyDetailsHandler = async studyId => {
    setIsLoading(true);
    setStudyData({});
    setIsStudyFinished(false);
    const response = await getStudyDetails(studyId);
    const data = response.data;
    if (data.status === '완료') {
      setIsStudyFinished(true);
    }
    setStudyData(data);
    setCurrentRole(data.role);
    setCurrentMemberCount(data.currentParticipants);
    setIsLoading(false);
  };

  const value = {
    isLoading,
    studyData,
    currentRole,
    isStudyFinshed,
    currentMemberCount,
    setIsStudyFinished,
    setStudyData,
    setCurrentRole,
    studyDetailsHandler,
    setCurrentMemberCount,
  };

  return (
    <StudyDetailsContext.Provider value={value}>
      {children}
    </StudyDetailsContext.Provider>
  );
};
