import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyled from './global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyled />
  </>
);

export default App;
