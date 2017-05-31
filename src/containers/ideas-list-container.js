import React from 'react';
import { connect } from 'react-redux';
import IdeasList from '../views/ideas-list';

import { fetchIdeas, toggleIdea, deleteIdea } from '../actions/actions-ideas';
import { showLoader } from '../actions/actions-loader';


const mapDispatchToProps = {
	fetchIdeas,
	handleDeleteClick: deleteIdea,
	handleUpdateClick : toggleIdea,
	showLoader
};

export default connect(null, mapDispatchToProps)(IdeasList);