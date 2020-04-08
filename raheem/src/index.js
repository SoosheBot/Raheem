import React from 'react';
import ReactDOM from 'react-dom';
// import "antd/dist/antd.css";
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateProvider } from './formStore.js';

ReactDOM.render(<StateProvider><Router><App /></Router></StateProvider>, document.getElementById('root'));