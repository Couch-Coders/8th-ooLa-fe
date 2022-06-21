import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import MyStudyCard from '../../common/myStudyCard/MyStudyCard.component';
import { Section } from '../../main/mainStudyList/MainStudyList.style';
import { getProgressStudy } from '../../../lib/apis/myStudy';

const StartStudyList = () => {
  const [progressStudies, setProgressStudies] = useState([]);

  const startStudies = progressStudies.filter(
    study => new Date(study.startDate) < new Date(),
  );

  async function progressStudy() {
    const response = await getProgressStudy();
    const content = response.data;
    setProgressStudies(content);
    console.log(content);
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
        {startStudies.map(study => (
          <MyStudyCard key={study.studyId} study={study} />
        ))}
      </Row>
    </Section>
  );
};
export default StartStudyList;
