import React from 'react';
import { ProfileContainer, ProfileTitle, ProfileValue } from './Profile.style';
import PropTypes from 'prop-types';

const Profile = ({ name, value }) => {
  return (
    <ProfileContainer>
      <ProfileTitle>{name}</ProfileTitle>
      <ProfileValue>{value}</ProfileValue>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Profile;
