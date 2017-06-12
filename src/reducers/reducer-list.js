import {TOGGLE_COMPLETED_IDEAS, TOGGLE_ORDER_BY_DEADLINE} from '../actions/actions-list';

const getLocalItem = itemName => {
	if(!global.localStorage) return false;

	return !!global.localStorage.getItem(itemName);
}

const initialState = {
	hideCompletedIdeas : getLocalItem('hideCompletedIdeas'),
	orderByDeadline: getLocalItem('orderByDeadline')
};

export default (state = initialState, action) => {
	switch (action.type){
		case TOGGLE_COMPLETED_IDEAS:
			return {...state, hideCompletedIdeas: !!action.payload};
		case TOGGLE_ORDER_BY_DEADLINE:
			return {...state, orderByDeadline: !!action.payload};

		default:
			return state;
	}
}