import { Fragment, useEffect } from 'react';
import Filtering from '../../components/main/filtering/Filtering.component';
import MainStudyList from '../../components/main/mainStudyList/MainStudyList.component';

import { getStudyList } from '../../lib/apis/main';

const MainPage = () => {
  useEffect(() => {
    const response = async () => await getStudyList();
    console.log(response);
  }, []);

  return (
    <Fragment>
      <Filtering />
      <MainStudyList />
    </Fragment>
  );
};

export default MainPage;
