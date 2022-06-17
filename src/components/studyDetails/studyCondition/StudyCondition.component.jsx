import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/ui/button/Button.component';
import { style } from './StudyCondition.style';
import { postApplyStudy } from '../../../lib/apis/main';

const StudyCondition = ({
  studyData: {
    participants,
    currentParticipants,
    endDate,
    startDate,
    role,
    openChatUrl,
  },
}) => {
  const [currentRole, setCurrentRole] = useState(role);
  const { studyId } = useParams();
  const convertedStartDate = new Date(startDate).toLocaleDateString(
    'zh-Hans-CN',
  );
  const convertedEndDate = new Date(endDate).toLocaleDateString('zh-Hans-CN');

  const studyApplyHadnler = async () => {
    const response = await postApplyStudy(studyId);
    console.log(response);
  };

  return (
    <Container>
      <Left>
        <h4>{`모집인원 | ${currentParticipants}/${participants}`}</h4>
        <h4>{`스터디시작 | ${convertedStartDate}`}</h4>
        <h4>{`스터디 종료 | ${convertedEndDate}`}</h4>
      </Left>
      <Right>
        {currentRole === 'general' ? (
          <Button
            buttonType={BUTTON_TYPE_CLASSES.filled}
            onClick={studyApplyHadnler}
          >
            스터디 신청
          </Button>
        ) : (
          <Button buttonType={BUTTON_TYPE_CLASSES.kakao}>
            <a target="_blank" href={openChatUrl} rel="noreferrer">
              카카오 오픈채팅
            </a>
          </Button>
        )}
      </Right>
    </Container>
  );
};

export default StudyCondition;

const { Container, Left, Right } = style;
