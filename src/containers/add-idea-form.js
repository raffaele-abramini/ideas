import React  from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import config from '../config';

import overlay from '../components/overlay/overlay';
import IdeaForm from '../components/idea-form/idea-form'

import { addNewIdea } from '../actions/actions-ideas';

const AddNewIdeaContainer = ({addNewIdea, ...props})=> {
	return (
		<IdeaForm
			{...props}
			redirectTo={config.routes.list}
			formAction={addNewIdea}
			formTitle={'Add new idea'}
		/>
	)
};

export default connect(null, {addNewIdea})(
	reduxForm({form: 'idea-form'})(overlay(AddNewIdeaContainer))
);