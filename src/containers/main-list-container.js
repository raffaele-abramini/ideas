import React from 'react';
import { connect } from 'react-redux';
import MainList from '../components/main-list/main-list';

import { fetchIdeas, toggleIdea, deleteIdea } from '../actions/actions-ideas';
import { logOut } from '../actions/actions-auth';

function mapStateToProps({ideas, list:{hideCompletedIdeas}}){
	return {
		ideas,
		hideCompletedIdeas
	}
}


const mapDispatchToProps = {
	fetchIdeas,
	logOut,
	handleDeleteClick: deleteIdea,
	handleUpdateClick : toggleIdea
};

export default connect(mapStateToProps, mapDispatchToProps)(MainList);