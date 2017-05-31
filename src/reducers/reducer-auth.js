import {LOGIN, LOGOUT, AUTH_ERROR, HANDLE_AUTH} from '../actions/actions-auth'
const initialValue= {
	authed: false,
	error: '',
}

export default (state=initialValue, action)=>{
	switch (action.type) {
		case LOGIN:
			return {...state, authed: true}
		case LOGOUT:
			return {...state, authed: false}
		case AUTH_ERROR:
			return {...state, error: action.payload}
		case HANDLE_AUTH:
			return {error: '', authed: !!action.payload}
	}

	return state
}