import React, { useContext, useEffect } from 'react';

import { style } from './Filtering.style';
import { Select } from 'antd';
import Button, {
  BUTTON_TYPE_CLASSES,
} from '../../common/ui/button/Button.component';
import { useState } from 'react';
import { StudyListContext } from '../../../context/StudyList.context';
import { ReloadOutlined } from '@ant-design/icons';

const Filtering = () => {
  const { setIsFilteringStart, filterVal } = useContext(StudyListContext);

  const studyTypeList = [
    'CS 지식',
    '알고리즘/자료구조',
    '기술면접',
    '백엔드',
    '프론트엔드',
    '모바일',
  ];

  const studyDaysList = ['미정', '주중', '주말'];

  const timeZoneList = [
    '미정',
    '오전 (6:00 - 12:00)',
    '오후 (12:00 - 16:00)',
    '저녁 (18:00 - 24:00)',
  ];

  const { Option } = Select;

  const [studyTypeName, setStudyTypeName] = useState();
  const [studyDays, setStudyDays] = useState();
  const [timeZone, setTimeZone] = useState();

  const submitHandler = async () => {
    const filterValue = {
      studyTypeName: studyTypeName,
      studyDays: studyDays,
      timeZone: timeZone,
    };
    filterVal.current = filterValue;
    setIsFilteringStart(true);
  };
  const studyTypehandleChange = value => {
    setStudyTypeName(value);
  };

  const studyDayshandleChange = value => {
    setStudyDays(value);
  };

  const timeZonehandleChange = value => {
    setTimeZone(value);
  };

  const filterResetHandler = () => {
    setStudyTypeName(null);
    setTimeZone(null);
    setStudyDays(null);
    filterVal.current = {};
    setIsFilteringStart(true);
  };

  useEffect(() => {
    setStudyDays(filterVal.current?.studyDays);
    setTimeZone(filterVal.current?.timeZone);
    setStudyTypeName(filterVal.current?.studyTypeName);
  }, [filterVal]);

  return (
    <FilteringContainer>
      <FilteringBanner>
        <h2>저는 스터디를 찾고 있어요 &#128064;</h2>

        <SelectContainer>
          <Select
            size="large"
            placeholder="스터디 분야"
            style={{
              width: 200,
            }}
            onChange={studyTypehandleChange}
            value={studyTypeName}
          >
            {studyTypeList.map(item => (
              <Option value={item} key={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Select
            size="large"
            placeholder="스터디 요일"
            style={{
              width: 200,
            }}
            onChange={studyDayshandleChange}
            value={studyDays}
          >
            {studyDaysList.map(item => (
              <Option value={item} key={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Select
            size="large"
            placeholder="스터디 시간"
            style={{
              width: 220,
            }}
            onChange={timeZonehandleChange}
            value={timeZone}
          >
            {timeZoneList.map(item => (
              <Option value={item} key={item}>
                {item}
              </Option>
            ))}
          </Select>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={submitHandler}
          >
            Search
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={filterResetHandler}
          >
            <ReloadOutlined style={{ marginTop: -3 }} />
          </Button>
        </SelectContainer>
      </FilteringBanner>
    </FilteringContainer>
  );
};

export default Filtering;

const { FilteringContainer, FilteringBanner, SelectContainer } = style;
