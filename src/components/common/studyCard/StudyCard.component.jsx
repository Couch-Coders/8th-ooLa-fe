import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/Auth.context';
import { Link } from 'react-router-dom';
import { Col } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import LikeIcon from '../likeIcon/LikeIcon.component';
import PropTypes from 'prop-types';
import {
  StyledCard,
  StudyTitle,
  ConditionContaier,
  TagContainer,
  TeamOutlinedIcon,
  StudyCardHeader,
} from './StudyCard.style';
import StudyTag from '../studyTag/StudyTag.component';
import Dday from '../dDay/Dday.component';

const StudyCard = ({ study }) => {
  const { user } = useContext(AuthContext);

  const {
    studyId,
    studyLikes,
    studyName,
    startDate,
    participants,
    currentParticipants,
    studyDays,
    timeZone,
    studyType,
  } = study;

  const [likeCount, setLikeCount] = useState(studyLikes.length);

  const convertedStartDate = new Date(startDate).toLocaleDateString(
    'zh-Hans-CN',
  );
  return (
    <Col span={8}>
      <Link to={`/studyDetails/${studyId}`}>
        <StyledCard bodyStyle={{ paddingBottom: '16px' }}>
          <StudyCardHeader>
            <Dday study={study} />
            {user ? (
              <LikeIcon
                studyLikes={studyLikes}
                studyId={studyId}
                likeCount={likeCount}
                setLikeCount={setLikeCount}
              />
            ) : null}
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
              <HeartFilled style={{ fontSize: '1.6rem', color: '#fab1ac' }} />
              &nbsp;{` ${likeCount}`}
            </span>
            <span>
              <TeamOutlinedIcon />
              &nbsp;{` ${currentParticipants}/${participants}`}
            </span>
          </ConditionContaier>
        </StyledCard>
      </Link>
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
