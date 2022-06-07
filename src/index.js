import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/Auth.context';

import { ProfileProvider } from './context/Profile.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);
