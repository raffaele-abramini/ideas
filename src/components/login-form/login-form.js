import React from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Field} from 'redux-form';
import config from '../../config';
import field from '../../styles/_field.scss';
import button from '../../styles/_button.scss';

const LoginForm = ({handleSubmit, logIn, authError})=>{
	const handleFormSubmit = ({email, password})=>{
		logIn(email, password);
	}
	return (
		<form onSubmit={handleSubmit(handleFormSubmit)}>
			{authError && (
				<div className={field.authError}>{authError}</div>
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
				<div className={field.row}>
					<button type="submit"
							className={cl(button.button, button.fullwidth)}>
						Login
					</button>
				</div>

				<Link
					to={config.routes.signup}
					className={button.vanilla}>
					Are you a new user?
				</Link>
			</div>
		</form>
	)
};

LoginForm.propTypes = {

};

export default LoginForm