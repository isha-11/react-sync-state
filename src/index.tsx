import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App length={5} />
  </React.StrictMode>,
  document.getElementById('root'),
);
