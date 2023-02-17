import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Theme from './themes';
import { CssBaseline } from '@mui/material';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Theme>
        <CssBaseline>
          <App />
        </CssBaseline>
      </Theme>
    </HashRouter>
  </React.StrictMode>,
);

reportWebVitals();
