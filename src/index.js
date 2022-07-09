import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchContextProvider } from './components/context/searchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <SearchContextProvider>
    <App />
  </SearchContextProvider>
  // </React.StrictMode>
);
