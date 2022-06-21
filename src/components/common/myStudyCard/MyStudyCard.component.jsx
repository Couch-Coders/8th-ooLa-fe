import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'antd';
import MyStudyLikeIcon from '../myStudyLikeIcon/MyStudyLikeIcon.component';
import PropTypes from 'prop-types';
import {
  StyledCard,
  StudyTitle,
  ConditionContaier,
  TagContainer,
  TeamOutlinedIcon,
  StudyCardHeader,
} from '../studyCard/StudyCard.style';
import StudyTag from '../studyTag/StudyTag.component';
import Dday from '../dDay/Dday.component';

const MyStudyCard = ({ study }) => {
  const {
    studyId,
    likeStatus,
    studyName,
    startDate,
    participants,
    currentParticipants,
    studyDays,
    timeZone,
    studyType,
  } = study;
  const convertedStartDate = new Date(startDate).toLocaleDateString(
    'zh-Hans-CN',
  );
  return (
    <Col span={8}>
      <Link to={`/studyDetails/${studyId}`}>
        <StyledCard bodyStyle={{ paddingBottom: '16px' }}>
          <StudyCardHeader>
            <Dday study={study} />
            {/* <LikeIcon studyLikes={studyLikes} studyId={studyId} /> */}
            <MyStudyLikeIcon likeStatus={likeStatus} />
          </StudyCardHeader>
          <StudyTitle>{studyName}</StudyTitle>
          <TagContainer>
            <StudyTag content={studyType} type="studyType" />
            <StudyTag content={studyDays} type="studyDays" />
            <StudyTag content={timeZone} type="studyTimezone" />
          </TagContainer>
          <ConditionContaier>
            <span>{`시작예정일 | ${convertedStartDate}`}</span>
            <span>
              <TeamOutlinedIcon />
              {` | ${currentParticipants}/${participants}`}
            </span>
          </ConditionContaier>
        </StyledCard>
      </Link>
    </Col>
  );
};

MyStudyCard.propTypes = {
  study: PropTypes.shape({
    likeStatus: PropTypes.bool,
    studyName: PropTypes.string,
    startDate: PropTypes.string,
    participants: PropTypes.number,
    currentParticipants: PropTypes.number,
    studyType: PropTypes.string,
  }),
};

export default MyStudyCard;
