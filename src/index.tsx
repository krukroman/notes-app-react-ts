import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './index.css';

const container = document.getElementById('app');

if (!container) throw new Error(`Can't get access to root element`);

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}></PersistGate>
    </Provider>
  </React.StrictMode>
);
