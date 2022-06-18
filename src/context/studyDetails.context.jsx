import React, { createContext, useState } from 'react';
import { getStudyDetails } from '../lib/apis/main';

export const StudyDetailsContext = createContext();

export const StudyDetailsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [studyData, setStudyData] = useState({});
  const [currentRole, setCurrentRole] = useState('');
  const [currentMemberCount, setCurrentMemberCount] = useState();

  const studyDetailsHandler = async studyId => {
    const response = await getStudyDetails(studyId);
    const data = response.data;
    console.log(data);
    setStudyData(data);
    setCurrentRole(data.role);
    setCurrentMemberCount(data.currentParticipants);
    setIsLoading(false);
  };

  const value = {
    studyData,
    currentRole,
    isLoading,
    setStudyData,
    setCurrentRole,
    studyDetailsHandler,
    setCurrentMemberCount,
    currentMemberCount,
  };

  return (
    <StudyDetailsContext.Provider value={value}>
      {children}
    </StudyDetailsContext.Provider>
  );
};
