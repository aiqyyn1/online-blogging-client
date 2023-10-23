import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';

import Routes from './routes';
import { Provider } from 'react-redux';
import { setUpStore } from './store/store';
=======
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store';
>>>>>>> 3e8d161 (feat:add rtk query)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
<<<<<<< HEAD
const store = setUpStore()
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
    </Provider>

);
=======

root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


>>>>>>> 3e8d161 (feat:add rtk query)
