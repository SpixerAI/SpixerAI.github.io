import React from 'react';
import ReactDOM from 'react-dom/client';
import MainFunc from './common';
import {SessionProvider, setApiBaseUrl} from './library';

setApiBaseUrl(`http://${window.location.hostname}:5504`)

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <SessionProvider>
    <MainFunc />
  </SessionProvider>
);
