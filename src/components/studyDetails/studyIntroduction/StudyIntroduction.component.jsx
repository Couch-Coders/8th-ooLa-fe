import React from 'react';
import StudyTag from '../../common/studyTag/StudyTag.component';

import {
  StudyIntroductionTitle,
  StudyIntroductionContent,
  TagContainer,
} from './StudyIntroduction.style';

const StudyIntroduction = ({
  studyIntroduce,
  timeZone,
  studyType,
  studyDays,
}) => {
  return (
    <div>
      <StudyIntroductionContent>
        <StudyIntroductionTitle>스터디 소개</StudyIntroductionTitle>
        <TagContainer>
          <StudyTag content={timeZone} key={timeZone} type="timeZone" />
          <StudyTag content={studyType} key={studyType} type="studyType" />
          <StudyTag content={studyDays} key={studyDays} type="studyDays" />
        </TagContainer>
        <p>{studyIntroduce}</p>
      </StudyIntroductionContent>
    </div>
  );
};
export default StudyIntroduction;
