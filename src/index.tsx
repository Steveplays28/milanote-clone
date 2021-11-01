import FieldContainer from 'Components/Fields/FieldContainer';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';

import { AppWithRouter, BackToTopButtonWithRouter } from './App';
import { Header, Footer, BackButton, ContextMenu } from './Components';

import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ContextMenu />

			<Header />

			<AppWithRouter />

			<FieldContainer></FieldContainer>

			<Footer />

			<BackToTopButtonWithRouter />
			<BackButton />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
