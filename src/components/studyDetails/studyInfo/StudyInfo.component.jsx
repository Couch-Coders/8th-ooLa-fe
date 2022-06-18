import React from 'react';
import StudyIntroduction from '../studyIntroduction/StudyIntroduction.component';
import StudyGoal from '../studyGoal/StudyGoal.component';
import { StudyInfoContainer } from './StudyInfo.style';
import Comments from '../comments/Comments.component';

const StudyInfo = () => {
  return (
    <StudyInfoContainer>
      <StudyIntroduction />
      <StudyGoal />
      <Comments />
    </StudyInfoContainer>
  );
};

export default StudyInfo;
