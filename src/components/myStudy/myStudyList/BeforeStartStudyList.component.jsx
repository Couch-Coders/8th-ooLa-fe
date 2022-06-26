/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import MyStudyCard from '../../common/myStudyCard/MyStudyCard.component';
import { Section } from '../../main/mainStudyList/MainStudyList.style';
import { getProgressStudy } from '../../../lib/apis/myStudy';

const BeforeStartStudyList = () => {
  const [progressStudies, setProgressStudies] = useState([]);

  const beforeStartStudies = progressStudies.filter(
    study =>
      new Date(study.startDate) > new Date() &&
      study.currentParticipants < study.participants,
  );

  async function progressStudy() {
    const response = await getProgressStudy();
    const content = response.data;
    setProgressStudies(content);

    return content;
  }

  useEffect(() => {
    const response = async () => await getProgressStudy();
    response();
    progressStudy();
  }, []);

  return (
    <Section>
      <Row gutter={[40, 40]}>
        {beforeStartStudies.map(study => (
          <MyStudyCard key={study.studyId} study={study} />
        ))}
      </Row>
    </Section>
  );
};
export default BeforeStartStudyList;
