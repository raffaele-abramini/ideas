import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';

import section from './idea-section.scss';
import button from '../../styles/_button.scss';
import icon from '../../styles/_icon.scss';

const IdeaSection = ({title, content, index, isCompleted, updateSection, ideaCompactView})=>{
	const classes = cl(section.section, {
		[section.isCompleted] : isCompleted
	});

	const renderContent = () => {
		if (!content || ideaCompactView) return '';

		return <p dangerouslySetInnerHTML={{__html: content.replace(/\n/gmi, '<br>')}}></p>
	}

	return (
		<li key={index} className={classes}>
			<h4 className={section.title}>{title}</h4>
			{renderContent()}

			{!ideaCompactView && <button
				className={cl(button.vanilla, button.withIcon, section.button)}
				onClick={()=>updateSection(index)}>

				<svg className={icon.icon}>
					<use xlinkHref={isCompleted ? '#checkbox-checked' : '#checkbox-unchecked'}/>
				</svg>
				Completed
			</button>}
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