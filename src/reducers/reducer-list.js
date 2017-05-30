import {TOGGLE_COMPLETED_IDEAS} from '../actions/actions-list';

const initialState = {
	hideCompletedIdeas : false
};

export default function (state = initialState, action) {
	switch (action.type){
		case TOGGLE_COMPLETED_IDEAS:
			return {...state, hideCompletedIdeas: !state.hideCompletedIdeas};

		default:
			return state;
	}
}