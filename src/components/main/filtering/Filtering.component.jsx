import React from 'react';
<<<<<<< HEAD
import 'antd/dist/antd.css';
import {
  FilteringContainer,
  FilteringBanner,
  SelectContainer,
} from './Filtering.style';
import { Select, Button } from 'antd';

=======
import { style } from './Filtering.style';
import { Select } from 'antd';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/ui/button/Button.component';
>>>>>>> b57bb93dd0969b1087da83d635406e2685c27322
const Filtering = () => {
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

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <FilteringContainer>
      <FilteringBanner>
<<<<<<< HEAD
        <h2>저는 스터디를 찾고 있어요</h2>
=======
        <h1>저는 스터디를 찾고 있어요 &#128064;</h1>
>>>>>>> b57bb93dd0969b1087da83d635406e2685c27322
        <SelectContainer>
          <Select
            size="large"
            defaultValue="스터디 분야"
            style={{
              width: 200,
            }}
            onChange={handleChange}
          >
            {studyTypeList.map(item => (
              <Option value={item} key={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Select
            size="large"
            defaultValue="스터디 요일"
            style={{
              width: 200,
            }}
            onChange={handleChange}
          >
            {studyDaysList.map(item => (
              <Option value={item} key={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Select
            size="large"
            defaultValue="스터디 시간"
            style={{
              width: 220,
            }}
            onChange={handleChange}
          >
            {studyTimeZoneList.map(item => (
              <Option value={item} key={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Search</Button>
        </SelectContainer>
      </FilteringBanner>
    </FilteringContainer>
  );
};

export default Filtering;
