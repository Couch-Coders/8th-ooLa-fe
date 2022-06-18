import React, { useContext } from 'react';
import { StudyDetailsContext } from '../../../context/studyDetails.context';
import StudyTag from '../../common/studyTag/StudyTag.component';

import {
  StudyIntroductionTitle,
  StudyIntroductionContent,
  TagContainer,
} from './StudyIntroduction.style';

const StudyIntroduction = () => {
  const {
    studyData: { studyIntroduce, timeZone, studyType, studyDays },
  } = useContext(StudyDetailsContext);
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
