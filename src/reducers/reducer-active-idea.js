import {SET_ACTIVE_IDEA, UPDATE_ACTIVE_IDEA, UNSET_ACTIVE_IDEA} from '../actions/actions-active-idea';

export default function (state = null, action) {
	switch (action.type){
		case SET_ACTIVE_IDEA:
			return action.payload;

		case UPDATE_ACTIVE_IDEA:
			return {...state, ...action.payload};

		case UNSET_ACTIVE_IDEA:
			return null;

		default:
			return state;
	}
}