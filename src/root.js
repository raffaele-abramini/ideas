import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';


import reducer from './reducers';
import App from './app';

const store = createStore(reducer, applyMiddleware(thunk));


const Root = ()=>{
	return <Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
};


ReactDOM.render(<Root/>, document.querySelector('.app'));