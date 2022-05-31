import React from 'react';
import { style } from './CreateStudyPage.style';
import CreateStudyForm from '../../components/creatStudy/createStudyForm/CreateStudyForm.component';

const CreateStudyPage = () => {
  return (
    <CreateStudyContainer>
      <TopBanner>
        <h2>스터디 만들기</h2>
        <span>ooLa와 함께 하고 싶은 스터디를 만들어보세요</span>
      </TopBanner>
      <CreateStudyForm />
    </CreateStudyContainer>
  );
};

export default CreateStudyPage;

const { CreateStudyContainer, TopBanner } = style;
