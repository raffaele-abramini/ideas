import React from 'react';
import PropTypes from 'prop-types';
import SignupForm from '../containers/signup-form-container';
import layout from '../styles/_layout.scss';

const SignupView = ({})=>{
	if(global && global.document) global.document.title = 'Signup | Ideas';

	return (
		<div className={layout.centralColumn}>
			<SignupForm/>
		</div>
    )
};

SignupView.propTypes = {};

export default SignupView;