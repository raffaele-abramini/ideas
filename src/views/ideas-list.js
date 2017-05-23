import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import { Link } from 'react-router-dom';
import config from '../config'
import MainList from '../containers/main-list-container';
import button from '../styles/_button.scss';

class IdeasList extends Component {
	constructor(props){
		super(props)
	}

	componentWillMount(){
		this.props.fetchIdeas();
	}

	render(){
		return <div>
			<MainList/>

			<Link
				to={config.routes.addNewIdea}
				className={button.button}>
				Add new
			</Link>
		</div>
	}
}

IdeasList.propTypes = {
	fetchIdeas : PropTypes.func.isRequired,
	handleUpdateClick : PropTypes.func.isRequired,
	handleDeleteClick : PropTypes.func.isRequired
};

export default IdeasList;



