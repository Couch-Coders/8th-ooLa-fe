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
  if (type === 'studyTimezone') {
    color = 'geekblue';
  }

  return <StyledTag color={color}>{content}</StyledTag>;
};

StudyTag.propTypes = {
  content: PropTypes.string,
};

export default StudyTag;
