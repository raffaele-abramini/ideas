import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import config from '../config'

import IdeasListContainer from '../containers/ideas-list-container'
import AddNewIdeaForm from '../containers/add-new-idea-form'
import IdeaViewContainer from '../containers/idea-view-container'

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
