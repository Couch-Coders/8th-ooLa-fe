import React, { useEffect, useState } from 'react';

import { Row } from 'antd';
import StudyCard from '../../common/studyCard/StudyCard.component';
import { Section, ToggleContainer, ToggleText } from './MainStudyList.style';
import Toggle from '../toggle/Toggle.component';
import { DUMMY_DATA } from '../../../dummy';

const recruitingFilter = allStudies => {
  return allStudies.filter(
    study =>
      new Date(study.startDate) > new Date() &&
      study.currentParticipants < study.participants,
  );
};

const MainStudyList = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);
  const [studies, setStudies] = useState([]);

  const toggleHandler = () => setIsToggleOn(state => !state);

  useEffect(() => {
    if (isToggleOn) {
      const recruitingStudies = recruitingFilter(DUMMY_DATA);
      setStudies(recruitingStudies);
    } else {
      setStudies(DUMMY_DATA);
    }
  }, [isToggleOn]);

  return (
    <Section>
      <ToggleContainer>
        <ToggleText>
          {isToggleOn ? 'NOW 스터디 진행중' : '모든 스터디'}
        </ToggleText>
        <Toggle toggleHandler={toggleHandler} />
      </ToggleContainer>
      <Row gutter={[40, 40]}>
        {studies.map(study => (
          <StudyCard key={study.studyId} study={study} />
        ))}
      </Row>
    </Section>
  );
};
export default MainStudyList;
