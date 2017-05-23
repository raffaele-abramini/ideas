import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import {Link} from 'react-router-dom';
import config from '../../config';
import ideaListItem from './idea-list-item.scss';

const IdeaListItem = ({isCompleted, title, id, handleUpdateClick, handleDeleteClick})=>{
	let classes =  cl({
		[ideaListItem.item]	 : true,
		[ideaListItem.isCompleted] : isCompleted
	});
	return (
		<li
			className={classes}>
			<Link
				className={ideaListItem.title}
				to={config.routes.viewIdea(id)}>
				{title}
			</Link>

			<div className={ideaListItem.buttons}>
				<button
					className={cl(ideaListItem.button, ideaListItem.first)}
					onClick={handleUpdateClick.bind(this, id, isCompleted)}>
					toggle complete
				</button>
				<button
					className={cl(ideaListItem.button, ideaListItem.second)}
					onClick={handleDeleteClick.bind(this, id)}>
					delete
				</button>
			</div>
		</li>
	)
};

IdeaListItem.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	isCompleted: PropTypes.bool.isRequired,
	sections: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		content: PropTypes.string,
		isCompleted: PropTypes.bool.isRequired,
	}).isRequired)
};

export default IdeaListItem;