import React from 'react';
import PropTypes from 'prop-types';
import { StyledTag } from './StudyTag.style';

const StudyTag = ({ content, type }) => {
  let color;
  if (type === 'studyType') {
    color = 'blue';
  }
  if (type === 'studyDays') {
    color = 'cyan';
  }
  if (type === 'studyTimezone' || type === 'timeZone') {
    color = 'geekblue';
  }
  if (type === '완료') {
    color = 'default';
  }
  if (type === '진행') {
    color = 'processing';
  }

  return <StyledTag color={color}>{content}</StyledTag>;
};

StudyTag.propTypes = {
  content: PropTypes.string,
};

export default StudyTag;
