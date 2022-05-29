import React from 'react';
import { style } from './CreateStudyPage.style';
import { Input, DatePicker, Select, Button } from 'antd';

const CreateStudyPage = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <CreateStudyContainer>
      <TopBanner>
        <h2>스터디 만들기</h2>
        <span>ooLa와 함께 하고 싶은 스터디를 만들어보세요</span>
      </TopBanner>
      <CreatStudyForm>
        <StudyTypeInputField>
          <h4>스터디 분야</h4>
          <Select
            defaultValue="스터디 분야"
            style={{
              width: 160,
            }}
            onChange={handleChange}
          >
            <Option value="CS 지식">CS 지식</Option>
            <Option value="알고리즘/자료구조">알고리즘/자료구조</Option>
            <Option value="기술면접">기술면접</Option>
            <Option value="백엔드">백엔드</Option>
            <Option value="프론트엔드">프론트엔드</Option>
            <Option value="모바일">모바일</Option>
          </Select>
        </StudyTypeInputField>

        <StudyNameInputField>
          <h4>스터디 이름</h4>
          <Input maxLength={16} placeholder="스터디 이름을 입력해주세요" />
        </StudyNameInputField>

        <StudyScheduleInputField>
          <h4>스터디 일정 및 시간</h4>

          <Select
            defaultValue="스터디 요일"
            style={{
              width: 160,
            }}
            onChange={handleChange}
          >
            <Option value="미정">미정</Option>
            <Option value="주중">주중</Option>
            <Option value="주말">주말</Option>
          </Select>

          <Select
            defaultValue="스터디 시간"
            style={{
              width: 180,
            }}
            onChange={handleChange}
          >
            <Option value="미정">미정</Option>
            <Option value="오전">오전 (6:00 - 12:00)</Option>
            <Option value="오후">오후 (12:00 - 16:00)</Option>
            <Option value="저녁">저녁 (18:00 - 24:00)</Option>
          </Select>
        </StudyScheduleInputField>
        <ParticipantsInputField>
          <h4>스터디 모집 인원</h4>
          <Input placeholder="ex.5" />
        </ParticipantsInputField>

        <StudyDateInputField>
          <div>
            <h4>스터디 시작일 - 종료일</h4>
            <RangePicker />
          </div>
        </StudyDateInputField>

        <OpenChatUrlInputField>
          <h4>카카오 오픈 채팅방</h4>
          <Input placeholder="ex.https://open.kakao.com/o/ooLa5la" />
        </OpenChatUrlInputField>

        <StudyInfoInputField>
          <div className="studyIntroduce">
            <h4>스터디 소개</h4>
            <TextArea
              rows={8}
              placeholder="스터디 소개 및 구체적인 일정 및 시간을 입력해주세요"
            />
          </div>

          <div className="studyGoal">
            <h4>스터디 목표</h4>
            <TextArea rows={8} placeholder="스터디 목표를 입력해주세요" />
          </div>
        </StudyInfoInputField>
        <Button type="primary" style={{ width: 120, height: 40 }}>
          완료
        </Button>
      </CreatStudyForm>
    </CreateStudyContainer>
  );
};

export default CreateStudyPage;

const {
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
} = style;
