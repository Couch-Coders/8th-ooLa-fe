import React, { useState } from 'react';
import { Tag } from 'antd';

import PropTypes from 'prop-types';

const LeaderTag = () => {
  const [leader, setLeader] = useState(true);

  return <div>{leader ? <Tag color="#2db7f5">리더</Tag> : ''}</div>;
};

LeaderTag.propTypes = {
  studyMembersRole: PropTypes.string,
};

export default LeaderTag;
