import { Fragment, useContext, useEffect } from 'react';
import { StudyListContext } from '../../context/StudyList.context';
import Filtering from '../../components/main/filtering/Filtering.component';
import MainStudyList from '../../components/main/mainStudyList/MainStudyList.component';

const MainPage = () => {
  const { setIsFilteringStart, studies } = useContext(StudyListContext);
  useEffect(() => {
    if (studies.length > 0) {
      setIsFilteringStart(true);
    }
  }, []);

  return (
    <Fragment>
      <Filtering />
      <MainStudyList />
    </Fragment>
  );
};

export default MainPage;
