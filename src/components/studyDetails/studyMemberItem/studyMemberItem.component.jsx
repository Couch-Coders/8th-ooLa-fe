import React from 'react';
import { Col } from 'antd';
import MemberProfile from '../memberProfile/MemberProfile.component';
import PropTypes from 'prop-types';
import TechsBadge from '../techsBadge/TechsBadge.component';

import {
  StyledCard,
  LeaderMark,
  TechsContainer,
  ButtonsContainer,
  StyledButton,
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
          {techStackArray.map(tech => (
            <TechsBadge key={tech} content={tech} />
          ))}
        </TechsContainer>
        <ButtonsContainer>
          <StyledButton>
            <a target="_blank" href={blogUrl} rel="noreferrer">
              블로그
            </a>
          </StyledButton>
          <StyledButton>
            <a target="_blank" href={githubUrl} rel="noreferrer">
              깃허브
            </a>
          </StyledButton>
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
