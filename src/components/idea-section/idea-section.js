import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';

const IdeaSection = ({title, content, index, isCompleted, updateSection})=>{
	const classes = cl({
		'is-completed' : isCompleted
	});

	return (
		<li key={index} className={classes}>
			<h4>{title}</h4>
			<p>{content}</p>
			<button onClick={()=>updateSection(index)}>click</button>
		</li>
	)
};


IdeaSection.propTypes = {
	title : PropTypes.string,
	content: PropTypes.string,
	index: PropTypes.number,
	isCompleted: PropTypes.bool,
	updateIdeaSections: PropTypes.func
};

export default IdeaSection;