import React, { useContext } from 'react';
import { ProfileContext } from '../../../context/Profile.context';
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
  const profileCtx = useContext(ProfileContext);
  const {
    name,
    email,
    blogUrl,
    gitUrl,
    techStack,
    inputChangeHandler,
    nickname,
    selfIntroduction,
  } = profileCtx;

  const submitHandler = event => {
    event.preventDefault();
    const submitProfile = {
      name,
      email,
      blogUrl,
      gitUrl,
      techStack,
      nickname,
      selfIntroduction,
    };
    console.log(submitProfile);
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <ProfileImgContainer>
        <Avatar size={180} src="https://joeschmoe.io/api/v1/random" />
      </ProfileImgContainer>
      <Profile name="이름" value={name} />
      <Profile name="이메일" value={email} />
      <ProfileInputField
        title="닉네임"
        name="nickname"
        value={nickname}
        placeholder="닉네임을 입력해 주세요"
        onChange={inputChangeHandler}
      />
      <ProfileInputField
        title="기술블로그 주소"
        name="blogUrl"
        value={blogUrl}
        placeholder="https://velog.io/memver"
        onChange={inputChangeHandler}
      />
      <ProfileInputField
        title="깃허브 주소"
        name="gitUrl"
        value={gitUrl}
        placeholder="https://velog.io/memver"
        onChange={inputChangeHandler}
      />
      <ProfileInputField
        title="자기소개"
        name="selfIntroduction"
        value={selfIntroduction}
        placeholder="자기소개를 해주세요"
        onChange={inputChangeHandler}
      />
      <TechStack />
      <StyledButton type="submit">완료</StyledButton>
    </StyledForm>
  );
};

export default ProfileForm;
