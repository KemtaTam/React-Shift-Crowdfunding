import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import /* App,  */{ MainApp } from './App';
import "antd/dist/antd.css";
/* @import '~antd/es/style/themes/default.less';
@import '~antd/dist/antd.less'; // Import Ant Design styles by less entry
@import 'your-theme-file.less'; // variables to override above */
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,  /* HashRouter */ } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<MainApp />
		{/* <App /> */}
	</BrowserRouter>,
document.getElementById('root')
);

