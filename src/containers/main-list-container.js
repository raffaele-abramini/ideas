import React from 'react';
import { connect } from 'react-redux';
import MainList from '../components/main-list/main-list';

import { fetchIdeas, toggleIdea, deleteIdea } from '../actions/actions-ideas';

function mapStateToProps({ideas}){
	return {
		ideas
	}
}


const mapDispatchToProps = {
	fetchIdeas,
	handleDeleteClick: deleteIdea,
	handleUpdateClick : toggleIdea
};

export default connect(mapStateToProps, mapDispatchToProps)(MainList);