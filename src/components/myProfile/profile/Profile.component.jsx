import React from 'react';
import { ProfileContainer, ProfileTitle } from './Profile.style';
import { StyledInput } from '../profileInputField/ProfileInputField.style';
import PropTypes from 'prop-types';

const Profile = ({ name, value }) => {
  return (
    <ProfileContainer>
      <ProfileTitle>{name}</ProfileTitle>
      <StyledInput disabled={true} value={value} />
    </ProfileContainer>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Profile;
