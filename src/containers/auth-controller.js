import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {handleAuth} from '../actions/actions-auth';
import {showLoader} from '../actions/actions-loader';
import {auth} from '../lib/firebase';
import {connect} from 'react-redux';

class AuthController extends Component {
	componentWillMount(){
		this.props.showLoader('Logging you in');
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

export default connect(null, {handleAuth, showLoader})(AuthController)