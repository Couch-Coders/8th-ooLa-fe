<<<<<<< HEAD
import React, { useState } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/mainPage/MainPage.component';
import MyStudyPage from './pages/myStudyPage/MyStudyPage.component';
import MyProfilePage from './pages/myProfilePage/MyProfilePage.component';
import CreateStudyPage from './pages/createStudyPage/CreateStudyPage.component';
import StudyDetailPage from './pages/studyDetailPage/StudyDetailPage.component';

import Navbar from './components/common/layout/navbar/Navbar.component';
=======
import React from 'react';
import MainStudyList from './components/main/mainStudyList/MainStudyList.component';
import MyProfilePage from './pages/myProfilePage/MyProfilePage.component';
import StudyDetailsPage from './pages/studyDetailsPage/StudyDetailsPage.component';
import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
>>>>>>> b5bca4b8fc7468da1b8f662e08a24b573c0a9e2e

function App() {
  // 로그인 테스트
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route
          path="/"
          element={<MainPage setAuthenticate={setAuthenticate} />}
        />
        <Route path="/myProfile" element={<MyProfilePage />} />
        <Route path="/myStudy" element={<MyStudyPage />} />
        <Route path="/createStudy" element={<CreateStudyPage />} />
        <Route path="/studyDetail" element={<StudyDetailPage />} />
=======
      <Routes>
        <Route path="/" element={<MainStudyList />} />
        <Route path="/myProfile/:uid" element={<MyProfilePage />} />
        <Route path="/studyDetails/:studyId" element={<StudyDetailsPage />} />
>>>>>>> b5bca4b8fc7468da1b8f662e08a24b573c0a9e2e
      </Routes>
    </BrowserRouter>
  );
}

export default App;
