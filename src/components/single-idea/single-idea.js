import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config';
import cl from 'classnames';
import {Link} from 'react-router-dom';
import idea from './single-idea.scss';
import {getFormattedDate} from '../../lib/utils';
import button from '../../styles/_button.scss';
import Section from '../idea-section/idea-section';

const SingleIdea = ({title, timestamp, content, sections, id, updateIdeaSections, coverImage})=>{
	const updateSection = (sectionIndex)=>{
		sections[sectionIndex].isCompleted = !sections[sectionIndex].isCompleted;
		updateIdeaSections(sections);
	};

	return (
        <div className={cl(idea.idea,{
        	[idea.withBg] : coverImage
		})}>
			{coverImage && (
				<div className={idea.coverImageContainer}>
					<img
						className={idea.coverImage}
						src={coverImage} alt=""/>
				</div>
			)}

			<div className={idea.titleContainer}>
				<h2 className={idea.title}>{title}</h2>
			</div>

			<time className={idea.date}>
				{getFormattedDate(timestamp)}
			</time>

			<div className={idea.content}>
				{content.split('\n').map((subcontent, index)=> {
					if(!subcontent) return;
					return <p key={index}>{subcontent}</p>
				})}
			</div>

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
					to={config.routes.editIdea(id)}>Edit</Link>

				<Link
					className={button.button}
					to={config.routes.list}>Close</Link>
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