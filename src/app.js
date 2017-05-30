import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import config from './config'

import IdeasListView from './containers/ideas-list-container'
import LoginView from './views/login-view'
import Header from './containers/header-container';
import layout from './styles/_layout.scss';
import './styles/_transitions.scss';
import AuthRoute from './containers/auth-route';


export default () => {
	return (
		<div className={layout.body}>
			<Header/>

			<div className={layout.container}>
				<Switch>
					<AuthRoute path={config.routes.login} component={LoginView} isProtected={false}/>
					<AuthRoute path={config.routes.index} component={IdeasListView} isProtected={true}/>
				</Switch>
			</div>
		</div>
	)
}
