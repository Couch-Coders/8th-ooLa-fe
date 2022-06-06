import React, { Suspense } from 'react';
import { Title, Section } from './MyProfilePage.style';
import { PageWrapper } from '../../styles/container.style';

const ProfileForm = React.lazy(() =>
  import('../../components/myProfile/profileForm/ProfileForm.component'),
);

const MyProfilePage = () => {
  return (
    <PageWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Title>마이프로필</Title>
        <Section>
          <ProfileForm />
        </Section>
      </Suspense>
    </PageWrapper>
  );
};

export default MyProfilePage;
