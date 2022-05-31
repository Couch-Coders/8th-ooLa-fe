import React from 'react';
import LeaderActiveBtnGroup from '../leaderActiveBtnGroup/leaderActiveBtnGroup.component';

import { HeaderWrapper, StudyTitle } from './StudyDetailsHeader.style';

const StudyDetailHeader = () => {
  return (
    <HeaderWrapper>
      <StudyTitle>씹어 먹자! CS지식</StudyTitle>
      <LeaderActiveBtnGroup />
    </HeaderWrapper>
  );
};
export default StudyDetailHeader;
