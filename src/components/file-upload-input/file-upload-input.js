import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import {storage, auth} from '../../lib/firebase';
import field from '../../styles/_field.scss';


class FileUploadInput extends Component {
	constructor(props){
		super(props);

		this.state = {
			file: ''
		};
	}

    render(){
    	const {meta: {touched, error}, input, className, ...etc} = this.props;
		const classes = cl(className, {
			[field.isInvalid] : error && touched
		});
        return (
            <div>
				<div>
					<input type="file"
						   name="fileupload"
							ref={el => this.fileInput=el}
						   onChange={e=>this.handleUpload(e)}/>
				</div>

				{input.value && (
					<img src={input.value} alt=""/>
				)}

				<input {...input} className={classes} {...etc}/>

				{error && touched && (
					<div className={field.errorMessage}>
						{error}
					</div>
				)}
			</div>
        )
    }

    handleUpload(e){
		e.preventDefault();
		if(!this.fileInput.files[0]) return this.props.input.onChange('');

		storage.child(`${auth().currentUser.uid}/${Math.random()}`).put(this.fileInput.files[0])
			.then(snap=>{
				this.props.input.onChange(snap.downloadURL);
			})
	}

    static propTypes = {

	};
}

export default FileUploadInput
