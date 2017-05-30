import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../containers/login-form';

class Login extends Component {
    render(){
        return (
			<LoginForm/>
        )
    }

    static propTypes = {};
}

export default Login