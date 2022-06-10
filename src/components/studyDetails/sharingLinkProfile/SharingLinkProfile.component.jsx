import React from 'react';
import {
  ProfileContainer,
  Nickname,
  StyledAvatar,
} from './SharingLinkProfile.style';

import PropTypes from 'prop-types';

const SharingLinkProfile = ({ nickname, photoUrl }) => {
  return (
    <ProfileContainer>
      <StyledAvatar size={55} src={photoUrl} />
      <Nickname>{nickname}</Nickname>
    </ProfileContainer>
  );
};

SharingLinkProfile.propTypes = {
  nickname: PropTypes.string,
  photoUrl: PropTypes.string,
};

export default SharingLinkProfile;
