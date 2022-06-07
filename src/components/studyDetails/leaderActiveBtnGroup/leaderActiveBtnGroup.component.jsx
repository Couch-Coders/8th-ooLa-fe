import React from 'react';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/ui/button/Button.component';
import { BtnContainer } from './leaderActiveBtnGroup.style';

const LeaderActiveBtnGroup = () => {
  return (
    <BtnContainer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
        스터디 정보 수정
      </Button>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>스터디 완료</Button>
    </BtnContainer>
  );
};

export default LeaderActiveBtnGroup;
