import {auth} from '../lib/firebase';
import {SHOW_LOADER} from './actions-loader';

export const LOGIN = 'LOGIN';
export const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
export const LOGOUT = 'LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const HANDLE_AUTH = 'HANDLE_AUTH';
export const SIGNUP = 'SIGNUP';


export const logIn = (email, password)=> {
	return dispatch => {
		dispatch({
			type:LOGIN_ATTEMPT
		});
		return auth().signInWithEmailAndPassword(email, password)
			.catch(e => {
				return dispatch({
					type: AUTH_ERROR,
					payload: e.message
				})
			})
	}
};

export const logOut = ()=> {
	return dispatch => {
		return auth().signOut()
			.catch(e => {
				return dispatch({
					type: AUTH_ERROR,
					payload: e.message
				})
			})
	}
};

export const handleAuth = (user)=> {
	return {
		type: HANDLE_AUTH,
		payload: user ? user.uid : false
	}
};



export const signUp = (email, password)=> {
	return dispatch => {
		return auth().createUserWithEmailAndPassword(email, password)
			.catch(e => {
				return dispatch({
					type: AUTH_ERROR,
					payload: e.message
				})
			})
	}
};