import React from 'react';
import { style } from './MyStudyList.style';
import { Row } from 'antd';

import StudyItem from '../studyItem/StudyItem.component';

const StudyList = () => {
  return (
    <StudyListContainer>
      <Row gutter={[24, 24]}>
        <StudyItem />
        <StudyItem />
        <StudyItem />
      </Row>
    </StudyListContainer>
  );
};

export default StudyList;

const { StudyListContainer } = style;
