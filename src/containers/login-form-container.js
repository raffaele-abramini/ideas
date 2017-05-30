import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {logIn} from '../actions/actions-auth';
import LoginForm from '../components/login-form/login-form';


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