import React from 'react';
import { Route, Switch } from 'react-router-dom';
import config from './config'

import IdeasListContainer from './containers/ideas-list-container'
import AddIdeaForm from './containers/add-idea-form'
import IdeaViewContainer from './containers/idea-view-container'
import EditIdeaForm from './containers/edit-idea-form'

import Header from './components/header/header';
import layout from './styles/_layout.scss';


export default ()=>{
	return <div className="app-container">
			<Header/>
			<div className={layout.container}>
				<Switch>
					<Route exact path={config.routes.index} component={IdeasListContainer} />
					<Route exact path={config.routes.addNewIdea} component={AddIdeaForm} />
					<Route exact path={config.routes.viewIdea()} component={IdeaViewContainer} />
					<Route exact path={config.routes.editIdea()} component={EditIdeaForm} />
				</Switch>
			</div>
		</div>
}
