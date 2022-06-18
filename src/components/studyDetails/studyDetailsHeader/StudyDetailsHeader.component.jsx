import React, { useContext } from 'react';
import { StudyDetailsContext } from '../../../context/studyDetails.context';
import LeaderActiveBtnGroup from '../leaderActiveBtnGroup/leaderActiveBtnGroup.component';

import { HeaderWrapper, StudyTitle } from './StudyDetailsHeader.style';

const StudyDetailHeader = () => {
  const {
    studyData: { studyName },
  } = useContext(StudyDetailsContext);
  return (
    <HeaderWrapper>
      <StudyTitle>{studyName}</StudyTitle>
      <LeaderActiveBtnGroup />
    </HeaderWrapper>
  );
};

export default StudyDetailHeader;
