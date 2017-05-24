import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';
import {Link} from 'react-router-dom';
import idea from './single-idea.scss';
import button from '../../styles/_button.scss';
import Section from '../idea-section/idea-section';

const SingleIdea = ({title, content, sections, id, updateIdeaSections})=>{
	const updateSection = (sectionIndex)=>{
		sections[sectionIndex].isCompleted = !sections[sectionIndex].isCompleted;
		updateIdeaSections(sections);
	};
    return (
        <div className={idea.idea}>
			<h2 className={idea.title}>{title}</h2>

			<p>
				{content}
			</p>

			<ul className={idea.sections}>
				{sections && sections.map((section,index) => (
					<Section key={index}
							 {...section}
							 index={index}
							 updateSection={updateSection}/>
				))}
			</ul>

			<nav className={idea.nav}>
				<Link
					className={button.button}
					to={config.routes.index}>Back</Link>
				<Link
					className={button.button}
					to={config.routes.editIdea(id)}>Edit</Link>
			</nav>
		</div>
    )
};

SingleIdea.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	sections: PropTypes.array,
};

export default SingleIdea;