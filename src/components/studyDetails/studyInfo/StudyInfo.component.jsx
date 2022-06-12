import React from 'react';
import StudyIntroduction from '../studyIntroduction/StudyIntroduction.component';
import StudyGoal from '../studyGoal/StudyGoal.component';
import { StudyInfoContainer } from './StudyInfo.style';
import Comments from '../comments/Comments.component';

const StudyInfo = ({
  studyData: { studyIntroduce, timeZone, studyType, studyGoal, studyDays },
}) => {
  return (
    <StudyInfoContainer>
      <StudyIntroduction
        studyIntroduce={studyIntroduce}
        timeZone={timeZone}
        studyType={studyType}
        studyDays={studyDays}
      />
      <StudyGoal studyGoal={studyGoal} />
      <Comments />
    </StudyInfoContainer>
  );
};

export default StudyInfo;
