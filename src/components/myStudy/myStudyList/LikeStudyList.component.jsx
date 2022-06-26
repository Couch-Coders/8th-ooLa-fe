/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getLikeStudy } from '../../../lib/apis/myStudy';
import { Row } from 'antd';
import MyStudyCard from '../../common/myStudyCard/MyStudyCard.component';
import { Section } from '../../main/mainStudyList/MainStudyList.style';

const LikeStudyList = () => {
  const [likeStudies, setLikeStudies] = useState([]);

  async function likeStudy() {
    const response = await getLikeStudy();
    const content = response.data;
    setLikeStudies(content);
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
          <MyStudyCard key={study.studyId} study={study} />
        ))}
      </Row>
    </Section>
  );
};
export default LikeStudyList;
