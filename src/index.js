import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ProfileProvider } from './context/Profile.context';
import { AuthProvider } from './context/Auth.context';
import { StudyListProvider } from './context/StudyList.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <StudyListProvider>
          <App />
        </StudyListProvider>
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>,
);
