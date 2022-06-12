import React from 'react';
import { style } from '../studyIntroduction/StudyIntroduction.style';

const StudyGoal = ({ studyGoal }) => {
  return (
    <StudyIntroductionContent>
      <StudyIntroductionTitle>스터디 목표</StudyIntroductionTitle>
      <p>우리 스터디는 이런 활동을 할 거에요!</p>
      <p>{studyGoal}</p>
    </StudyIntroductionContent>
  );
};

export default StudyGoal;

const { StudyIntroductionTitle, StudyIntroductionContent } = style;
