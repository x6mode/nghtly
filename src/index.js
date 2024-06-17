import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx'

const root = createRoot(document.querySelector('#app'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
