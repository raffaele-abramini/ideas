import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import { Link } from 'react-router-dom';
import config from '../config'

class IdeasList extends Component {
	constructor(props){
		super(props)
	}

	componentWillMount(){
		this.props.fetchIdeas();
	}

	render(){
		return <div>
			<h3>Ideas</h3>
			<ul>
				{Object.keys(this.props.ideas).length
					? Object.keys(this.props.ideas).map((key)=>{
						let idea = this.props.ideas[key];
						let classes =  classnames({
							'idea' : true,
							'is-completed' : idea.isCompleted
						});
						return <li
							className={classes}
							key={key}
						>
							<Link to={config.routes.viewIdea(key)}>{idea.title}</Link>

							<button onClick={this.props.handleUpdateClick.bind(this, key, idea.isCompleted)}>toggle complete</button>
							<button onClick={this.props.handleDeleteClick.bind(this, key)}>delete</button>
						</li>
					})
					: <div>no ideas yet</div>
				}
			</ul>

			<Link to={config.routes.addNewIdea}>
				Add new
			</Link>
		</div>
	}
}

IdeasList.propTypes = {
	ideas: PropTypes.objectOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		content: PropTypes.string,
		isCompleted: PropTypes.bool.isRequired,
		sections: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string.isRequired,
			content: PropTypes.string,
			isCompleted: PropTypes.bool.isRequired,
		}).isRequired)
	}).isRequired).isRequired,
	fetchIdeas : PropTypes.func.isRequired,
	handleUpdateClick : PropTypes.func.isRequired,
	handleDeleteClick : PropTypes.func.isRequired
};

export default IdeasList;



