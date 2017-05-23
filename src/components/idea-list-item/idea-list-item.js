import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import {Link} from 'react-router-dom';
import config from '../../config';

const IdeaListItem = ({isCompleted, title, key, handleUpdateClick, handleDeleteClick})=>{
	let classes =  cl({
		'idea' : true,
		'is-completed' : isCompleted
	});
	return (
		<li
			className={classes}
			key={key}>
			<Link to={config.routes.viewIdea(key)}>{title}</Link>

			<button onClick={handleUpdateClick.bind(this, key, isCompleted)}>toggle complete</button>
			<button onClick={handleDeleteClick.bind(this, key)}>delete</button>
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