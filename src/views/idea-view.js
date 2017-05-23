import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import overlay from '../components/overlay/overlay';

import config from '../config';

const IdeaView = ({idea: {title, content, sections}, updateIdeaSections, id})=>{
	const updateSection = (sectionIndex)=>{
		sections[sectionIndex].isCompleted = !sections[sectionIndex].isCompleted;
		updateIdeaSections(sections);
	};

	const renderSection = ({title, content, isCompleted}, index)=>{
		const classes = classnames({
			'is-completed' : isCompleted
		});

		return <li key={index} className={classes}>
			<h4>{title}</h4>
			<p>{content}</p>
			<button onClick={()=>updateSection(index)}>click</button>
		</li>
	};

	return (
		<div>
			<h2>{title}</h2>

			<p>
				{content}
			</p>

			<ul>
				{sections.map(renderSection)}
			</ul>

			<Link to={config.routes.index}>Back</Link>
			<Link to={config.routes.editIdea(id)}>Edit</Link>
		</div>
	)
};

export default overlay(IdeaView);