import React, { useCallback, useEffect, useState } from 'react';

import { Row } from 'antd';
import StudyCard from '../../common/studyCard/StudyCard.component';
import { style } from './MainStudyList.style';
import Toggle from '../toggle/Toggle.component';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { getStudyList } from '../../../lib/apis/main';

let PAGE_NUM = 0;

const MainStudyList = () => {
  const [isLast, setIsLast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [studies, setStudies] = useState([]);
  // const [pageNum, setPageNum] = useState(0);

  // const [isToggleOn, setIsToggleOn] = useState(false);

  // const recruitingFilter = useCallback(allStudies => {
  //   return allStudies.filter(
  //     study =>
  //       new Date(study.startDate) > new Date() &&
  //       study.currentParticipants < study.participants,
  //   );
  // }, []);

  const getAllStudyLists = useCallback(async pageNum => {
    const response = await getStudyList(pageNum, 15);
    setIsLast(response.last);
    // setPageNum(pageNum + 1);
    const content = response.content;
    return content;
  }, []);

  const fetchStudyList = useCallback(async () => {
    setIsLoading(true);
    const newStudies = await getAllStudyLists(PAGE_NUM);
    setStudies(studies => [...studies, ...newStudies]);
    PAGE_NUM++;
    setIsLoading(false);
  }, [getAllStudyLists]);

  const setObservationTarget = useIntersectionObserver(fetchStudyList);

  // const toggleHandler = () => setIsToggleOn(state => !state);

  // useEffect(() => {
  //   if (isToggleOn) {
  //     const recruitingStudies = recruitingFilter(studies);
  //     setStudies(recruitingStudies);
  //   } else {
  //     setStudies(studies);
  //   }
  // }, [isToggleOn]);

  return (
    <Section>
      <ToggleContainer>
        <ToggleText>
          {/* {isToggleOn ? 'NOW 스터디 진행중' : '모든 스터디'} */}
        </ToggleText>
        {/* <Toggle toggleHandler={toggleHandler} /> */}
      </ToggleContainer>
      <Row gutter={[40, 40]}>
        {studies.map(study => (
          <StudyCard key={study.studyId} study={study} />
        ))}
        {isLoading ? <div>로딩중...</div> : null}
        {!isLast && !isLoading && (
          <div ref={setObservationTarget}>feed-end</div>
        )}
      </Row>
    </Section>
  );
};
export default MainStudyList;

const { Section, ToggleContainer, ToggleText } = style;
