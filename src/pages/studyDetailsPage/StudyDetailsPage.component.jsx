import React, { useContext, useEffect } from 'react';
import { StudyDetailsContext } from '../../context/studyDetails.context';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '../../styles/container.style';
import Loding from '../../components/common/ui/loding/Loding.component';

import StudyCondition from '../../components/studyDetails/studyCondition/StudyCondition.component';
import StudyDetailHeader from '../../components/studyDetails/studyDetailsHeader/StudyDetailsHeader.component';
import StudyDetailContent from '../../components/studyDetails/studyDetailsContent/StudyDetailsContent.component';

const StudyDetailsPage = () => {
  const { studyId } = useParams();
  const { studyDetailsHandler, isLoading } = useContext(StudyDetailsContext);

  useEffect(() => {
    const fetchStudyDetails = async () => await studyDetailsHandler(studyId);
    fetchStudyDetails();
  }, []);

  return (
    <PageWrapper>
      {!isLoading ? (
        <>
          <StudyDetailHeader />
          <StudyCondition />
          <StudyDetailContent />
        </>
      ) : (
        <Loding />
      )}
    </PageWrapper>
  );
};
export default StudyDetailsPage;
