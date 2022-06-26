import React from 'react';
import { style } from './CreateStudyPage.style';
import TopBanner from '../../components/common/layout/topBanner/TopBanner.component';
import CreateStudyForm from '../../components/creatStudy/createStudyForm/CreateStudyForm.component';

const CreateStudyPage = () => {
  return (
    <CreateStudyContainer>
      <TopBanner
        title="스터디 만들기"
        info="ooLa와 함께하고 싶은 스터디를 만들어 보세요"
      />
      <CreateStudyForm />
    </CreateStudyContainer>
  );
};

export default CreateStudyPage;

const { CreateStudyContainer } = style;
