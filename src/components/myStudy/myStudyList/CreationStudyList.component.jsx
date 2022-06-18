import React, { useEffect, useState } from 'react';
import { getCreationStudy } from '../../../lib/apis/myStudy';
import { Row } from 'antd';
import StudyCard from '../../common/studyCard/StudyCard.component';
import { Section } from '../../main/mainStudyList/MainStudyList.style';

const CreationStudyList = () => {
  const [creationStudies, setCreationStudies] = useState([]);

  async function creationStudy() {
    const response = await getCreationStudy();
    const content = response.data;
    setCreationStudies(content);
    console.log(content);
    return content;
  }

  useEffect(() => {
    const response = async () => await getCreationStudy();
    response();
    creationStudy();
  }, []);

  return (
    <Section>
      <Row gutter={[40, 40]}>
        {creationStudies.map(study => (
          <StudyCard key={study.studyId} study={study} />
        ))}
      </Row>
    </Section>
  );
};
export default CreationStudyList;
