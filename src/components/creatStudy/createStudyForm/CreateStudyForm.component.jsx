import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import { style } from './CreateStudyForm.style';
import ModalToCountDown from '../../common/ui/modal/ModalToCountDown.component';
import PropTypes from 'prop-types';
import UseStudyInput from '../../../hooks/useStudyInput';
import { createStudy } from '../../../lib/apis/createStudy';
import { auth } from '../../../service/firebase';

const isNotEmpty = value => value.trim() !== '';
const isUrl = value => value.includes('https://open.kakao.com/');

const CreateStudyForm = () => {
  const navigate = useNavigate();
  const { TextArea } = Input;
  const today = new Date().toISOString().substring(0, 10);

  const studyTypeList = [
    'CS 지식',
    '알고리즘/자료구조',
    '기술면접',
    '백엔드',
    '프론트엔드',
    '모바일',
  ];

  const studyDaysList = ['미정', '주중', '주말'];

  const studyTimeZoneList = [
    '미정',
    '오전 (6:00 - 12:00)',
    '오후 (12:00 - 16:00)',
    '저녁 (18:00 - 24:00)',
  ];

  const {
    value: studyTypeValue,
    isValid: studyTypeIsValid,
    hasError: studyTypeHasError,
    valueChangeHandler: studyTypeChangeHandler,
    inputBlurHandler: studyTypeBlurHandler,
    reset: resetStudyTypeInput,
  } = UseStudyInput(isNotEmpty);

  const {
    value: studyNameValue,
    isValid: studyNameIsValid,
    hasError: studyNameHasError,
    valueChangeHandler: studyNameChangeHandler,
    inputBlurHandler: studyNameBlurHandler,
    reset: resetStudyNameInput,
  } = UseStudyInput(isNotEmpty);

  const {
    value: studyDaysValue,
    isValid: studyDaysIsValid,
    hasError: studyDaysHasError,
    valueChangeHandler: studyDaysChangeHandler,
    inputBlurHandler: studyDaysBlurHandler,
    reset: resetStudyDaysInput,
  } = UseStudyInput(isNotEmpty);

  const {
    value: studyTimeZoneValue,
    isValid: studyTimeZoneIsValid,
    hasError: studyTimeZoneHasError,
    valueChangeHandler: studyTimeZoneChangeHandler,
    inputBlurHandler: studyTimeZoneBlurHandler,
    reset: resetStudyTimeZoneInput,
  } = UseStudyInput(isNotEmpty);

  const {
    value: startDateValue,
    isValid: startDateIsValid,
    hasError: startDateHasError,
    valueChangeHandler: startDateChangeHandler,
    inputBlurHandler: startDateBlurHandler,
    reset: resetStartDateInput,
  } = UseStudyInput(isNotEmpty);

  const {
    value: endDateValue,
    isValid: endDateIsValid,
    hasError: endDateHasError,
    valueChangeHandler: endDateChangeHandler,
    inputBlurHandler: endDateBlurHandler,
    reset: resetEndDateInput,
  } = UseStudyInput(isNotEmpty);

  const {
    value: openChatUrlValue,
    isValid: openChatUrlIsValid,
    hasError: openChatUrlHasError,
    valueChangeHandler: openChatUrlChangeHandler,
    inputBlurHandler: openChatUrlBlurHandler,
    reset: resetOpenChatUrlInput,
  } = UseStudyInput(isUrl);

  const {
    value: participantsValue,
    isValid: participantsIsValid,
    hasError: participantsHasError,
    valueChangeHandler: participantsChangeHandler,
    inputBlurHandler: participantsBlurHandler,
    reset: resetParticipantsInput,
  } = UseStudyInput(isNotEmpty);

  const {
    value: studyIntroduceValue,
    isValid: studyIntroduceIsValid,
    hasError: studyIntroduceHasError,
    valueChangeHandler: studyIntroduceChangeHandler,
    inputBlurHandler: studyIntroduceBlurHandler,
    reset: resetStudyIntroduceInput,
  } = UseStudyInput(isNotEmpty);

  const {
    value: studyGoalValue,
    isValid: studyGoalIsValid,
    hasError: studyGoalHasError,
    valueChangeHandler: studyGoalChangeHandler,
    inputBlurHandler: studyGoalBlurHandler,
    reset: resetStudyGoalInput,
  } = UseStudyInput(isNotEmpty);

  let formIsValid = false;

  if (
    studyTypeIsValid &&
    studyNameIsValid &&
    openChatUrlIsValid &&
    studyDaysIsValid &&
    studyTimeZoneIsValid &&
    startDateIsValid &&
    endDateIsValid &&
    participantsIsValid &&
    studyIntroduceIsValid &&
    studyGoalIsValid
  ) {
    formIsValid = true;
  }
  const submitHandler = async event => {
    event.preventDefault();
    const uid = auth.currentUser?.uid;

    if (!formIsValid) {
      return;
    }
    const submitCreateStudy = {
      studyType: studyTypeValue,
      studyName: studyNameValue,
      openChatUrl: openChatUrlValue,
      studyDays: studyDaysValue,
      timeZone: studyTimeZoneValue,
      startDate: new Date(startDateValue)
        .toISOString()
        .replace('T', ' ')
        .replace(/\..*/, ''),
      endDate: new Date(endDateValue)
        .toISOString()
        .replace('T', ' ')
        .replace(/\..*/, ''),
      participants: Number(participantsValue),
      studyIntroduce: studyIntroduceValue,
      studyGoal: studyGoalValue,
      likeStatus: null,
      uid: uid,
    };

    console.log(submitCreateStudy);

    const res = await createStudy(submitCreateStudy);
    if (res.status === 201) {
      const studyId = res.data.studyId;
      await ModalToCountDown();
      navigate(`/studyDetails/${studyId}`);
    }

    resetStudyTypeInput();
    resetStudyNameInput();
    resetOpenChatUrlInput();
    resetStudyDaysInput();
    resetStudyTimeZoneInput();
    resetStartDateInput();
    resetEndDateInput();
    resetParticipantsInput();
    resetStudyIntroduceInput();
    resetStudyGoalInput();
  };

  const studyTypeClasses = studyTypeHasError
    ? 'form-control invalid'
    : 'form-control';

  const studyNameClasses = studyNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const openChatUrlClasses = openChatUrlHasError
    ? 'form-control invalid'
    : 'form-control';

  const studyDaysClasses = studyDaysHasError
    ? 'form-control invalid'
    : 'form-control';

  const studyTimeZoneClasses = studyTimeZoneHasError
    ? 'form-control invalid'
    : 'form-control';

  const startDateClasses = startDateHasError
    ? 'form-control invalid'
    : 'form-control';

  const endDateClasses = endDateHasError
    ? 'form-control invalid'
    : 'form-control';

  const participantsClasses = participantsHasError
    ? 'form-control invalid'
    : 'form-control';

  const studyIntroduceClasses = studyIntroduceHasError
    ? 'form-control invalid'
    : 'form-control';

  const studyGoalClasses = studyGoalHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <InputFormContainer>
        <StudyTypeInputField className={studyTypeClasses}>
          <h4>스터디분야</h4>
          <select
            value={studyTypeValue}
            onChange={studyTypeChangeHandler}
            onBlur={studyTypeBlurHandler}
          >
            <option className="optionNull">
              스터디
              분야&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▾
            </option>
            {studyTypeList.map(item => (
              <option className="option" value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          {studyTypeHasError && <p>스터디 분야를 선택해주세요</p>}
        </StudyTypeInputField>

        <StudyNameInputField className={studyNameClasses}>
          <h4>스터디 이름</h4>
          <Input
            className="input"
            value={studyNameValue || ''}
            onChange={studyNameChangeHandler}
            onBlur={studyNameBlurHandler}
            type="text"
            maxLength={16}
            placeholder="스터디 이름을 입력해주세요"
          />
          {studyNameHasError && <p>스터디 이름을 입력해주세요</p>}
        </StudyNameInputField>

        <StudyScheduleInputField>
          <h4>스터디 일정 및 시간</h4>
          <div className="selectContainer">
            <div className={studyDaysClasses}>
              <select
                value={studyDaysValue || ''}
                onChange={studyDaysChangeHandler}
                onBlur={studyDaysBlurHandler}
              >
                <option className="optionNull">
                  스터디
                  요일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▾
                </option>
                {studyDaysList.map(item => (
                  <option className="option" value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              {studyDaysHasError && <p>스터디 요일을 선택해주세요</p>}
            </div>

            <div className={studyTimeZoneClasses}>
              <select
                value={studyTimeZoneValue || ''}
                onChange={studyTimeZoneChangeHandler}
                onBlur={studyTimeZoneBlurHandler}
              >
                <option className="optionNull">
                  스터디
                  시간&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▾
                </option>
                {studyTimeZoneList.map(item => (
                  <option className="option" value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              {studyTimeZoneHasError && <p>스터디 시간을 선택해주세요</p>}
            </div>
          </div>
        </StudyScheduleInputField>

        <ParticipantsInputField className={participantsClasses}>
          <h4>스터디 모집 인원</h4>
          <Input
            className="input"
            value={participantsValue || ''}
            onChange={participantsChangeHandler}
            onBlur={participantsBlurHandler}
            min="2"
            max="30"
            placeholder="ex.5"
            type="number"
          />
          {participantsHasError && (
            <p>스터디 모집 인원(30명 이하)을 입력해주세요</p>
          )}
        </ParticipantsInputField>

        <StudyDateInputField>
          <div className={startDateClasses}>
            <h4>스터디 시작일</h4>
            <input
              className="inputDate"
              value={startDateValue || ''}
              onChange={startDateChangeHandler}
              onBlur={startDateBlurHandler}
              type="date"
              min={today}
            />
            {startDateHasError && <p>스터디 시작일을 선택해주세요</p>}
          </div>
          <div className={endDateClasses}>
            <h4>스터디 종료일</h4>
            <input
              className="inputDate"
              type="date"
              value={endDateValue || ''}
              onChange={endDateChangeHandler}
              onBlur={endDateBlurHandler}
              min={startDateValue}
            />
            {endDateHasError && <p>스터디 종료일을 선택해주세요</p>}
          </div>
        </StudyDateInputField>

        <OpenChatUrlInputField className={openChatUrlClasses}>
          <h4>카카오 오픈 채팅방</h4>
          <Input
            className="input"
            placeholder="ex.https://open.kakao.com/o/ooLa5la"
            value={openChatUrlValue || ''}
            onChange={openChatUrlChangeHandler}
            onBlur={openChatUrlBlurHandler}
          />
          {openChatUrlHasError && <p>카카오 오픈 채팅방 URL을 입력해주세요</p>}
        </OpenChatUrlInputField>

        <StudyIntroduceInputField className={studyIntroduceClasses}>
          <h4>스터디 소개</h4>
          <TextArea
            className="input"
            size="large"
            rows={8}
            placeholder="스터디 소개 및 구체적인 일정 및 시간을 입력해주세요"
            minLength={20}
            value={studyIntroduceValue || ''}
            onChange={studyIntroduceChangeHandler}
            onBlur={studyIntroduceBlurHandler}
          />
          {studyIntroduceHasError && <p>스터디 소개를 입력해주세요</p>}
        </StudyIntroduceInputField>

        <StudyGoalInputField className={studyGoalClasses}>
          <h4>스터디 목표</h4>
          <TextArea
            className="input"
            size="large"
            rows={8}
            placeholder="스터디 목표를 입력해주세요"
            minLength={20}
            value={studyGoalValue || ''}
            onChange={studyGoalChangeHandler}
            onBlur={studyGoalBlurHandler}
          />
          {studyGoalHasError && <p>스터디 목표를 입력해주세요</p>}
        </StudyGoalInputField>

        <StyledButton
          disabled={!formIsValid}
          type="submit"
          onChange={submitHandler}
        >
          완료
        </StyledButton>
      </InputFormContainer>
    </form>
  );
};

export default CreateStudyForm;

const {
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
} = style;

CreateStudyForm.propTypes = {
  studyType: PropTypes.string,
  studyName: PropTypes.string,
  studyDays: PropTypes.string,
  studyTimeZone: PropTypes.string,
  participants: PropTypes.number,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  openChatUrl: PropTypes.string,
  studyIntroduce: PropTypes.string,
  studyGoal: PropTypes.string,
};
