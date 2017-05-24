import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import {Link} from 'react-router-dom';
import config from '../../config';
import ideaListItem from './idea-list-item.scss';
import button from '../../styles/_button.scss';
import icon from '../../styles/_icon.scss';

const IdeaListItem = ({isCompleted, title, id, timestamp, handleUpdateClick, handleDeleteClick})=>{
	let classes =  cl({
		[ideaListItem.item]	 : true,
		[ideaListItem.isCompleted] : isCompleted
	});
	const date = new Date(timestamp);
	const confirmationForDelete = (e)=>{
		e && e.preventDefault();
		if(window.confirm('Delete this idea?')) handleDeleteClick(id);
	};
	return (
		<li
			className={classes}>
			<Link
				className={ideaListItem.link}
				to={config.routes.viewIdea(id)}>
				<h2
					className={ideaListItem.title}>
					{title}
				</h2>

				<time className={ideaListItem.date}>
					{`${date.getHours()}:${date.getMinutes()} `}
					{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
				</time>

				<div className={ideaListItem.buttons}>
					<button
						className={cl(button.vanilla, button.withIcon)}
						onClick={e => {e.preventDefault(); handleUpdateClick(id, isCompleted)}}>
						<svg className={icon.icon}>
							<use xlinkHref={isCompleted ? '#checkbox-checked' : '#checkbox-unchecked'}/>
						</svg>

						completed
					</button>
					<button
						className={cl(button.vanilla, button.withIcon)}
						onClick={confirmationForDelete}>
						<svg className={icon.icon}>
							<use xlinkHref='#bin'/>
						</svg>
					</button>
				</div>
			</Link>
		</li>
	)
};

IdeaListItem.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	isCompleted: PropTypes.bool.isRequired,
	timestamp: PropTypes.string.isRequired,
	sections: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		content: PropTypes.string,
		isCompleted: PropTypes.bool.isRequired,
	}).isRequired)
};

export default IdeaListItem;