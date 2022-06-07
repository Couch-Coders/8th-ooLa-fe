import React from 'react';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/ui/button/Button.component';

import { Container } from './StudyCondition.style';

const StudyCondition = () => {
  return (
    <Container>
      <span>모집인원 | 3/5</span>
      <span>스터디시작 | 2022.07.01</span>
      <span>스터디 종료 | 2022.10.01</span>
      <Button buttonType={BUTTON_TYPE_CLASSES.kakao}>카카오 오픈채팅</Button>
    </Container>
  );
};

export default StudyCondition;
