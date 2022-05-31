import React from 'react';
import { Input, DatePicker, Select, Button } from 'antd';
import moment from 'moment';
import { style } from './CreateStudyForm.style';
import PropTypes from 'prop-types';

const CreateStudyForm = ({
  studyType,
  studyName,
  days,
  studyTimeZone,
  participants,
  startDate,
  endDate,
  openChatUrl,
  introduce,
  goal,
}) => {
  // const study = {
  //   studyType: '기술면접',
  //   studyName: '스터디이름',
  //   days: '주말',
  //   studyTimeZone: '오전 (6:00 - 12:00)',
  //   participants: '0',
  //   startDate: moment('2022-06-01', 'YYYY-MM-DD'),
  //   endDate: moment('2022-08-01', 'YYYY-MM-DD'),
  //   openChatUrl: 'https://open.kakao.com/o/ooLa5la',
  //   introduce: '스터디 소개입니다.',
  //   goal: '스터디 목표입니다.',
  // };

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
    '오전 (6:00 - 12:00)',
    '오후 (12:00 - 16:00)',
    '저녁 (18:00 - 24:00)',
  ];

  const { Option } = Select;
  // const { RangePicker } = DatePicker;
  const { TextArea } = Input;

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <CreateStudyFormContainer>
      <StudyTypeInputField>
        <h4>스터디 분야</h4>
        <Select
          defaultValue="스터디 분야"
          style={{
            width: 160,
          }}
          onChange={handleChange}
          // value={study.studyType}
        >
          {studyTypeList.map(item => (
            <Option value={item} key={item}>
              {item}
            </Option>
          ))}
        </Select>
      </StudyTypeInputField>

      <StudyNameInputField>
        <h4>스터디 이름</h4>
        <Input
          maxLength={16}
          placeholder="스터디 이름을 입력해주세요"
          // value={study.studyName}
        />
      </StudyNameInputField>

      <StudyScheduleInputField>
        <h4>스터디 일정 및 시간</h4>
        <Select
          defaultValue="스터디 요일"
          style={{
            width: 160,
          }}
          onChange={handleChange}
          // value={study.days}
        >
          {studyDaysList.map(item => (
            <Option value={item} key={item}>
              {item}
            </Option>
          ))}
        </Select>

        <Select
          defaultValue="스터디 시간"
          style={{
            width: 180,
          }}
          onChange={handleChange}
          // value={study.studyTimeZone}
        >
          {studyTimeZoneList.map(item => (
            <Option value={item} key={item}>
              {item}
            </Option>
          ))}
        </Select>
      </StudyScheduleInputField>

      <ParticipantsInputField>
        <h4>스터디 모집 인원</h4>
        <Input
          placeholder="ex.5"
          // value={study.participants}
        />
      </ParticipantsInputField>

      <StudyDateInputField>
        <div className="startDate">
          <h4>스터디 시작일</h4>
          <DatePicker
          // value={study.startDate}
          />
        </div>
        <div className="endDate">
          <h4>스터디 종료일</h4>
          <DatePicker
          // value={study.endDate}
          />
        </div>
      </StudyDateInputField>

      <OpenChatUrlInputField>
        <h4>카카오 오픈 채팅방</h4>
        <Input
          placeholder="ex.https://open.kakao.com/o/ooLa5la"
          // value={study.openChatUrl}
        />
      </OpenChatUrlInputField>

      <StudyIntroduceInputField>
        <h4>스터디 소개</h4>
        <TextArea
          rows={8}
          placeholder="스터디 소개 및 구체적인 일정 및 시간을 입력해주세요"
          maxLength={6}
          // value={study.introduce}
        />
      </StudyIntroduceInputField>

      <StudyGoalInputField>
        <h4>스터디 목표</h4>
        <TextArea
          rows={8}
          placeholder="스터디 목표를 입력해주세요"
          maxLength={6}
          // value={study.goal}
        />
      </StudyGoalInputField>

      <Button type="submit" style={{ width: 120, height: 40 }}>
        완료
      </Button>
    </CreateStudyFormContainer>
  );
};

export default CreateStudyForm;

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
