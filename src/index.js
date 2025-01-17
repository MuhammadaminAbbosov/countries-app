import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from './context/context';

import './index.css';
import 'antd/dist/antd.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);

