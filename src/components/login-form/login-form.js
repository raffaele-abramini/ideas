import React from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import field from '../../styles/_field.scss';
import button from '../../styles/_button.scss';

const LoginForm = ({handleSubmit, logIn, authError})=>{
	const handleFormSubmit = ({email, password})=>{
		logIn(email, password);
	}
	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			{authError && (
				<p>{authError}</p>
			)}
			<h1>Login</h1>
			<div className={field.section}>
				<div className={field.row}>
					<Field
						name={'email'}
						component="input"
						type="email"
						placeholder="Email"
						className={field.input} />
				</div>

				<div className={field.row}>
					<Field
						name={'password'}
						component="input"
						type="password"
						placeholder="Password"
						className={field.input}/>
				</div>
			</div>
			<div className={field.section}>
				<button type="submit"
					className={cl(button.button, button.fullwidth)}>
					Login
				</button>
			</div>
		</form>
	)
};

LoginForm.propTypes = {

};

export default LoginForm