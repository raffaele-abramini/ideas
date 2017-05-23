import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import CssTransition from 'react-addons-css-transition-group';
import config from './config'

import IdeasList from './containers/ideas-list-container'
import AddIdeaForm from './containers/add-idea-form'
import IdeaView from './containers/idea-view-container'
import EditIdeaForm from './containers/edit-idea-form'

import Header from './components/header/header';
import layout from './styles/_layout.scss';
import './styles/_transitions.scss';

export default withRouter(({history})=>{
	return <div className="app-container">
			<Header/>
			<div className={layout.container}>
				<CssTransition
					transitionName="fade"
					transitionEnterTimeout={250}
					transitionLeaveTimeout={250}>
					<Switch location={history.location} key={history.location.key}>
						<Route exact path={config.routes.index} component={IdeasList} />
						<Route path={config.routes.addNewIdea} component={AddIdeaForm} />
						<Route path={config.routes.viewIdea()} component={IdeaView} />
						<Route path={config.routes.editIdea()} component={EditIdeaForm} />
					</Switch>
				</CssTransition>
			</div>
		</div>
})
