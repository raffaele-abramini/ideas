import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from '../config';

import IdeaForm from '../views/idea-form'

import { updateIdea } from '../actions/actions-ideas';
import { setActiveIdea, unsetActiveIdea } from '../actions/actions-active-idea';

class EditIdeaContainer extends Component{
	componentWillMount(){
		this.props.setActiveIdea(this.props.match.params.id);
	}

	render(){
		return (
			<div>
				<IdeaForm
					redirectTo={config.routes.viewIdea(this.props.match.params.id)}
					formAction={this.props.updateIdea.bind(this, this.props.match.params.id)}
					formTitle={'Edit idea'}
					initialValues={this.props.initialValues}
				/>
			</div>
		)
	}

}


function mapStateToProps({activeIdea}){
	return {
		initialValues: activeIdea
	}
}

export default connect(mapStateToProps, {updateIdea, setActiveIdea, unsetActiveIdea})(EditIdeaContainer);