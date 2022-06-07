import styled from 'styled-components';

const CreateStudyFormContainer = styled.div`
  background-color: #f1f3f5;
  width: 90rem;
  padding: 6rem 10rem;
  margin: auto;

  h4 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.8rem;
  }

  button {
    display: block;
    margin: auto;
  }
`;

const StudyTypeInputField = styled.div`
  margin-bottom: 4rem;
`;

const StudyNameInputField = styled.div`
  margin-bottom: 4rem;
`;

const StudyScheduleInputField = styled.div`
  margin-bottom: 4rem;

  .ant-select {
    margin-right: 2rem;
  }
`;

const ParticipantsInputField = styled.div`
  margin-bottom: 4rem;
`;

const StudyDateInputField = styled.div`
  display: flex;
  margin-bottom: 4rem;

  .startDate {
    margin-right: 2rem;
  }
`;

const OpenChatUrlInputField = styled.div`
  margin-bottom: 4rem;
`;

const StudyIntroduceInputField = styled.div`
  margin-bottom: 4rem;
`;

const StudyGoalInputField = styled.div`
  margin-bottom: 4rem;
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
