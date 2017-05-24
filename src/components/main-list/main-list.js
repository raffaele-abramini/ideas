import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import IdeaListItem from '../idea-list-item/idea-list-item';

import mainList from './main-list.scss';

const MainList = (props)=>{
	const filterIdea = (acc, key)=>{
		if(!props.ideas[key].isCompleted) acc[key] = props.ideas[key];
		return acc;
	};
	const ideas = props.hideCompletedIdeas
		? Object.keys(props.ideas).reduce(filterIdea, {})
		: props.ideas;
    return (
		<ul className={mainList.list}>
			{Object.keys(ideas).length
				? Object.keys(ideas).map((key)=>(
					<IdeaListItem key={key} id={key} {...ideas[key]}
								  handleUpdateClick={props.handleUpdateClick}
								  handleDeleteClick={props.handleDeleteClick}/>
				))
				: <div>
					{props.hideCompletedIdeas
						? 'Well done, no uncompleted ideas!'
						: 'Waiting for you first idea!'}
				  </div>
			}
		</ul>
    )
};

MainList.propTypes = {
	ideas: PropTypes.object.isRequired
};

export default MainList;