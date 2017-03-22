import React, { Component, PropTypes } from 'react';

import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router';

class IdeaForm extends Component {
	static propTypes = {
		formAction : PropTypes.func.isRequired,
		formTitle : PropTypes.string.isRequired,
		redirectTo: PropTypes.string.isRequired
	};

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
				<Redirect to={this.props.redirectTo}/>
			)
		}

		const {formTitle} = this.props;

		return <form onSubmit={this.handleSubmit}>
			<h4>{formTitle}</h4>
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

		// const {activeIdea, match} = this.props;

		this.props.formAction(this.title.value.trim(), this.content.value.trim());
		//
		// if(activeIdea) {
		// 	this.props.updateIdea(this.title.value.trim(), this.content.value.trim(),match.params.id);
		// } else {
		// 	this.props.addNewIdea(this.title.value.trim(), this.content.value.trim());
		// }
		this.props.reset();
		this.setState({formSubmitted:true});
	}
}

export default reduxForm({form: 'idea-form'})(IdeaForm);