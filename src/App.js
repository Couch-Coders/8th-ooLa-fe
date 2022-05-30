import React from 'react';
import MainStudyList from './components/main/mainStudyList/MainStudyList.component';
import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainStudyList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
