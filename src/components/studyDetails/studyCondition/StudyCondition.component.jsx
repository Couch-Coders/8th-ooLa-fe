import React, { useContext } from 'react';
import { StudyDetailsContext } from '../../../context/studyDetails.context';
import { AuthContext } from '../../../context/Auth.context';
import { useParams } from 'react-router-dom';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/ui/button/Button.component';
import { style } from './StudyCondition.style';
import { postApplyStudy } from '../../../lib/apis/main';

const StudyCondition = () => {
  const {
    studyData: { participants, endDate, startDate, openChatUrl },
    currentRole,
    setCurrentRole,
    setCurrentMemberCount,
    currentMemberCount,
    isStudyFinshed,
  } = useContext(StudyDetailsContext);

  const { showModal, user } = useContext(AuthContext);

  const { studyId } = useParams();
  const convertedStartDate = new Date(startDate).toLocaleDateString(
    'zh-Hans-CN',
  );
  const convertedEndDate = new Date(endDate).toLocaleDateString('zh-Hans-CN');

  const studyApplyHadnler = async () => {
    if (!user) {
      showModal();
      return;
    }
    const response = await postApplyStudy(studyId);
    console.log(response);
    if (response.status === 201) {
      setCurrentRole('member');
      setCurrentMemberCount(prev => prev + 1);
    }
  };
  const kakaoLinkHadnler = () => window.open(openChatUrl, '_blank');

  return (
    <Container>
      <Left>
        <h4>{`모집인원 | ${currentMemberCount}/${participants}`}</h4>
        <h4>{`스터디시작 | ${convertedStartDate}`}</h4>
        <h4>{`스터디 종료 | ${convertedEndDate}`}</h4>
      </Left>
      <Right>
        {currentRole === 'general' ? (
          <Button
            buttonType={BUTTON_TYPE_CLASSES.filled}
            onClick={studyApplyHadnler}
            disabled={isStudyFinshed}
          >
            스터디 신청
          </Button>
        ) : (
          <Button
            buttonType={BUTTON_TYPE_CLASSES.kakao}
            disabled={isStudyFinshed}
            onClick={kakaoLinkHadnler}
          >
            카카오 오픈채팅
          </Button>
        )}
      </Right>
    </Container>
  );
};

export default StudyCondition;

const { Container, Left, Right } = style;
