import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {logIn} from '../actions/actions-auth';

const LoginForm = ({email, password, handleSubmit, logIn})=>{
	const handleFormSubmit = ()=>{
		logIn();
	}
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
			<Field name={'email'} component="input" type="email"/>
			<Field name={'password'} component="input" type="password"/>
			<button type="submit" >login</button>
		</form>
    )
};

LoginForm.propTypes = {};

export default connect(null, {
	logIn
})(reduxForm({
	form: 'login',
	fields: ['email', 'password']
})(LoginForm));