import React from 'react';
import PropType from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import config from '../config';

const AuthRoute = ({component: Component, authed, isProtected, ...rest})=>{
	return (
		<Route
			{...rest}
			render={
				(props) => authed === isProtected
					? <Component {...props}/>
					: <Redirect to={isProtected ? config.routes.login : config.routes.list}/>
			}/>
	)
};

AuthRoute.propTypes = {
	component: PropType.func.isRequired,
	path: PropType.string.isRequired,
	isProtected: PropType.bool.isRequired
}

function mapStateToProps(state){
	return {authed: state.auth.authed}
}

export default connect(mapStateToProps)(AuthRoute);