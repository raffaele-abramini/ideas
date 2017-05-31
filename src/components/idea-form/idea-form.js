import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import { Field, FieldArray } from 'redux-form';
import { Redirect } from 'react-router';
import Input from '../input-with-validation/input-with-validation';

import field from '../../styles/_field.scss';
import button from '../../styles/_button.scss';
import icon from '../../styles/_icon.scss';

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
						component={Input}
						type="text"
						name="title"
						className={cl(field.input, field.inputTitle)}
						placeholder="Title here"
						validate={[value => value && value.length > 3 ? undefined : 'Title too short']}
					/>
				</div>

				<div
					className={field.row}>
					<Field
						component='textarea'
						name="content"
						className={field.textarea}
						placeholder="Content here"
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
						disabled={this.props.submitting}
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
		<div className={field.subFields}>
			{fields.map((section, index) => {
				return	(
					<div
						key={index}
						className={field.section}>
						<div
							className={field.row}>
							<Field
								component={Input}
								type="text"
								name={`${section}.title`}
								className={cl(field.input, field.inputSubtitle)}
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

						<div className={field.deleteSectionButton}
							onClick={()=>fields.remove(index)}>
							<svg className={icon.icon}>
								<use xlinkHref="#bin"/>
							</svg>
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


export default IdeaForm;