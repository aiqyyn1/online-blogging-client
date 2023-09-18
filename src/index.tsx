import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Routes from './routes';
import { Provider } from 'react-redux';
import { setUpStore } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = setUpStore()
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
    </Provider>

);
