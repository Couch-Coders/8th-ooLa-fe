import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/Auth.context';

import MainPage from './pages/mainPage/MainPage.component';
import MyStudyPage from './pages/myStudyPage/MyStudyPage.component';
import MyProfilePage from './pages/myProfilePage/MyProfilePage.component';
import CreateStudyPage from './pages/createStudyPage/CreateStudyPage.component';
import StudyDetailsPage from './pages/studyDetailsPage/StudyDetailsPage.component';

import Navbar from './components/common/layout/navbar/Navbar.component';
import Protected from './components/common/Protected';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/myProfile"
            element={
              <Protected>
                <MyProfilePage />
              </Protected>
            }
          />
          <Route
            path="/myStudy"
            element={
              <Protected>
                <MyStudyPage />
              </Protected>
            }
          />
          <Route
            path="/createStudy"
            element={
              <Protected>
                <CreateStudyPage />
              </Protected>
            }
          />
          <Route path="/studyDetails/:studyId" element={<StudyDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
