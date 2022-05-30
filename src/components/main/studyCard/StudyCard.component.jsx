import React from 'react';
import { Col, Card } from 'antd';
import LikeIcon from '../likeIcon/LikeIcon.component';

const StudyCard = () => {
  return (
    <Col span={8}>
      <Card>
        <LikeIcon />
        <span>2022-05-30</span>
        <h4>스터디 이름</h4>
        <div>
          <span>스트디 타입</span>
          <span>현재인원/모집인원</span>
        </div>
      </Card>
    </Col>
  );
};

export default StudyCard;
