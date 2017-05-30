import {LOGIN, LOGOUT} from '../actions/actions-auth'
const initialValue= {
	authed: false,
	error: ''
}

export default (state=initialValue, action)=>{
	switch (action.type) {
		case LOGIN:
			return {...state, authed: true}
		case LOGOUT:
			return {...state, authed: false}
	}

	return state
}