import React, { useContext } from 'react';
import { StudyDetailsContext } from '../../../context/studyDetails.context';
import { useNavigate, useParams } from 'react-router-dom';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/ui/button/Button.component';
import { BtnContainer } from './leaderActiveBtnGroup.style';

import { getStudyDetails, patchFinishStudy } from '../../../lib/apis/main';

const LeaderActiveBtnGroup = () => {
  const navigate = useNavigate();

  const { currentRole } = useContext(StudyDetailsContext);

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
    console.log(updateStudyData);
    const response = await patchFinishStudy(studyId, updateStudyData);
    console.log(response);
  };

  return (
    <BtnContainer>
      {currentRole === 'leader' ? (
        <>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={editStudyInfo}
          >
            스터디 정보 수정
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={finishStudyHandler}
          >
            스터디 완료
          </Button>
        </>
      ) : null}
    </BtnContainer>
  );
};

export default LeaderActiveBtnGroup;
