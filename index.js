import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
import 'tachyons';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App2 />
  </BrowserRouter>,
  document.getElementById('root')
);

