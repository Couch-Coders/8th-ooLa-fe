import React from 'react';
import { Col, Button } from 'antd';
import MemberProfile from '../memberProfile/MemberProfile.component';
import PropTypes from 'prop-types';

import {
  StyledCard,
  LeaderMark,
  TechsContainer,
  ButtonsContainer,
} from './studyMemberItem.style';

const StudyMemberItem = ({ member }) => {
  const {
    techStackArray,
    blogUrl,
    githubUrl,
    selfIntroduction,
    nickname,
    role,
    photoUrl,
  } = member;

  return (
    <Col span={6}>
      <StyledCard>
        {role === 'leader' ? <LeaderMark>Leader</LeaderMark> : null}
        <MemberProfile nickname={nickname} photoUrl={photoUrl} />
        <TechsContainer>
          {/* {techStackArray.map(tech => (
            <span key={tech} content={tech} />
          ))} */}
        </TechsContainer>
        <p>{selfIntroduction}</p>
        <ButtonsContainer>
          <Button type="button">블로그</Button>
          <Button>깃허브</Button>
        </ButtonsContainer>
      </StyledCard>
    </Col>
  );
};

StudyMemberItem.propTypes = {
  member: PropTypes.shape({
    techStackArray: PropTypes.arrayOf(PropTypes.string),
    blogUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    selfIntroduction: PropTypes.string,
    nickname: PropTypes.string,
    role: PropTypes.string,
    photoUrl: PropTypes.string,
  }),
};

export default StudyMemberItem;
