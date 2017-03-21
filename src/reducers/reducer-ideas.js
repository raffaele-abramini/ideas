import { FETCH_IDEAS } from '../actions/actions-ideas';

const defaultValue = {};

export default (state=defaultValue, action)=> {
	switch (action.type){
		case FETCH_IDEAS:
			return {...action.payload};

		default:
			return state;
	}
}