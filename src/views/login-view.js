import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
    render(){
        return (
            <div>
				login

				<input type="text" placeholder="Username"/>
				<input type="password" placeholder="Password"/>
			</div>
        )
    }

    static propTypes = {};
}

export default Login