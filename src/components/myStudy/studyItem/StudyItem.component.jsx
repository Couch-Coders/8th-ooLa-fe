import React from 'react';
import { style } from './StudyItem.style';
import { Col } from 'antd';

import PropTypes from 'prop-types';

import LikeIcon from '../../common/ui/likeIcon/LikeIcon.component';
import DDay from '../dDay/DDay.component';

const StudyItem = ({
  likeStatus,
  dDay,
  studyName,
  studyType,
  startDate,
  participants,
  currentParticipants,
}) => {
  const study = {
    dDay: 'D-3',
    likeStatus: true,
    studyName: '스터디이름',
    studyType: '스터디분야',
    startDate: '0000-00-00',
    participants: '0',
    currentParticipants: '0',
  };

  return (
    <Col span={8}>
      <StudyItemContainer>
        <InfoTop>
          <DDay dDay={study.dDay} />
          <LikeIcon isLike={study.likeStatus} />
        </InfoTop>
        <InfoBottom>
          <h3>{study.studyName}</h3>
          <span>
            {study.studyType} | {study.startDate} | {study.currentParticipants}/
            {study.participants}명
          </span>
        </InfoBottom>
      </StudyItemContainer>
    </Col>
  );
};

export default StudyItem;

const { StudyItemContainer, InfoTop, InfoBottom } = style;

StudyItem.propTypes = {
  dDay: PropTypes.string,
  likeStatus: PropTypes.bool,
  studyName: PropTypes.string,
  studyType: PropTypes.string,
  startDate: PropTypes.string,
  participants: PropTypes.number,
  currentParticipants: PropTypes.number,
};
