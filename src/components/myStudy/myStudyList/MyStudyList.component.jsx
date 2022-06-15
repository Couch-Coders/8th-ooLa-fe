import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import StudyCard from '../../common/studyCard/StudyCard.component';
import { Section } from '../../main/mainStudyList/MainStudyList.style';
import { DUMMY_DATA } from '../../../dummy';

const MainStudyList = () => {
  const [studies, setStudies] = useState(DUMMY_DATA);

  return (
    <Section>
      <Row gutter={[24, 24]}>
        {studies.map(study => (
          <StudyCard key={study.studyId} study={study} />
        ))}
      </Row>
    </Section>
  );
};
export default MainStudyList;
