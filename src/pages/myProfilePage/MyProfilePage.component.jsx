import React from 'react';
import { PageWrapper, Title, Section } from './MyProfilePage.style';
import ProfileForm from '../../components/myProfile/profileForm/ProfileForm.component';

const MyProfilePage = () => {
  return (
    <PageWrapper>
      <Title>마이프로필</Title>
      <Section>
        <ProfileForm />
      </Section>
    </PageWrapper>
  );
};

export default MyProfilePage;
