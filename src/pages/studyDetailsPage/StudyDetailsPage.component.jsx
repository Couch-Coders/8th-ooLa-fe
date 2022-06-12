import React, { useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { PageWrapper } from '../../styles/container.style';

import StudyCondition from '../../components/studyDetails/studyCondition/StudyCondition.component';
import StudyDetailHeader from '../../components/studyDetails/studyDetailsHeader/StudyDetailsHeader.component';
import StudyDetailContent from '../../components/studyDetails/studyDetailsContent/StudyDetailsContent.component';

import { getStudyDetails } from '../../lib/apis/main';
import { useEffect } from 'react';

const StudyDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [studyData, setStudyData] = useState();
  const { studyId } = useParams();

  useEffect(() => {
    const fetchStudyDetails = async () => {
      const response = await getStudyDetails(studyId);
      const data = response.data;
      setStudyData(data);
      console.log(data);
      setIsLoading(false);
    };
    fetchStudyDetails();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!isLoading && (
        <PageWrapper>
          <StudyDetailHeader studyData={studyData} />
          <StudyCondition studyData={studyData} />
          <StudyDetailContent studyData={studyData} />
        </PageWrapper>
      )}
    </>
  );
};

export default StudyDetailsPage;
