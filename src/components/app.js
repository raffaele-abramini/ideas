import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import IdeasListContainer from '../containers/IdeasListContainer'
import AddNewIdeaForm from '../containers/AddNewIdeaForm'
import config from '../config'

export default ({children})=>{
	return <BrowserRouter>
		<div className="app-container">
			<h1>My app</h1>
			<Route exact path={config.routes.index} component={IdeasListContainer} />
			<Route exact path={config.routes.addNewIdea} component={AddNewIdeaForm} />
		</div>
	</BrowserRouter>
}
