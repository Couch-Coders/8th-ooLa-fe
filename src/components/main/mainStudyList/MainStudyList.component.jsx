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
    progressStudies,
    fetchStudyFiltering,
    isToggleOn,
  } = useContext(StudyListContext);
  // const [studyArr, setStudyArr] = useState(studies);

  const setObservationTarget = useIntersectionObserver(fetchStudyFiltering);

  // useEffect(() => {
  //   if (isToggleOn) {
  //     setStudyArr(progressStudies);
  //   } else {
  //     setStudyArr(studies);
  //   }
  // }, [isToggleOn, progressStudies, studies]);

  return (
    <Section>
      <ToggleContainer>
        <ToggleText>
          {isToggleOn ? 'NOW 모집 진행중 ON' : 'NOW 모집 진행중 OFF'}
        </ToggleText>
        <Toggle />
      </ToggleContainer>
      <Row gutter={[40, 40]}>
        {!isToggleOn
          ? studies.map(study => (
              <StudyCard key={study.studyId} study={study} />
            ))
          : progressStudies.map(study => (
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
