import React from 'react';
import { connect } from 'react-redux';
import IdeasList from '../views/ideas-list';

import { fetchIdeas, toggleIdea, deleteIdea } from '../actions/actions-ideas';


const mapDispatchToProps = {
	fetchIdeas,
	handleDeleteClick: deleteIdea,
	handleUpdateClick : toggleIdea
};

export default connect(null, mapDispatchToProps)(IdeasList);