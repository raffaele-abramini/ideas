import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from '../config';

import IdeaForm from '../components/idea-form'

import { updateIdea } from '../actions/actions-ideas';
import { setActiveIdea, unsetActiveIdea } from '../actions/actions-active-idea';

class AddNewIdeaContainer extends Component{
	componentWillMount(){
		this.props.setActiveIdea(this.props.match.params.id)
	}

	componentWillUnmount(){
		this.props.unsetActiveIdea()
	}

	render(){
		return <IdeaForm
			redirectTo={config.routes.viewIdea(this.props.match.params.id)}
			formAction={this.props.updateIdea.bind(this, this.props.match.params.id)}
			formTitle={'Edit idea'}
			initialValues={this.props.initialValues}
		/>
	}

}


function mapStateToProps({activeIdea}){
	return {
		initialValues: activeIdea
	}
}

export default connect(mapStateToProps, {updateIdea, setActiveIdea, unsetActiveIdea})(AddNewIdeaContainer);