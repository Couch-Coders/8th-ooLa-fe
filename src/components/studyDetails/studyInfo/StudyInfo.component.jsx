import React, { useContext } from 'react';
import { AuthContext } from '../../../context/Auth.context';
import StudyIntroduction from './studyIntroduction/StudyIntroduction.component';
import StudyGoal from './studyGoal/StudyGoal.component';
import { StudyInfoContainer } from './StudyInfo.style';
import Comments from '../comments/Comments.component';

const StudyInfo = () => {
  const { user } = useContext(AuthContext);

  return (
    <StudyInfoContainer>
      <StudyIntroduction />
      <StudyGoal />
      {user ? <Comments /> : null}
    </StudyInfoContainer>
  );
};

export default StudyInfo;
