import React from 'react';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/ui/button/Button.component';
import { style } from './StudyCondition.style';

const StudyCondition = ({
  studyData: { participants, currentParticipants, endDate, startDate },
}) => {
  const convertedStartDate = new Date(startDate).toLocaleDateString(
    'zh-Hans-CN',
  );
  const convertedEndDate = new Date(endDate).toLocaleDateString('zh-Hans-CN');
  return (
    <Container>
      <Left>
        <h4>{`모집인원 | ${currentParticipants}/${participants}`}</h4>
        <h4>{`스터디시작 | ${convertedStartDate}`}</h4>
        <h4>{`스터디 종료 | ${convertedEndDate}`}</h4>
      </Left>
      <Right>
        <Button buttonType={BUTTON_TYPE_CLASSES.kakao}>카카오 오픈채팅</Button>
      </Right>
    </Container>
  );
};

export default StudyCondition;

const { Container, Left, Right } = style;
