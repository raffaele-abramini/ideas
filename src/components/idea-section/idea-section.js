import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';

import section from './idea-section.scss';
import button from '../../styles/_button.scss';
import icon from '../../styles/_icon.scss';

const IdeaSection = ({title, content, index, isCompleted, updateSection})=>{
	const classes = cl(section.section, {
		[section.isCompleted] : isCompleted
	});

	return (
		<li key={index} className={classes}>
			<h4 className={section.title}>{title}</h4>
			<p>{content}</p>
			<button
				className={cl(button.vanilla, button.withIcon, section.button)}
				onClick={()=>updateSection(index)}>

				<svg className={icon.icon}>
					<use xlinkHref={isCompleted ? '#checkbox-checked' : '#checkbox-unchecked'}/>
				</svg>
				Completed
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