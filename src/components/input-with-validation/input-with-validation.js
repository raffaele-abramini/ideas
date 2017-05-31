import React from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';
import field from '../../styles/_field.scss';

const InputWithValidation = ({meta: {...meh, touched, error, warning}, input, className, placeholder})=>{
	const classes = cl(className, {
		[field.isInvalid] : error && touched
	});

	console.log(meh, warning);

	return (
		<div className="field-wrapper">
			<input {...input} placeholder={placeholder} className={classes} />

			{error && touched && (
				<div className={field.errorMessage}>
					{error}
				</div>
			)}
		</div>
	)
};

InputWithValidation.propTypes = {};

export default InputWithValidation;