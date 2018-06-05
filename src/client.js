import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';
import './styles/style.scss';
require('offline-plugin/runtime').install();

import reducer from './reducers';
import Root from './root';

const store = createStore(reducer, applyMiddleware(thunk));


const ClientApp = ()=>{
	return <Provider store={store}>
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	</Provider>
};


ReactDOM.hydrate(<ClientApp/>, document.getElementById('root'));