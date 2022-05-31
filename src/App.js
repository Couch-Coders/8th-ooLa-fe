import React from 'react';
import MainStudyList from './components/main/mainStudyList/MainStudyList.component';
import MyProfilePage from './pages/myProfilePage/MyProfilePage.component';
import StudyDetailsPage from './pages/studyDetailsPage/StudyDetailsPage.component';
import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainStudyList />} />
        <Route path="/myProfile/:uid" element={<MyProfilePage />} />
        <Route path="/studyDetails/:studyId" element={<StudyDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
