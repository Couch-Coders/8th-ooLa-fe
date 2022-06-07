import React from 'react';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/ui/button/Button.component';

import { Container, Left, Right } from './StudyCondition.style';

const StudyCondition = () => {
  return (
    <Container>
      <Left>
        <h4>모집인원 | 3/5</h4>
        <h4>스터디시작 | 2022.07.01</h4>
        <h4>스터디 종료 | 2022.10.01</h4>
      </Left>
      <Right>
        <Button buttonType={BUTTON_TYPE_CLASSES.kakao}>카카오 오픈채팅</Button>
      </Right>
    </Container>
  );
};

export default StudyCondition;
