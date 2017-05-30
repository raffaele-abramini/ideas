export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export const logIn = ()=> {
	return {
		type:LOGIN
	}
};

export const logOut = ()=> {
	return {
		type:LOGOUT
	}
};