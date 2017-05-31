import {auth} from '../lib/firebase';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const HANDLE_AUTH = 'HANDLE_AUTH';
export const SIGNUP = 'SIGNUP';


export const logIn = (email, password)=> {
	return dispatch => {
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