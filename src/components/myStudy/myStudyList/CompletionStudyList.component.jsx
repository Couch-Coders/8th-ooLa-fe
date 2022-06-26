import React, { useEffect, useState } from 'react';
import { getCompletionStudy } from '../../../lib/apis/myStudy';
import { Row } from 'antd';
import MyStudyCard from '../../common/myStudyCard/MyStudyCard.component';
import { Section } from '../../main/mainStudyList/MainStudyList.style';

const CompletionStudyList = () => {
  const [completionStudies, setCompletionStudies] = useState([]);

  async function completionStudy() {
    const response = await getCompletionStudy();
    const content = response.data;
    setCompletionStudies(content);

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
          <MyStudyCard key={study.studyId} study={study} />
        ))}
      </Row>
    </Section>
  );
};
export default CompletionStudyList;
