import {SHOW_LOADER, HIDE_LOADER} from '../actions/actions-loader';
import {LOGIN, LOGOUT, HANDLE_AUTH} from '../actions/actions-auth';
import {FETCH_IDEAS} from '../actions/actions-ideas';
import config from '../config';
const initialState = {
	isVisible: false,
	message: ''
}


export default (state=initialState, action)=>{
	switch (action.type){

		// manually show
		case SHOW_LOADER:
			return {
				isVisible:true,
				message: action.payload
			}

		// manually hide
		case HIDE_LOADER:
			return {...initialState}

		// trigger from login
		case LOGIN:
			return {
				isVisible:true,
				message: 'Logging you in'
			}

		// trigger from logout
		case LOGOUT:
			return {
				isVisible:true,
				message: 'Logging you out'
			}

		// hide once ideas have been fetched
		case FETCH_IDEAS :
			return {...initialState}

		// hide once user has been authenticated - successfully or not
		case HANDLE_AUTH :
			return {...initialState}
	}

	return state;
}