export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export const logIn = ()=> {
	console.log('login');
	return {
		type:LOGIN
	}
};

export const logOut = ()=> {
	return {
		type:LOGOUT
	}
};