import React from 'react';
import { Avatar } from 'antd';
import {
  StyledForm,
  StyledButton,
  ProfileImgContainer,
} from './ProfileForm.style';
import Profile from '../profile/Profile.component';
import ProfileInputField from '../profileInputField/ProfileInputField.component';
import TechStack from '../techStack/TechStack.component';

const ProfileForm = () => {
  return (
    <StyledForm>
      <ProfileImgContainer>
        <Avatar size={180} src="https://joeschmoe.io/api/v1/random" />
      </ProfileImgContainer>
      <Profile />
      <Profile />
      <ProfileInputField />
      <ProfileInputField />
      <ProfileInputField />
      <ProfileInputField />
      <TechStack />
      <StyledButton type="submit">완료</StyledButton>
    </StyledForm>
  );
};

export default ProfileForm;
