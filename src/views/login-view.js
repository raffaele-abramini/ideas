import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../containers/login-form-container';
import layout from '../styles/_layout.scss';

class Login extends Component {

	render(){
		if(global && global.document) global.document.title = 'Login | Ideas';

        return (
        	<div className={layout.centralColumn}>
				<LoginForm/>
			</div>
        )
    }

    static propTypes = {};
}

export default Login