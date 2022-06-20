import React, { useContext } from 'react';
import { StudyListContext } from '../../../context/StudyList.context';
import { Row } from 'antd';
import StudyCard from '../../common/studyCard/StudyCard.component';
import { style } from './MainStudyList.style';
import Toggle from '../toggle/Toggle.component';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { ReactComponent as LoadingSpinner } from '../../../asset/lodingSpinner/lodingSpinner.svg';

const MainStudyList = () => {
  const {
    isLast,
    isLoading,
    studies,
    fetchStudyFiltering,
    pageNum,
    filterValue,
  } = useContext(StudyListContext);

  const setObservationTarget = useIntersectionObserver(
    fetchStudyFiltering,
    pageNum,
    filterValue,
  );

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
      </Row>
      {isLoading ? (
        <div>
          <LoadingSpinner width="13rem" />
        </div>
      ) : null}
      {!isLast && !isLoading && <div ref={setObservationTarget} />}
    </Section>
  );
};
export default MainStudyList;

const { Section, ToggleContainer, ToggleText } = style;
