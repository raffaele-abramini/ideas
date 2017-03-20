import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk'

import IdeasListContainer from './containers/IdeasListContainer'
import AddNewIdeaForm from './containers/AddNewIdeaForm'

const store = createStore(reducer, applyMiddleware(thunk));


const App = ()=>{
	return <Provider store={store}>
		<div>
			<h1>App</h1>
			<IdeasListContainer/>
			<AddNewIdeaForm/>
		</div>
	</Provider>
};


ReactDOM.render(<App/>, document.querySelector('.app'));