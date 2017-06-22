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

const _removeCompleted = (props, acc, key)=>{
	if(!props.ideas[key].isCompleted) acc.push(key);
	return acc;
};

const _sortByDeadline = (ideas,a,b)=> {
	if(!ideas[a].deadline) return 1;
	if(!ideas[b].deadline) return -1;

	return ideas[a].deadline > ideas[b].deadline ? 1 : -1;
}

const filterIdeas = (props)=> {
	let ideas = props.hideCompletedIdeas
		? Object.keys(props.ideas).reduce((acc, key)=>_removeCompleted(props, acc, key), []).reverse()
		: Object.keys(props.ideas).reverse();

	if(props.orderByDeadline) ideas = ideas.sort((a,b)=>_sortByDeadline(props.ideas,a,b));

	return ideas
}

const MainList = (props)=>{
	const ideas = filterIdeas(props);

	if(props.loading) return <div/>

	return (
			ideas.length
				? <ul className={mainList.list}>
					{ideas.map((key)=>(
						<IdeaListItem key={key} id={key} {...props.ideas[key]}
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
	ideas: PropTypes.object
};

export default MainList;