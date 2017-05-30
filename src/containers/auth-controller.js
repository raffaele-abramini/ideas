import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {handleAuth} from '../actions/actions-auth';
import {auth} from '../lib/firebase';
import {connect} from 'react-redux';

class AuthController extends Component {
	componentWillMount(){
		auth().onAuthStateChanged((user) => {
			this.props.handleAuth(user)
		});
	}

    render(){
        return (
            <div className="authcontroller"/>
        )
    }

    static propTypes = {};
}

export default connect(null, {handleAuth})(AuthController)