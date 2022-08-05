import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  HashRouter,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { store, StoreContext } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
     <HashRouter>
      <StoreContext.Provider value={store}>
       <App />
      </StoreContext.Provider>
    </HashRouter>
  // </React.StrictMode>
);

reportWebVitals();
