/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { Fragment, useEffect, useContext, useState } from 'react';
import { ProfileContext } from '../../context/Profile.context';
import { useParams } from 'react-router-dom';
import { Section } from './MyProfilePage.style';
import { PageWrapper } from '../../styles/container.style';
import TopBanner from '../../components/common/layout/topBanner/TopBanner.component';
import ProfileForm from '../../components/myProfile/profileForm/ProfileForm.component';
import { fetchMyProfile } from '../../lib/apis/auth';

const MyProfilePage = () => {
  const [uid, setUid] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { fetchUserProfile } = useContext(ProfileContext);
  const { type } = useParams();

  useEffect(() => {
    if (type === 'update') {
      fetchMyProfile().then(res => {
        const memberData = res.data;
        const profileObj = {
          nickname: memberData.nickName,
          blogUrl: memberData.blogUrl,
          gitUrl: memberData.githubUrl,
          selfIntroduction: memberData.introduce,
          techStack: memberData.techStack,
        };
        const memberUid = memberData.uid;
        setUid(memberUid);
        fetchUserProfile(profileObj);
      });
    }
    setIsLoading(false);
  }, []);

  return (
    <Fragment>
      {!isLoading && (
        <>
          <TopBanner title="마이프로필" info="ooLa와 함께하는 스터디" />
          <PageWrapper>
            <Section>
              <ProfileForm type={type} memberUid={uid} />
            </Section>
          </PageWrapper>
        </>
      )}
    </Fragment>
  );
};

export default MyProfilePage;
