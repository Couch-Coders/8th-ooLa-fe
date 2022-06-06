import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ProfileProvider } from './context/Profile.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </React.StrictMode>,
);
