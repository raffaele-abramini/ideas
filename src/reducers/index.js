import { combineReducers } from 'redux';
import ideas from './reducer-ideas';
import list from './reducer-list';
import activeIdea from './reducer-active-idea';
import auth from './reducer-auth';
import loader from './reducer-loader';
import header from './reducer-header';
import {reducer as formReducer } from 'redux-form';


export default combineReducers({
	ideas,
	activeIdea,
	list ,
	auth,
	loader,
	header,
	form: formReducer
});