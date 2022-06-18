import React, { useContext, useEffect } from 'react';
import { StudyDetailsContext } from '../../context/studyDetails.context';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '../../styles/container.style';

import StudyCondition from '../../components/studyDetails/studyCondition/StudyCondition.component';
import StudyDetailHeader from '../../components/studyDetails/studyDetailsHeader/StudyDetailsHeader.component';
import StudyDetailContent from '../../components/studyDetails/studyDetailsContent/StudyDetailsContent.component';

const StudyDetailsPage = () => {
  const { studyId } = useParams();
  const { isLoading, studyDetailsHandler } = useContext(StudyDetailsContext);

  useEffect(() => {
    const fetchStudyDetails = async () => await studyDetailsHandler(studyId);
    fetchStudyDetails();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!isLoading && (
        <PageWrapper>
          <StudyDetailHeader />
          <StudyCondition />
          <StudyDetailContent />
        </PageWrapper>
      )}
    </>
  );
};

export default StudyDetailsPage;
