import React from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '../../styles/container.style';

import StudyCondition from '../../components/studyDetails/studyCondition/StudyCondition.component';
import StudyDetailHeader from '../../components/studyDetails/studyDetailsHeader/StudyDetailsHeader.component';
import StudyDetailContent from '../../components/studyDetails/studyDetailsContent/StudyDetailsContent.component';

import { getStudyDetails } from '../../lib/apis/main';
import { useEffect } from 'react';

const StudyDetailsPage = () => {
  const { studyId } = useParams();

  useEffect(() => {
    const fetchStudyDetails = async () => {
      const studyDetails = await getStudyDetails(studyId);
      console.log(studyDetails);
    };
    fetchStudyDetails();
  }, []);

  return (
    <PageWrapper>
      <StudyDetailHeader />
      <StudyCondition />
      <StudyDetailContent />
    </PageWrapper>
  );
};

export default StudyDetailsPage;
