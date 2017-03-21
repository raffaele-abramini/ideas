import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import IdeasListContainer from '../containers/IdeasListContainer'
import AddNewIdeaForm from '../containers/AddNewIdeaForm'
import IdeaViewContainer from '../containers/IdeaViewContainer'
import IdeaViewfrom from '../components/IdeasList'
import config from '../config'

export default ({children})=>{
	return <BrowserRouter>
		<div className="app-container">
			<h1>My app</h1>
			<Switch>
				<Route exact path={config.routes.index} component={IdeasListContainer} />
				<Route exact path={config.routes.addNewIdea} component={AddNewIdeaForm} />
				<Route exact path={config.routes.viewIdea()} component={IdeaViewContainer} />
			</Switch>
		</div>
	</BrowserRouter>
}
