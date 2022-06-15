import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/ui/button/Button.component';
import { BtnContainer } from './leaderActiveBtnGroup.style';

const LeaderActiveBtnGroup = ({ joinStatus }) => {
  const navigate = useNavigate();

  const { studyId } = useParams();
  const editStudyInfo = () => {
    navigate(`/editStudyInfo/${studyId}`);
  };

  return (
    <BtnContainer>
      {joinStatus === 'leader' ? (
        <>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={editStudyInfo}
          >
            스터디 정보 수정
          </Button>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>스터디 완료</Button>
        </>
      ) : null}
    </BtnContainer>
  );
};

export default LeaderActiveBtnGroup;
