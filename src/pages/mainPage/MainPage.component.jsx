import { Fragment } from 'react';
import Filtering from '../../components/main/filtering/Filtering.component';
import MainStudyList from '../../components/main/mainStudyList/MainStudyList.component';

const MainPage = () => {
  return (
    <Fragment>
      <Filtering />
      <MainStudyList />
    </Fragment>
  );
};

export default MainPage;
