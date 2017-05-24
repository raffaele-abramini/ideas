import React  from 'react';
import { connect } from 'react-redux';
import config from '../config';

import IdeaForm from '../views/idea-form'

import { addNewIdea } from '../actions/actions-ideas';

const AddNewIdeaContainer = ({addNewIdea})=> {
	return (
		<div>
			<IdeaForm
				redirectTo={config.routes.index}
				formAction={addNewIdea}
				formTitle={'Add new idea'}
			/>
		</div>
	)
};

export default connect(null, {addNewIdea})(AddNewIdeaContainer);