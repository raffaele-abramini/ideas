import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';


import IdeasListContainer from './containers/IdeasListContainer'
import AddNewIdeaForm from './containers/AddNewIdeaForm'


const App = ()=>{
	return <Provider store={createStore(reducer)}>
		<div>
			<h1>App</h1>
			<IdeasListContainer/>
			<AddNewIdeaForm/>
		</div>
	</Provider>
};


ReactDOM.render(<App/>, document.querySelector('.app'));