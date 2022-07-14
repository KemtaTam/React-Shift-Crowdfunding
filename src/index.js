import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MainApp } from './App';
import "antd/dist/antd.css";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,  /* HashRouter */ } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<MainApp />
	</BrowserRouter>,
document.getElementById('root')
);

