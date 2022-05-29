import React from 'react';
import { style } from './StudyItem.style';
import { HeartFilled } from '@ant-design/icons';

const MyStudyItem = () => {
  return (
    <StudyItemContainer>
      <InfoTop>
        <h3>D-day</h3>
        <HeartFilled className="like-btn" />
      </InfoTop>
      <InfoBottom>
        <h3>studyName</h3>
        <span>type | startDate | currentParticipants/participants명</span>
      </InfoBottom>
    </StudyItemContainer>
  );
};

export default MyStudyItem;

const { StudyItemContainer, InfoTop, InfoBottom } = style;
