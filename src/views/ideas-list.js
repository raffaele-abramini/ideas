import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import MainList from '../containers/main-list-container';

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
		</div>
	}
}

IdeasList.propTypes = {
	fetchIdeas : PropTypes.func.isRequired,
	handleUpdateClick : PropTypes.func.isRequired,
	handleDeleteClick : PropTypes.func.isRequired
};

export default IdeasList;



