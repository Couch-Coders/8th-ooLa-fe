import React, { Fragment } from 'react';
import { Section } from './MyProfilePage.style';
import { PageWrapper } from '../../styles/container.style';
import TopBanner from '../../components/common/layout/topBanner/TopBanner.component';

const ProfileForm = React.lazy(() =>
  import('../../components/myProfile/profileForm/ProfileForm.component'),
);

const MyProfilePage = () => {
  return (
    <Fragment>
      <TopBanner title="마이프로필" info="ooLa와 함께하는 스터디" />
      <PageWrapper>
        <Section>
          <ProfileForm />
        </Section>
      </PageWrapper>
    </Fragment>
  );
};

export default MyProfilePage;
