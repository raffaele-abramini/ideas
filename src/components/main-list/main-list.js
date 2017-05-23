import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import config from '../../config';
import cl from 'classnames';
import IdeaListItem from '../idea-list-item/idea-list-item';

import mainList from './main-list.scss';

const MainList = (props)=>{
    return (
		<ul className={mainList.list}>
			{Object.keys(props.ideas).length
				? Object.keys(props.ideas).map((key)=>(
					<IdeaListItem key={key} id={key} {...props.ideas[key]}
								  handleUpdateClick={props.handleUpdateClick}
								  handleDeleteClick={props.handleDeleteClick}/>
				))
				: <div>no ideas yet</div>
			}
		</ul>
    )
};

MainList.propTypes = {
	ideas: PropTypes.object.isRequired
};

export default MainList;