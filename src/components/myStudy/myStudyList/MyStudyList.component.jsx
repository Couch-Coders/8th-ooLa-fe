import React from 'react';
import { style } from './MyStudyList.style';

import StudyItem from '../studyItem/StudyItem.component';

const StudyList = () => {
  return (
    <StudyListContainer>
      <StudyItem />
      <StudyItem />
      <StudyItem />
    </StudyListContainer>
  );
};

export default StudyList;

const { StudyListContainer } = style;
