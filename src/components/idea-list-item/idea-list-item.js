import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import {Link} from 'react-router-dom';
import config from '../../config';

const IdeaListItem = ({isCompleted, title, id, handleUpdateClick, handleDeleteClick})=>{
	let classes =  cl({
		'idea' : true,
		'is-completed' : isCompleted
	});
	return (
		<li
			className={classes}>
			<Link to={config.routes.viewIdea(id)}>{title}</Link>

			<button onClick={handleUpdateClick.bind(this, id, isCompleted)}>toggle complete</button>
			<button onClick={handleDeleteClick.bind(this, id)}>delete</button>
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