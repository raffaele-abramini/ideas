import React, { Component } from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import config from '../../config';
import Input from '../input-with-validation/input-with-validation';
import field from '../../styles/_field.scss';
import button from '../../styles/_button.scss';
import {Link} from 'react-router-dom';

const validatePsw = (value, allValues)=>{
	if(!value) return 'Please insert a valid password'
	if(value.length < 8) return 'Password should be at least 8 chars long'
	if(value === 'password') return 'Don\'t use stupid password, you are better than this'

	return undefined
}

const validateRepeatPsw = (value, allValues) =>{
	if(value !== allValues.password) return 'Passwords don\'t match';

	return undefined
}


const SignupForm = ({handleSubmit, signUp, authError})=> {
	const handleFormSubmit = ({email, password})=>{
		signUp(email, password);
	}

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			{authError && (
				<div className={field.authError}>{authError}</div>
			)}

			<h1>Sign up now</h1>
			<div className={field.section}>
				<div className={field.row}>
					<Field
						name="email"
						type="email"
						className={field.input}
						component={Input}
						placeholder="Email"/>
				</div>
				<div className={field.row}>
					<Field
						name="password"
						type="password"
						className={field.input}
						component={Input}
						placeholder="Password"
						validate={[validatePsw]} />
				</div>
				<div className={field.row}>
					<Field
						name="repeatPassword"
						type="password"
						className={field.input}
						component={Input}
						placeholder="Repeat password"
						validate={[validateRepeatPsw]}/>
				</div>
			</div>
			
			<div className={field.section}>
				<div className={field.row}>
					<button
						className={cl(button.button, button.fullwidth)}
						type="submit">
						Sign up
					</button>
				</div>

				<Link
					to={config.routes.login}
					className={button.vanilla}>
					Do you already have an account?
				</Link>
			</div>
		</form>
	)
}

SignupForm.propTypes = {};

export default SignupForm;