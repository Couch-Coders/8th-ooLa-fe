import React from 'react';
import LeaderActiveBtnGroup from '../leaderActiveBtnGroup/leaderActiveBtnGroup.component';

import { HeaderWrapper, StudyTitle } from './StudyDetailsHeader.style';

const StudyDetailHeader = ({ studyData: { studyName } }) => {
  return (
    <HeaderWrapper>
      <StudyTitle>{studyName}</StudyTitle>
      <LeaderActiveBtnGroup />
    </HeaderWrapper>
  );
};
export default StudyDetailHeader;
