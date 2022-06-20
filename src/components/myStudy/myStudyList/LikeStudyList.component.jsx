import React, { useEffect, useState } from 'react';
import { getLikeStudy } from '../../../lib/apis/myStudy';
import { Row } from 'antd';
import StudyCard from '../../common/studyCard/StudyCard.component';
import { Section } from '../../main/mainStudyList/MainStudyList.style';

const LikeStudyList = () => {
  const [likeStudies, setLikeStudies] = useState([]);

  async function likeStudy() {
    const response = await getLikeStudy();
    const content = response.data;
    setLikeStudies(content);
    console.log(content);
    return content;
  }

  useEffect(() => {
    const response = async () => await getLikeStudy();
    response();
    likeStudy();
  }, []);

  return (
    <Section>
      <Row gutter={[40, 40]}>
        {likeStudies.map(study => (
          <StudyCard key={study.studyId} study={study} />
        ))}
      </Row>
    </Section>
  );
};
export default LikeStudyList;
