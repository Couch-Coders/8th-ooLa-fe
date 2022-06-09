import React from 'react';
import { PageWrapper } from '../../styles/container.style';

const StudyCondition = React.lazy(() =>
  import(
    '../../components/studyDetails/studyCondition/StudyCondition.component'
  ),
);
const StudyDetailHeader = React.lazy(() =>
  import(
    '../../components/studyDetails/studyDetailsHeader/StudyDetailsHeader.component'
  ),
);
const StudyDetailContent = React.lazy(() =>
  import(
    '../../components/studyDetails/studyDetailsContent/StudyDetailsContent.component'
  ),
);

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
