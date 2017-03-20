import React, { PropTypes } from 'react';
import classnames from 'classnames'

const IdeasList = ({ideas, handleUpdateClick}) => {
	return <div>
		<h3 onClick={()=>dispatch(addNewIdea())}>Ideas</h3>
		<ul>
			{ideas.length
				? ideas.map((idea, index)=>{
					let classes =  classnames({
						'idea' : true,
						'is-completed' : idea.isCompleted
					});
					return <li
						className={classes}
						key={index}
						onClick={handleUpdateClick.bind(null, idea.id)}>
							{idea.content}
						</li>
				})
				: <div>no ideas yet</div>
			}
		</ul>
	</div>
};

IdeasList.propTypes = {
	ideas: PropTypes.arrayOf( PropTypes.shape({
		id: PropTypes.number.isRequired,
		isCompleted: PropTypes.bool.isRequired,
		content: PropTypes.string.isRequired
	}).isRequired).isRequired,
	handleUpdateClick : PropTypes.func.isRequired
};

export default IdeasList;



