import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cl from 'classnames';
import IdeaListItem from '../idea-list-item/idea-list-item';

import mainList from './main-list.scss';
import info from '../../styles/_info-panel.scss';
import layout from '../../styles/_layout.scss';

import config from '../../config'
import button from '../../styles/_button.scss';

const MainList = (props)=>{
	const filterIdea = (acc, key)=>{
		if(!props.ideas[key].isCompleted) acc[key] = props.ideas[key];
		return acc;
	};
	const ideas = props.hideCompletedIdeas
		? Object.keys(props.ideas).reduce(filterIdea, {})
		: props.ideas;

	if(props.loading) return <div/>

	return (
			Object.keys(ideas).length
				? <ul className={mainList.list}>
					{Object.keys(ideas).map((key)=>(
						<IdeaListItem key={key} id={key} {...ideas[key]}
									  handleUpdateClick={props.handleUpdateClick}
									  handleDeleteClick={props.handleDeleteClick}/>
					))}
					</ul>
				: <div className={cl(info.info, layout.centralColumn)}>
					<div className={cl(info.content)}>
						{props.hideCompletedIdeas
							? 'Well done, no uncompleted ideas!'
							: 'Waiting for you first idea!'}
					</div>

					<Link
						to={config.routes.addNewIdea}
						className={button.button}>
						Add new
					</Link>
				</div>
    )
};

MainList.propTypes = {
	ideas: PropTypes.object.isRequired
};

export default MainList;