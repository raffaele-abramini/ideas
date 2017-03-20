import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addNewIdea } from '../actions/ideas';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div>
		<label>{label}</label>
		<div>
			<input {...input} placeholder={label} type={type}/>
			{touched && error && <span>{error}</span>}
		</div>
	</div>
)

class AddNewIdeaContainer extends Component{
	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render(){
		return <form onSubmit={this.handleSubmit}>
			<h4>Add new idea</h4>

			<Field
				component={renderField}
				type="text"
				name="content"
				label="insert content"
				validate={[value => value && value.length > 3 ? undefined : 'Too short']}
				ref={node => this.content = node}/>
			<button type="submit" disabled={this.props.pristine || this.props.pristine}>Submit</button>
		</form>
	}

	handleSubmit(e, values){
		e.preventDefault();
		if(!this.props.valid) return;

		this.props.addNewIdea(this.content.value.trim());
		this.props.reset();
	}
}

const reduxFormDecorator = reduxForm({
		form: 'add-new'
})(AddNewIdeaContainer);

export default connect(null, {addNewIdea})(reduxFormDecorator);