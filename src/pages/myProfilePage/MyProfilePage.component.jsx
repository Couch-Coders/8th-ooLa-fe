import React from 'react';
<<<<<<< HEAD

const MyProfilePage = () => {
  return <div>MyProfilePage</div>;
=======
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
>>>>>>> b5bca4b8fc7468da1b8f662e08a24b573c0a9e2e
};

export default MyProfilePage;
