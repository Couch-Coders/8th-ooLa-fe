import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';

import { style } from './NewCreateStudyForm.style';
import PropTypes from 'prop-types';
import UseInput from '../hooks/UseInput';

import { createStudy } from '../../../lib/apis/createStudy';

const isNotEmpty = value => value.trim() !== '';
const isUrl = value => value.includes('https:' && '.');

const NewCreateStudyForm = () => {
  const navigate = useNavigate();
  const studyTypeIsInputRef = useRef();
  const studyNameIsInputRef = useRef();
  const openChatUrlIsInputRef = useRef();
  const studyDaysIsInputRef = useRef();
  const studyTimeZoneIsInputRef = useRef();
  const startDateIsInputRef = useRef();
  const endDateIsInputRef = useRef();
  const participantsIsInputRef = useRef();
  const studyIntroduceIsInputRef = useRef();
  const studyGoalIsInputRef = useRef();

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

  const { TextArea } = Input;

  const {
    value: studyTypeValue,
    isValid: studyTypeIsValid,
    hasError: studyTypeHasError,
    valueChangeHandler: studyTypeChangeHandler,
    inputBlurHandler: studyTypeBlurHandler,
    reset: resetStudyTypeInput,
  } = UseInput(isNotEmpty);

  const {
    value: studyNameValue,
    isValid: studyNameIsValid,
    hasError: studyNameHasError,
    valueChangeHandler: studyNameChangeHandler,
    inputBlurHandler: studyNameBlurHandler,
    reset: resetStudyNameInput,
  } = UseInput(isNotEmpty);

  const {
    value: studyDaysValue,
    isValid: studyDaysIsValid,
    hasError: studyDaysHasError,
    valueChangeHandler: studyDaysChangeHandler,
    inputBlurHandler: studyDaysBlurHandler,
    reset: resetStudyDaysInput,
  } = UseInput(isNotEmpty);

  const {
    value: studyTimeZoneValue,
    isValid: studyTimeZoneIsValid,
    hasError: studyTimeZoneHasError,
    valueChangeHandler: studyTimeZoneChangeHandler,
    inputBlurHandler: studyTimeZoneBlurHandler,
    reset: resetStudyTimeZoneInput,
  } = UseInput(isNotEmpty);

  const {
    value: startDateValue,
    isValid: startDateIsValid,
    hasError: startDateHasError,
    valueChangeHandler: startDateChangeHandler,
    inputBlurHandler: startDateBlurHandler,
    reset: resetStartDateInput,
  } = UseInput(isNotEmpty);

  const {
    value: endDateValue,
    isValid: endDateIsValid,
    hasError: endDateHasError,
    valueChangeHandler: endDateChangeHandler,
    inputBlurHandler: endDateBlurHandler,
    reset: resetEndDateInput,
  } = UseInput(isNotEmpty);

  const {
    value: openChatUrlValue,
    isValid: openChatUrlIsValid,
    hasError: openChatUrlHasError,
    valueChangeHandler: openChatUrlChangeHandler,
    inputBlurHandler: openChatUrlBlurHandler,
    reset: resetOpenChatUrlInput,
  } = UseInput(isUrl);

  const {
    value: participantsValue,
    isValid: participantsIsValid,
    hasError: participantsHasError,
    valueChangeHandler: participantsChangeHandler,
    inputBlurHandler: participantsBlurHandler,
    reset: resetParticipantsInput,
  } = UseInput(isNotEmpty);

  const {
    value: studyIntroduceValue,
    isValid: studyIntroduceIsValid,
    hasError: studyIntroduceHasError,
    valueChangeHandler: studyIntroduceChangeHandler,
    inputBlurHandler: studyIntroduceBlurHandler,
    reset: resetStudyIntroduceInput,
  } = UseInput(isNotEmpty);

  const {
    value: studyGoalValue,
    isValid: studyGoalIsValid,
    hasError: studyGoalHasError,
    valueChangeHandler: studyGoalChangeHandler,
    inputBlurHandler: studyGoalBlurHandler,
    reset: resetStudyGoalInput,
  } = UseInput(isNotEmpty);

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

    if (!formIsValid) {
      return;
    }
    const submitCreateStudy = {
      studyType: studyTypeValue,
      studyName: studyNameValue,
      openChatUrl: openChatUrlValue,
      studyDays: studyDaysValue,
      studyTimeZone: studyTimeZoneValue,
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
    };

    console.log(submitCreateStudy);

    const res = await createStudy(submitCreateStudy);
    if (res.status === 201) {
      navigate('/studyDetails/:id');
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
      <CreateStudyFormContainer>
        <StudyTypeInputField className={studyTypeClasses}>
          <h4>스터디분야</h4>
          <select
            ref={studyTypeIsInputRef}
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
            ref={studyNameIsInputRef}
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
                ref={studyDaysIsInputRef}
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
                ref={studyTimeZoneIsInputRef}
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
            ref={participantsIsInputRef}
            value={participantsValue || ''}
            onChange={participantsChangeHandler}
            onBlur={participantsBlurHandler}
            maxLength={2}
            placeholder="ex.5"
          />
          {participantsHasError && <p>스터디 모집 인원을 입력해주세요</p>}
        </ParticipantsInputField>

        <StudyDateInputField>
          <div className={startDateClasses}>
            <h4>스터디 시작일</h4>
            <input
              className="inputDate"
              ref={startDateIsInputRef}
              value={startDateValue || ''}
              onChange={startDateChangeHandler}
              onBlur={startDateBlurHandler}
              min="2"
              max="30"
              placeholder="ex.5"
              type="number"
            />
            {participantsHasError && (
              <p>스터디 모집 인원(30명 이하)을 입력해주세요</p>
            )}
            />
            {startDateHasError && <p>스터디 시작일을 선택해주세요</p>}
          </div>
          <div className={endDateClasses}>
            <h4>스터디 종료일</h4>
            <input
              className="inputDate"
              ref={endDateIsInputRef}
              type="date"
              value={endDateValue || ''}
              onChange={endDateChangeHandler}
              onBlur={endDateBlurHandler}
            />
            {endDateHasError && <p>스터디 종료일을 선택해주세요</p>}
          </div>
        </StudyDateInputField>

        <OpenChatUrlInputField className={openChatUrlClasses}>
          <h4>카카오 오픈 채팅방</h4>
          <Input
            className="input"
            ref={openChatUrlIsInputRef}
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
            ref={studyIntroduceIsInputRef}
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
            ref={studyGoalIsInputRef}
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
      </CreateStudyFormContainer>
    </form>
  );
};

export default NewCreateStudyForm;

const {
  CreateStudyFormContainer,
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

NewCreateStudyForm.propTypes = {
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
