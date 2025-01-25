/* eslint-disable import-x/no-named-as-default-member */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import 'src/shared/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
