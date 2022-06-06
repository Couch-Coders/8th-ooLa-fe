import React, { Suspense } from 'react';
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
      <Suspense fallback={<div>Loading...</div>}>
        <StudyDetailHeader />
        <StudyCondition />
        <StudyDetailContent />
      </Suspense>
    </PageWrapper>
  );
};

export default StudyDetailsPage;
