import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalStyles.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/filmoteka">
      <Global styles={GlobalStyles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
