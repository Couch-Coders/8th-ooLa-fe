import React from 'react';
import { PageWrapper } from '../../styles/container.style';

import StudyCondition from '../../components/studyDetails/studyCondition/StudyCondition.component';
import StudyDetailHeader from '../../components/studyDetails/studyDetailsHeader/StudyDetailsHeader.component';
import StudyDetailContent from '../../components/studyDetails/studyDetailsContent/StudyDetailsContent.component';

const StudyDetailsPage = () => {
  return (
    <PageWrapper>
      <StudyDetailHeader />
      <StudyCondition />
      <StudyDetailContent />
    </PageWrapper>
  );
};

export default StudyDetailsPage;
