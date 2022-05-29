import React from 'react';
import { style } from './MyStudyList.style';

import MyStudyItem from '../common/layout/studyItem/StudyItem.component';

const StudyList = () => {
  return (
    <StudyListContainer>
      <MyStudyItem />
      <MyStudyItem />
      <MyStudyItem />
    </StudyListContainer>
  );
};

export default StudyList;

const { StudyListContainer } = style;
