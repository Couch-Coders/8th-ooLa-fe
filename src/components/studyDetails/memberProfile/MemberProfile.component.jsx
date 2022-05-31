import React from 'react';
import { Avatar } from 'antd';
import { ProfileContainer, Nickname } from './MemberProfile.style';

import PropTypes from 'prop-types';

const MemberProfile = ({ nickname, photoUrl }) => {
  return (
    <ProfileContainer>
      <Avatar size={100} src={photoUrl} />
      <Nickname>{nickname}</Nickname>
    </ProfileContainer>
  );
};

MemberProfile.propTypes = {
  nickname: PropTypes.string,
  photoUrl: PropTypes.string,
};

export default MemberProfile;
