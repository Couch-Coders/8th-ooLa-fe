import Filtering from '../../components/main/filtering/Filtering.component';
import MainStudyList from '../../components/main/mainStudyList/MainStudyList.component';

const MainPage = ({ setAuthenticate }) => {
  return (
    <div>
      <Filtering />
      <MainStudyList />
    </div>
  );
};

export default MainPage;
