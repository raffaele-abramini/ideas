import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';

import section from './idea-section.scss';
import button from '../../styles/_button.scss';

const IdeaSection = ({title, content, index, isCompleted, updateSection})=>{
	const classes = cl(section.section, {
		[section.isCompleted] : isCompleted
	});

	return (
		<li key={index} className={classes}>
			<h4 className={section.title}>{title}</h4>
			<p>{content}</p>
			<button
				className={cl(button.vanilla, section.button)}
				onClick={()=>updateSection(index)}>
				Toggle completed
			</button>
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