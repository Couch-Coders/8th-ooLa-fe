import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../../context/Profile.context';
import { AuthContext } from '../../../context/Auth.context';
import { Avatar } from 'antd';
import {
  StyledForm,
  StyledButton,
  ProfileImgWapper,
  ProfileImgContainer,
  UrlInputFieldContainer,
} from './ProfileForm.style';
import Profile from '../profile/Profile.component';
import ProfileInputField from '../profileInputField/ProfileInputField.component';
import TechStack from '../techStack/TechStack.component';
import { signup, updateMyProfile } from '../../../lib/apis/auth';
import { auth } from '../../../service/firebase';

const ProfileForm = ({ type }) => {
  const { loginHandler } = useContext(AuthContext);

  const uid = auth.currentUser?.uid;
  const email = auth.currentUser?.email;
  const photoURL = auth.currentUser?.photoURL;

  const navigate = useNavigate();
  const profileCtx = useContext(ProfileContext);
  const {
    blogUrl,
    gitUrl,
    techStack,
    inputChangeHandler,
    clearUserProfile,
    nickname,
    selfIntroduction,
  } = profileCtx;

  const submitHandler = async event => {
    event.preventDefault();
    const submitProfile = {
      photoURL,
      email,
      blogUrl,
      githubUrl: gitUrl,

      techStack,
      nickName: nickname,
      introduce: selfIntroduction,
    };
    if (type === 'update') {
      const updateProfile = {
        ...submitProfile,
        id: uid,
      };
      const res = await updateMyProfile(updateProfile);
      console.log(res);
      if (res.status === 201) {
        clearUserProfile();
        navigate('/');
      }
    } else if (type === 'signUp') {
      const res = await signup(submitProfile);
      if (res.status === 201) {
        loginHandler();
        clearUserProfile();
        navigate('/');
      }
    }
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <ProfileImgContainer>
        <ProfileImgWapper>
          <Avatar size={180} src={photoURL} />
        </ProfileImgWapper>
      </ProfileImgContainer>
      <Profile name="이메일" value={email} />
      <ProfileInputField
        title="닉네임"
        name="nickname"
        value={nickname}
        placeholder="닉네임을 입력해 주세요"
        onChange={inputChangeHandler}
      />
      <UrlInputFieldContainer>
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
      </UrlInputFieldContainer>
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
