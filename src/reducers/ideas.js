import { ADD_NEW_IDEA, UPDATE_IDEA } from '../actions/ideas';

const defaultValue = [];
const idea = function (state, action) {
	switch (action.type){
		case ADD_NEW_IDEA:
			return {
				id: action.id,
				content: action.content,
				isCompleted: false
			};


		case UPDATE_IDEA:
			if(state.id !== action.id) {
				return state;
			}

			return {
				...state,
				isCompleted: !state.isCompleted
			};
	}

};


export default (state=defaultValue, action)=> {
	switch (action.type){
		case ADD_NEW_IDEA:
			return [...state, idea(null, action)];

		case UPDATE_IDEA:
			return state.map(i=>idea(i, action));

		default:
			return state;
	}
}