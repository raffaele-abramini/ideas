import {TOGGLE_COMPLETED_IDEAS} from '../actions/actions-list';

const getLocalItem = itemName => {
	if(!global.localStorage) return false;

	return !!global.localStorage.getItem(itemName);
}

const initialState = {
	hideCompletedIdeas : getLocalItem('hideCompletedIdeas')
};

export default (state = initialState, action) => {
	switch (action.type){
		case TOGGLE_COMPLETED_IDEAS:
			return {...state, hideCompletedIdeas: getLocalItem('hideCompletedIdeas')};

		default:
			return state;
	}
}