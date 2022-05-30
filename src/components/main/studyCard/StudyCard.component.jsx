import React from 'react';
import { Col, Card } from 'antd';
import LikeIcon from '../likeIcon/LikeIcon.component';
import PropTypes from 'prop-types';

const StudyCard = ({ study }) => {
  const {
    likeStatus,
    studyName,
    startDate,
    participants,
    currentParticipants,
    studyType,
  } = study;
  return (
    <Col span={8}>
      <Card>
        <LikeIcon isLike={likeStatus} />
        <span>{`시작예정일|${startDate}`}</span>
        <h4>{studyName}</h4>
        <div>
          <span>{studyType}</span>
          <span>{`${currentParticipants}/${participants}`}</span>
        </div>
      </Card>
    </Col>
  );
};

StudyCard.propTypes = {
  study: PropTypes.shape({
    likeStatus: PropTypes.bool,
    studyName: PropTypes.string,
    startDate: PropTypes.string,
    participants: PropTypes.number,
    currentParticipants: PropTypes.number,
    studyType: PropTypes.string,
  }),
};

export default StudyCard;
