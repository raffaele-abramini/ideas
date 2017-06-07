import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import {storage, auth} from '../../lib/firebase';
import classes from './file-upload-input.scss';
import field from '../../styles/_field.scss';
import icon from '../../styles/_icon.scss';
import button from '../../styles/_button.scss';


class FileUploadInput extends Component {
	constructor(props){
		super(props);

		this.state = {
			loading: false,
			imageRef: ''
		};
	}

    render(){
    	const {meta: {touched, error}, input, className, ...etc} = this.props;
		const fieldClasses = cl(className, {
			[field.isInvalid] : error && touched
		});
        return (
            <div className={classes.container}>

				{!input.value &&(
					<input type="file"
						   name="fileupload"
						   ref={el => this.fileInput = el}
						   onChange={e => this.handleUpload(e)}/>
				)}

				{this.state.loading &&
					<div className={classes.loadingMessage}>Uploading image...</div>
				}

				{input.value && [
					<div className={classes.image}
						 key={1}>
						<img src={input.value} alt=""/>
					</div>,
					<button key={2}
							onClick={e=>this.removeImage(e)}
							className={cl(button.vanilla, button.larger, classes.icon)}>
						<svg className={icon.icon}>
							<use xlinkHref="#bin"/>
						</svg>
					</button>
				]}

				<input {...input} className={fieldClasses} {...etc}/>

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
		this.setState({loading:true});
		const imageRef = `${auth().currentUser.uid}/${Math.random()}`;

		storage.ref().child(imageRef).put(this.fileInput.files[0])
			.then(snap=>{
				this.props.input.onChange(snap.downloadURL);

				this.setState({
					loading:false,
					imageRef
				});
			})
	}

	removeImage(e){
    	e.preventDefault();

    	const imageRef = this.state.imageRef
			|| storage.refFromURL(this.props.input.value).location.path;

		storage.ref(imageRef).delete().then(()=>{
			this.props.input.onChange('');
			this.setState({
				imageRef: ''
			})
		});
	}

    static propTypes = {

	};
}

export default FileUploadInput
