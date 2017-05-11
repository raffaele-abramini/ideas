import React from 'react';
import { connect } from 'react-redux';
import IdeasList from '../views/ideas-list';

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

export default connect(mapStateToProps, mapDispatchToProps)(IdeasList);