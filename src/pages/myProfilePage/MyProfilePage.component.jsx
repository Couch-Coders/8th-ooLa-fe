import React, { Suspense } from 'react';
import { Section } from './MyProfilePage.style';
import { PageWrapper } from '../../styles/container.style';
import TopBanner from '../../components/common/layout/topBanner/TopBanner.component';

const ProfileForm = React.lazy(() =>
  import('../../components/myProfile/profileForm/ProfileForm.component'),
);

const MyProfilePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TopBanner title="마이프로필" info="ooLa와 함께하는 스터디" />
      <PageWrapper>
        <Section>
          <ProfileForm />
        </Section>
      </PageWrapper>
    </Suspense>
  );
};

export default MyProfilePage;
