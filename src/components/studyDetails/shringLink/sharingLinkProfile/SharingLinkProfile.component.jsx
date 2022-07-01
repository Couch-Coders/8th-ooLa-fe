import React from 'react';
import { Avatar } from 'antd';
import {
  ProfileContainer,
  Nickname,
  AvatarContainer,
} from './SharingLinkProfile.style';

import PropTypes from 'prop-types';

const SharingLinkProfile = ({ nickname, photoUrl }) => {
  return (
    <ProfileContainer>
      <AvatarContainer>
        <Avatar size={70} src={photoUrl} />
      </AvatarContainer>
      <Nickname>{nickname}</Nickname>
    </ProfileContainer>
  );
};

SharingLinkProfile.propTypes = {
  nickname: PropTypes.string,
  photoUrl: PropTypes.string,
};

export default SharingLinkProfile;
