import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import Input from '../input-with-validation/input-with-validation';
import field from '../../styles/_field.scss';

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


const SignupForm = ({handleSubmit})=>{
    return (
        <form onSubmit={handleSubmit(e => console.log('can'))}>
			<div className={field.row}>
				<Field
					name="email"
					type="email"
					component={Input}
					placeholder="Email"/>
			</div>
			<div className={field.row}>
				<Field
					name="password"
					type="password"
					component={Input}
					placeholder="Password"
					validate={[validatePsw]} />
			</div>
			<div className={field.row}>
				<Field
					name="repeatPassword"
					type="password"
					component={Input}
					placeholder="Repeat password"
					validate={[validateRepeatPsw]}/>
			</div>


			<button type="submit">
				submit
			</button>
		</form>
    )
};

SignupForm.propTypes = {};

export default SignupForm;