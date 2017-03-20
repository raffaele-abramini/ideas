import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewIdea } from '../actions/ideas';


class AddNewIdeaContainer extends Component{
	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render(){
		return <form onSubmit={this.handleSubmit}>
			<h4>Add new idea</h4>
			<input
				type="text"
				placeholder="insert content"
				ref={node => this.content = node}/>
		</form>
	}

	handleSubmit(e){
		e.preventDefault();
		if(!this.content.value.trim()) return;

		this.props.addNewIdea(this.content.value.trim());
		this.content.value= null;
	}
}

export default connect(null, {addNewIdea})(AddNewIdeaContainer);