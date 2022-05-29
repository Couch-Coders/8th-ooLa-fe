import styled from 'styled-components';

const CreateStudyContainer = styled.div`
  min-width: 1100px;
`;

const TopBanner = styled.div`
  height: 150px;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fffae6;
  margin-bottom: 50px;
`;

const CreatStudyForm = styled.div`
  background-color: #eee;
  width: 800px;
  height: 100%;
  padding: 60px 100px;
  margin: auto;

  h4 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .ant-btn {
    display: block;
    margin: auto;
  }
`;

const StudyTypeInputField = styled.div`
  margin-bottom: 32px;
`;

const StudyNameInputField = styled.div`
  margin-bottom: 32px;
`;

const StudyScheduleInputField = styled.div`
  margin-bottom: 32px;

  .ant-select {
    margin-right: 20px;
  }
`;

const ParticipantsInputField = styled.div`
  margin-bottom: 32px;
`;

const StudyDateInputField = styled.div`
  margin-bottom: 32px;
`;

const OpenChatUrlInputField = styled.div`
  margin-bottom: 32px;
`;

const StudyInfoInputField = styled.div`
  margin-bottom: 60px;

  .studyIntroduce {
    margin-bottom: 32px;
  }
`;

const SubmitButtonInputField = styled.div`
  margin-bottom: 60px;

  .studyIntroduce {
    margin-bottom: 32px;
  }
`;

export const style = {
  CreateStudyContainer,
  TopBanner,
  CreatStudyForm,
  StudyNameInputField,
  StudyTypeInputField,
  StudyScheduleInputField,
  ParticipantsInputField,
  StudyDateInputField,
  OpenChatUrlInputField,
  StudyInfoInputField,
  SubmitButtonInputField,
};
