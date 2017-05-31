import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {signUp} from '../actions/actions-auth';
import SignupForm from '../components/signup-form/signup-form';


function mapStateToProps({auth}){
	return {
		authError: auth.error
	}
}

export default connect(mapStateToProps, {
	signUp
})(reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'repeatPassword']
})(SignupForm));