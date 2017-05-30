import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../containers/login-form-container';
import layout from '../styles/_layout.scss';

class Login extends Component {
    render(){
        return (
        	<div className={layout.centralColumn}>
				<LoginForm/>
			</div>
        )
    }

    static propTypes = {};
}

export default Login