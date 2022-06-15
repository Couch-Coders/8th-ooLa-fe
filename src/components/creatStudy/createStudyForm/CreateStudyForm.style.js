import styled from 'styled-components';
import Button from '../../common/ui/button/Button.component';

const InputFormContainer = styled.div`
  width: 90rem;
  padding: 4rem 10rem 6rem;
  margin: auto;

  h4 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #777777;
  }

  button {
    display: block;
    margin: auto;
    font-size: 1.8rem;
    padding: 1em 3em;
  }

  .optionNull {
    display: none;
  }

  select {
    width: 25rem;
    padding: 16px;
    font-size: 1.6rem;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
    box-shadow: rgb(17 17 26 / 10%) 0px 1px 0px;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    cursor: pointer;
  }

  input {
    padding: 16px;
    box-shadow: rgb(17 17 26 / 10%) 0px 1px 0px;
    font-size: 1.6rem;
  }

  p {
    margin-top: 1rem;
    color: #f56a00;
  }
`;

const StudyTypeInputField = styled.div`
  margin-bottom: 3rem;
`;

const StudyNameInputField = styled.div`
  margin-bottom: 3rem;
`;

const StudyScheduleInputField = styled.div`
  margin-bottom: 3rem;

  .selectContainer {
    display: flex;
  }

  select {
    margin-right: 2rem;
  }
`;

const ParticipantsInputField = styled.div`
  margin-bottom: 3rem;
`;

const StudyDateInputField = styled.div`
  display: flex;
  margin-bottom: 3rem;

  .inputDate {
    width: 25rem;
    padding: 16px;
    font-size: 1.6rem;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
    box-shadow: rgb(17 17 26 / 10%) 0px 1px 0px;
    outline: none;
    cursor: pointer;
    margin-right: 2rem;
  }
`;

const OpenChatUrlInputField = styled.div`
  margin-bottom: 3rem;
`;

const StudyIntroduceInputField = styled.div`
  margin-bottom: 3rem;
`;

const StudyGoalInputField = styled.div`
  margin-bottom: 3rem;
`;

export const StyledButton = styled(Button)`
  text-align: center;
  font-size: 1.8rem;
  padding: 1em 3em;
  display: block;
  margin: 4rem auto 0;
`;

export const style = {
  InputFormContainer,
  StudyTypeInputField,
  StudyNameInputField,
  StudyScheduleInputField,
  ParticipantsInputField,
  StudyDateInputField,
  OpenChatUrlInputField,
  StudyIntroduceInputField,
  StudyGoalInputField,
  StyledButton,
};
