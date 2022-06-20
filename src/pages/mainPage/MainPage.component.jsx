import { Fragment, useContext, useEffect, useState } from 'react';
import { StudyListContext } from '../../context/StudyList.context';
import Filtering from '../../components/main/filtering/Filtering.component';
import MainStudyList from '../../components/main/mainStudyList/MainStudyList.component';

const MainPage = () => {
  const { setIsFilteringStart, studies } = useContext(StudyListContext);
  // const [isLoadingStart, setIsLoading] = useState(true);
  useEffect(() => {
    if (studies.length > 0) {
      setIsFilteringStart(true);
    }
    // setIsLoading(false);
  }, []);

  return (
    <Fragment>
      <Filtering />
      <MainStudyList />
    </Fragment>
  );
};

export default MainPage;
