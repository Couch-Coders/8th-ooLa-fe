import React from 'react';
import 'antd/dist/antd.css';
import { style } from './Filtering.style';
import { Select, Button } from 'antd';

const Filtering = () => {
  const { Option } = Select;

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <FilteringContainer>
      <FilteringBanner>
        <h1>저는 스터디를 찾고 있어요</h1>
        <SelectContainer>
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
          <Button type="primary">Search</Button>
        </SelectContainer>
      </FilteringBanner>
    </FilteringContainer>
  );
};

export default Filtering;

const { FilteringContainer, FilteringBanner, SelectContainer } = style;
