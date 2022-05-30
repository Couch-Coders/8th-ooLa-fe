import { Row } from 'antd';
import StudyCard from '../studyCard/StudyCard.component';
import { Section } from './MainStudyList.style';
import Toggle from '../toggle/Toggle.component';
import { DUMMY_DATA } from '../../../dummy';

const MainStudyList = () => {
  return (
    <Section>
      <div>
        <span>"NOW 스터디 진행중"</span>
        <Toggle />
      </div>
      <Row gutter={[16, 24]}>
        {DUMMY_DATA.map(study => (
          <StudyCard key={study.studyId} study={study} />
        ))}
      </Row>
    </Section>
  );
};
export default MainStudyList;
