import React, { useContext } from 'react';
import { StudyDetailsContext } from '../../../context/studyDetails.context';
import LeaderActiveBtnGroup from '../leaderActiveBtnGroup/leaderActiveBtnGroup.component';

import StudyTag from '../../common/studyTag/StudyTag.component';

import {
  HeaderWrapper,
  StudyTitle,
  StudyTitleContainer,
} from './StudyDetailsHeader.style';

const StudyDetailHeader = () => {
  const {
    studyData: { studyName, status },
  } = useContext(StudyDetailsContext);

  let content = '';
  if (status === '완료') {
    content = '종료된 스터디';
  } else if (status === '진행') {
    content = '진행중';
  }

  return (
    <HeaderWrapper>
      <StudyTitleContainer>
        <StudyTitle>{studyName}</StudyTitle>
        <StudyTag type={status} content={content} />
      </StudyTitleContainer>
      <LeaderActiveBtnGroup />
    </HeaderWrapper>
  );
};

export default StudyDetailHeader;
