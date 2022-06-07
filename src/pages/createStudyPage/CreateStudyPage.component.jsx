import React, { Suspense } from 'react';
import { style } from './CreateStudyPage.style';
import TopBanner from '../../components/common/layout/topBanner/TopBanner.component';

const CreateStudyForm = React.lazy(() =>
  import(
    '../../components/creatStudy/createStudyForm/CreateStudyForm.component'
  ),
);

const CreateStudyPage = value => {
  return (
    <CreateStudyContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <TopBanner
          title="스터디만들기"
          info="ooLa와 함께하고 싶은 스터디를 만들어 보세요"
        />
        <CreateStudyForm />
      </Suspense>
    </CreateStudyContainer>
  );
};

export default CreateStudyPage;

const { CreateStudyContainer } = style;
