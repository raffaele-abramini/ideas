import {TOGGLE_FILTER_TAB} from '../actions/actions-header';

const initialState = {
	filterTabOpen: false,
	userTabOpen: false
}


export default function(state = initialState, action){
	switch (action.type){
		case TOGGLE_FILTER_TAB:
			return {...state, filterTabOpen: !state.filterTabOpen}
	}

	return state;
}