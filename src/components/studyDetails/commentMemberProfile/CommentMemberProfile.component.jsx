import React from 'react';
import { Avatar } from 'antd';
import { ProfileContainer, Nickname } from './CommentMemberProfile.style';
import LeaderTag from '../leaderTag/LeaderTag.component';

import PropTypes from 'prop-types';

const CommentMemberProfile = ({ nickname, photoUrl }) => {
  return (
    <ProfileContainer>
      <Avatar size={45} src={photoUrl} />
      <Nickname>{nickname}nickname</Nickname>
      <LeaderTag />
    </ProfileContainer>
  );
};

CommentMemberProfile.propTypes = {
  nickname: PropTypes.string,
  photoUrl: PropTypes.string,
};

export default CommentMemberProfile;
