import React, { useCallback, useEffect, useState } from 'react';

import { Row } from 'antd';
import StudyCard from '../../common/studyCard/StudyCard.component';
import { style } from './MainStudyList.style';
import Toggle from '../toggle/Toggle.component';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { getStudyList } from '../../../lib/apis/main';

const MainStudyList = () => {
  const [pageNum, setPageNum] = useState(0);
  const [isLast, setIsLast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [isToggleOn, setIsToggleOn] = useState(true);
  const [studies, setStudies] = useState([]);

  // const recruitingFilter = useCallback(allStudies => {
  //   return allStudies.filter(
  //     study =>
  //       new Date(study.startDate) > new Date() &&
  //       study.currentParticipants < study.participants,
  //   );
  // }, []);

  const getAllStudyLists = useCallback(async () => {
    const response = await getStudyList();
    const content = response.content;
    setIsLast(response.last);
    return content;
  }, []);

  const fetchStudyList = useCallback(async () => {
    if (isLast) return;
    setIsLoading(true);
    const newStudies = await getAllStudyLists(pageNum);
    setStudies(studies => [...studies, ...newStudies]);
    setPageNum(state => state + 1);
    setIsLoading(false);
  }, [getAllStudyLists, isLast, pageNum]);

  const setObservationTarget = useIntersectionObserver(fetchStudyList);

  console.log(studies);

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
        {!isLoading && <div ref={setObservationTarget}>feed-end</div>}
      </Row>
    </Section>
  );
};
export default MainStudyList;

const { Section, ToggleContainer, ToggleText } = style;
