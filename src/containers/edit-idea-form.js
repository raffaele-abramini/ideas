import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import config from '../config';
import IdeaForm from '../components/idea-form/idea-form'
import {toW3CString} from '../lib/utils';

import { updateIdea } from '../actions/actions-ideas';
import { setActiveIdea, unsetActiveIdea } from '../actions/actions-active-idea';


import { reduxForm } from 'redux-form';
import overlay from '../components/overlay/overlay';

class EditIdeaContainer extends Component{
	componentWillMount(){
		this.props.setActiveIdea(this.props.match.params.id);
	}

	render(){
		return (
			<IdeaForm
				{...this.props}
				redirectTo={config.routes.viewIdea(this.props.match.params.id)}
				formAction={this.props.updateIdea.bind(this, this.props.match.params.id)}
				formTitle={'Edit idea'}
				label={'Save'}
			/>
		)
	}

}


function mapStateToProps({activeIdea}){
	return {
		initialValues: activeIdea
	}
}


export default withRouter(
	connect(mapStateToProps, {updateIdea, setActiveIdea, unsetActiveIdea})(
		reduxForm({
			form: 'idea-form'
		})(overlay(EditIdeaContainer))
	)
);