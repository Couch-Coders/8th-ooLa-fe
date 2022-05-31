import styled from 'styled-components';

const CreateStudyFormContainer = styled.div`
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
  display: flex;
  margin-bottom: 32px;

  .startDate {
    margin-right: 20px;
  }
`;

const OpenChatUrlInputField = styled.div`
  margin-bottom: 32px;
`;

const StudyIntroduceInputField = styled.div`
  margin-bottom: 32px;
`;

const StudyGoalInputField = styled.div`
  margin-bottom: 32px;
`;

export const style = {
  CreateStudyFormContainer,
  StudyTypeInputField,
  StudyNameInputField,
  StudyScheduleInputField,
  ParticipantsInputField,
  StudyDateInputField,
  OpenChatUrlInputField,
  StudyIntroduceInputField,
  StudyGoalInputField,
};
