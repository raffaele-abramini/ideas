import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';

import { Field, FieldArray, reduxForm } from 'redux-form';
import { Redirect } from 'react-router';
import field from '../styles/_field.scss';
import button from '../styles/_button.scss';
import overlay from '../components/overlay/overlay';


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

		return (
			<form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
				<h4 className={field.title}>{formTitle}</h4>
				<div
					className={field.row}>
					<Field
						component='input'
						type="text"
						name="title"
						className={cl(field.input, field.inputTitle)}
						placeholder="Title here"
						validate={[value => value && value.length > 3 ? undefined : 'Too short']}
						ref={node => this.title = node}
					/>
				</div>

				<div
					className={field.row}>
					<Field
						component='textarea'
						name="content"
						className={field.textarea}
						placeholder="Content here"
						ref={node => this.content = node}
					/>
				</div>

				<div
					className={field.section}>
					<h5 className={field.subtitle}>Sections</h5>
					<FieldArray name="sections"
								component={SubFieldsHolder}
								className={field.row}>
					</FieldArray>
				</div>

				<div
					className={field.section}>
					<button
						type="submit"
						disabled={this.props.pristine || !this.props.valid}
						className={button.button}>
						Submit
					</button>
				</div>
			</form>
		)
	}

	handleSubmit({title, content, sections=[]}){

		sections = sections.map(section=>{
			section.isCompleted = !!section.isCompleted;
			return section;
		});

		this.props.formAction({title, content, sections});
		this.props.reset();
		this.setState({formSubmitted:true});
	}
}


const SubFieldsHolder = ({fields=[]}) => {
	return (
		<div className="subFields">
			{fields.map((section, index) => {
				return	(
					<div
						key={index}
						className={field.section}>
						<div
							className={field.row}>
							<Field
								component='input'
								type="text"
								name={`${section}.title`}
								className={field.input}
								placeholder="Section title here"
								validate={[value => value && value.length > 3 ? undefined : 'Too short']}
							/>
						</div>

						<div
							className={field.row}>
							<Field
								component='textarea'
								name={`${section}.content`}
								className={field.textarea}
								placeholder="Section content here"
							/>
						</div>
					</div>
				)
			})}

			<button
				type="button"
				onClick={() => {
					fields.push({});
				}}
				className={button.vanilla}
			>Add new section</button>
		</div>
	)
};

export default reduxForm({form: 'idea-form'})(overlay(IdeaForm));