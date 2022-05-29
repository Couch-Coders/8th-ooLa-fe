import React, { useState } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/mainPage/MainPage.component';
import MyStudyPage from './pages/myStudyPage/MyStudyPage.component';
import MyProfilePage from './pages/myProfilePage/MyProfilePage.component';
import CreateStudyPage from './pages/createStudyPage/CreateStudyPage.component';
import StudyDetailPage from './pages/studyDetailPage/StudyDetailPage.component';

import Navbar from './components/common/navbar/Navbar.component';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/myProfile" element={<MyProfilePage />} />
        <Route path="/myStudy" element={<MyStudyPage />} />
        <Route path="/createStudy" element={<CreateStudyPage />} />
        <Route path="/studyDetail" element={<StudyDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
