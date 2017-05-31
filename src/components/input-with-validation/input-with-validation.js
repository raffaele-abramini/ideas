import React from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';
import field from '../../styles/_field.scss';

const InputWithValidation = ({meta: {touched, error}, input, className, ...etc})=>{

	const classes = cl(className, {
		[field.isInvalid] : error && touched
	});

	return (
		<div className="field-wrapper">
			<input {...input} className={classes} {...etc}/>

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