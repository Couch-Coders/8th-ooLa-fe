import React from 'react';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/ui/button/Button.component';
import { BtnContainer } from './leaderActiveBtnGroup.style';

const LeaderActiveBtnGroup = ({ joinStatus }) => {
  return (
    <BtnContainer>
      {joinStatus === 'leader' ? (
        <>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
            스터디 정보 수정
          </Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>스터디 완료</Button>
        </>
      ) : null}
    </BtnContainer>
  );
};

export default LeaderActiveBtnGroup;
