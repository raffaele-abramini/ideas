import { combineReducers } from 'redux';
import reducerIdeas from './reducer-ideas';
import reducerList from './reducer-list';
import reducerActiveIdea from './reducer-active-idea';
import reducerAuth from './reducer-auth';
import {reducer as formReducer } from 'redux-form';


export default combineReducers({
	ideas: reducerIdeas,
	activeIdea: reducerActiveIdea,
	form: formReducer,
	list : reducerList
});