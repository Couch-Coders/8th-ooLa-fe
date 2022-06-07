import React from 'react';
import { Tag } from 'antd';
import PropTypes from 'prop-types';

const StudyTag = ({ content }) => {
  return <Tag color="green">{content}</Tag>;
};

StudyTag.propTypes = {
  content: PropTypes.string,
};

export default StudyTag;
