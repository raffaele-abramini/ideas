import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import reducer from './reducers';
import App from './components/app';

const store = createStore(reducer, applyMiddleware(thunk));


const Root = ()=>{
	return <Provider store={store}>
		<App />
	</Provider>
};


ReactDOM.render(<Root/>, document.querySelector('.app'));