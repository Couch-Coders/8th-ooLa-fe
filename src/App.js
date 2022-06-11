import React, { Fragment, Suspense } from 'react';

import './App.css';
import 'antd/dist/antd.min.css';
import GlobalStyle from './styles/globalStyle.style';

import { HashRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/mainPage/MainPage.component';
import Navbar from './components/common/layout/navbar/Navbar.component';

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

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/myProfile"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MyProfilePage />
              </Suspense>
            }
          />
          <Route
            path="/myStudy"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MyStudyPage />
              </Suspense>
            }
          />
          <Route
            path="/createStudy"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <CreateStudyPage />
              </Suspense>
            }
          />
          <Route
            path="/studyDetails/:studyId"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <StudyDetailsPage />
              </Suspense>
            }
          />
        </Routes>
      </HashRouter>
    </Fragment>
  );
}

export default App;
