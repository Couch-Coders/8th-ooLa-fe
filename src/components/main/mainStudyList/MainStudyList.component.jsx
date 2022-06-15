import React, { useContext, useRef, useEffect, useState } from 'react';
import { StudyListContext } from '../../../context/StudyList.context';
import { Row } from 'antd';
import StudyCard from '../../common/studyCard/StudyCard.component';
import { style } from './MainStudyList.style';
import Toggle from '../toggle/Toggle.component';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const MainStudyList = () => {
  const {
    isLast,
    isLoading,
    studies,
    fetchStudyFiltering,
    fetchStudyList,
    isFilteringStart,
    setPageNum,
  } = useContext(StudyListContext);
  const [fetchFunction, setFetchFunction] = useState(() => fetchStudyList);

  useEffect(() => {
    if (isFilteringStart) {
      setPageNum(0);
      setFetchFunction(() => fetchStudyFiltering);
    }
  }, [isFilteringStart]);

  const setObservationTarget = useIntersectionObserver(fetchFunction);

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
