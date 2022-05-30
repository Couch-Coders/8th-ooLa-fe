import React from 'react';
import StudyDetailBtn from '../studyDetailsBtn/StudyDetailsBtn.component';

import { Container } from './StudyCondition.style';

const StudyCondition = () => {
  return (
    <Container>
      <span>모집인원 | 3/5</span>
      <span>스터디시작 | 2022.07.01</span>
      <span>스터디 종료 | 2022.10.01</span>
      <StudyDetailBtn />
    </Container>
  );
};

export default StudyCondition;
