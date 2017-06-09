import React from 'react';
import { connect } from 'react-redux';
import IdeasList from '../views/ideas-list';

import { fetchIdeas, toggleIdea, deleteIdea } from '../actions/actions-ideas';
import { showLoader } from '../actions/actions-loader';
import { withRouter } from 'react-router-dom'


const mapDispatchToProps = {
	fetchIdeas,
	handleDeleteClick: deleteIdea,
	handleUpdateClick : toggleIdea,
	showLoader
};

export default withRouter(connect(null, mapDispatchToProps)(IdeasList));