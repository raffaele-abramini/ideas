import {auth} from '../lib/firebase';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';


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
	return auth().signOut(email, password)
		.catch(e => {
			return dispatch({
				type: AUTH_ERROR,
				payload: e.message
			})
		})
};