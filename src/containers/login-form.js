import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {logIn} from '../actions/actions-auth';

const LoginForm = ({handleSubmit, ...props})=>{
	const handleFormSubmit = ({email, password})=>{
		props.logIn(email, password);
	}
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
			{props.authError && (
				<p>{props.authError}</p>
			)}
			<Field name={'email'} component="input" type="email"/>
			<Field name={'password'} component="input" type="password"/>
			<button type="submit" >login</button>
		</form>
    )
};
LoginForm.propTypes = {};


function mapStateToProps({auth}){
	return {
		authError: auth.error
	}
}

export default connect(mapStateToProps, {
	logIn
})(reduxForm({
	form: 'login',
	fields: ['email', 'password']
})(LoginForm));