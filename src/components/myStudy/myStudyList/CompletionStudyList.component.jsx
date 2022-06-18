import React, { useEffect, useState } from 'react';
import { getCompletionStudy } from '../../../lib/apis/myStudy';
import { Row } from 'antd';
import StudyCard from '../../common/studyCard/StudyCard.component';
import { Section } from '../../main/mainStudyList/MainStudyList.style';

const CompletionStudyList = () => {
  const [completionStudies, setCompletionStudies] = useState([]);

  async function completionStudy() {
    const response = await getCompletionStudy();
    const content = response.data;
    setCompletionStudies(content);
    console.log(content);

    return content;
  }

  useEffect(() => {
    const response = async () => await getCompletionStudy();
    response();
    completionStudy();
  }, []);

  return (
    <Section>
      <Row gutter={[40, 40]}>
        {completionStudies.map(study => (
          <StudyCard key={study.studyId} study={study} />
        ))}
      </Row>
    </Section>
  );
};
export default CompletionStudyList;
