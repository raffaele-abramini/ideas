import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import config from './config'

import IdeasListView from './containers/ideas-list-container'
import LoginView from './views/login-view'

import Header from './containers/header-container';
import layout from './styles/_layout.scss';
import './styles/_transitions.scss';

const ProtectedRoute = ({component: Component, authed, ...rest})=>{
	return <Route
				  {...rest}
				  render={
				  	(props) => authed === true
						? <Component {...props}/>
						: <Redirect to="/login"/>
				  }/>
};

const PublicRoute = ({component: Component, authed, ...rest})=>{
	return <Route
				  {...rest}
				  render={
				  	(props) => authed !== true
						? <Component {...props}/>
						: <Redirect to="/login"/>
				  }/>
};


export default () => {
	return <div className={layout.body}>
			<Header/>

			<div className={layout.container}>
				<Switch>
					<PublicRoute path={'/login'} component={LoginView}/>
					<ProtectedRoute path={config.routes.index} component={IdeasListView} />
				</Switch>
			</div>
		</div>
}
