import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router';
import config from '../config';

import { addNewIdea } from '../actions/actions-ideas';

class AddNewIdeaContainer extends Component{
	constructor(props){
		super(props);

		this.state = {
			formSubmitted: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render(){
		if (this.state.formSubmitted) {
			return (
				<Redirect to={config.routes.index}/>
			)
		}

		return <form onSubmit={this.handleSubmit}>
			<h4>Add new idea</h4>

			<div>
				<Field
					component='input'
					type="text"
					name="title"
					placeholder="insert title"
					validate={[value => value && value.length > 3 ? undefined : 'Too short']}
					ref={node => this.title = node}
				/>
			</div>

			<div>
				<Field
					component='textarea'
					name="content"
					placeholder="insert content"
					validate={[value => value && value.length > 3 ? undefined : 'Too short']}
					ref={node => this.content = node}
				/>
			</div>

			<button type="submit" disabled={this.props.pristine || !this.props.valid}>Submit</button>
		</form>
	}

	handleSubmit(e){
		e.preventDefault();
		if(!this.props.valid) return;

		this.props.addNewIdea(this.title.value.trim(), this.content.value.trim());
		this.props.reset();
		this.setState({formSubmitted:true});
	}
}

const reduxFormDecorator = reduxForm({
		form: 'add-new'
})(AddNewIdeaContainer);

export default connect(null, {addNewIdea})(reduxFormDecorator);