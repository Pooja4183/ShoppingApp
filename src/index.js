import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals.js';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor}  from './Redux/store.js'; // both imported


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      {/* wrap app with persisgate to hydrate the state */}
      <PersistGate loading={null} persistor={persistor}>
         <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
