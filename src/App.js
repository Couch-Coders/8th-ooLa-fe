import React, { Fragment, Suspense } from 'react';

import './App.css';
import 'antd/dist/antd.min.css';
import GlobalStyle from './styles/globalStyle.style';

import { HashRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/mainPage/MainPage.component';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/common/layout/navbar/Navbar.component';
import Loding from './components/common/ui/loding/Loding.component';

const MyStudyPage = React.lazy(() =>
  import('./pages/myStudyPage/MyStudyPage.component'),
);
const MyProfilePage = React.lazy(() =>
  import('./pages/myProfilePage/MyProfilePage.component'),
);
const CreateStudyPage = React.lazy(() =>
  import('./pages/createStudyPage/CreateStudyPage.component'),
);
const StudyDetailsPage = React.lazy(() =>
  import('./pages/studyDetailsPage/StudyDetailsPage.component'),
);
const EditStudyInfoPage = React.lazy(() =>
  import('./pages/editStudyInfoPage/EditStudyInfoPage.component'),
);

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/myProfile/:type"
            element={
              <Suspense fallback={<Loding />}>
                <MyProfilePage />
              </Suspense>
            }
          />
          <Route
            path="/myStudy"
            element={
              <Suspense fallback={<Loding />}>
                <MyStudyPage />
              </Suspense>
            }
          />
          <Route
            path="/createStudy"
            element={
              <Suspense fallback={<Loding />}>
                <CreateStudyPage />
              </Suspense>
            }
          />

          <Route
            path="/studyDetails/:studyId"
            element={
              <Suspense fallback={<Loding />}>
                <StudyDetailsPage />
              </Suspense>
            }
          />
          <Route
            path="/editStudyInfo/:studyId"
            element={
              <Suspense fallback={<Loding />}>
                <EditStudyInfoPage />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </Fragment>
  );
}

export default App;
