import React, { Component, PropTypes } from 'react';

import { Field, FieldArray, reduxForm } from 'redux-form';
import { Redirect } from 'react-router';

const SubFieldsHolder = ({fields=[]}) => {
	console.log(fields);

	return <div className="subFields">
		<button type="button" onClick={() => {
			fields.push({});
			console.log(fields);
		}}>Add section</button>
		{fields.map((section, index) => {
			return	<div key={index}>
				<Field
					component='input'
					type="text"
					name={`${section}.title`}
					placeholder="insert title"
					validate={[value => value && value.length > 3 ? undefined : 'Too short']}
				/>
				<Field
					component='textarea'
					name={`${section}.content`}
					placeholder="insert content"
					validate={[value => value && value.length > 3 ? undefined : 'Too short']}
				/>
			</div>
		})}
	</div>
};

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

		return <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
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

			<div>
				<h5>Sections</h5>
				<FieldArray name="sections"
							component={SubFieldsHolder}>
				</FieldArray>
			</div>

			<button type="submit" disabled={this.props.pristine || !this.props.valid}>Submit</button>
		</form>
	}

	handleSubmit({title, content, sections=[]}){

		const formattedSections = sections.map(section=>{
			section.isCompleted = !!section.isCompleted;
			return section;
		});

		this.props.formAction(title, content, formattedSections);
		this.props.reset();
		this.setState({formSubmitted:true});
	}
}

export default reduxForm({form: 'idea-form'})(IdeaForm);