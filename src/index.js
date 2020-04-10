import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { AppContextProvider } from '../src/context/AppContext';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AppContextProvider>
    <AppRouter />
  </AppContextProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
