import React, { useContext } from 'react';
import { StudyDetailsContext } from '../../../../context/studyDetails.context';
import { useNavigate, useParams } from 'react-router-dom';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../../common/ui/button/Button.component';
import { BtnContainer } from './leaderActiveBtnGroup.style';

import { getStudyDetails, patchFinishStudy } from '../../../../lib/apis/main';

const LeaderActiveBtnGroup = () => {
  const navigate = useNavigate();

  const { currentRole, isStudyFinshed, setIsStudyFinished } =
    useContext(StudyDetailsContext);

  const { studyId } = useParams();
  const editStudyInfo = () => {
    navigate(`/editStudyInfo/${studyId}`);
  };

  const finishStudyHandler = async () => {
    const studyresponse = await getStudyDetails(studyId);
    const studyData = studyresponse.data;
    const endDate = studyData.endDate;
    const startDate = studyData.startDate;
    const convertedEndDate =
      endDate.split('T')[0] + ' ' + endDate.split('T')[1];
    const convertedStartDate =
      startDate.split('T')[0] + ' ' + startDate.split('T')[1];
    const updateStudyData = {
      ...studyData,
      status: '완료',
      endDate: convertedEndDate,
      startDate: convertedStartDate,
    };
    const response = await patchFinishStudy(studyId, updateStudyData);
    if (response.status === 200) {
      setIsStudyFinished(true);
    }
  };

  return (
    <BtnContainer>
      {currentRole === 'leader' ? (
        <>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={editStudyInfo}
            disabled={isStudyFinshed}
          >
            스터디 정보 수정
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={finishStudyHandler}
            disabled={isStudyFinshed}
          >
            스터디 종료
          </Button>
        </>
      ) : null}
    </BtnContainer>
  );
};

export default LeaderActiveBtnGroup;
