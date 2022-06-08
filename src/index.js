import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { ProfileProvider } from './context/Profile.context';
import { AuthProvider } from './context/Auth.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>,
);
