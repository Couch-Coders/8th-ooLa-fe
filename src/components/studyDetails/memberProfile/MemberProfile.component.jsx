import React from 'react';
import { Avatar } from 'antd';
import {
  ProfileContainer,
  Nickname,
  ProfileImgContainer,
} from './MemberProfile.style';

import PropTypes from 'prop-types';

const MemberProfile = ({ nickname, photoUrl }) => {
  return (
    <ProfileContainer>
      <ProfileImgContainer>
        <Avatar size={100} src={photoUrl} />
      </ProfileImgContainer>
      <Nickname>{nickname}</Nickname>
    </ProfileContainer>
  );
};

MemberProfile.propTypes = {
  nickname: PropTypes.string,
  photoUrl: PropTypes.string,
};

export default MemberProfile;
