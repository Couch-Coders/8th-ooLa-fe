import React from 'react';
import LeaderActiveBtnGroup from '../leaderActiveBtnGroup/leaderActiveBtnGroup.component';

import { HeaderWrapper, StudyTitle } from './StudyDetailsHeader.style';

const StudyDetailHeader = ({ studyData: { studyName, joinStatus } }) => {
  return (
    <HeaderWrapper>
      <StudyTitle>{studyName}</StudyTitle>
      <LeaderActiveBtnGroup joinStatus={joinStatus} />
    </HeaderWrapper>
  );
};

export default StudyDetailHeader;
