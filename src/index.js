import React from 'react';
import './index.scss';
import App from './components/app/App';
import * as ReactDOMClient from "react-dom/client";

ReactDOMClient.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
