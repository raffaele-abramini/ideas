import { combineReducers } from 'redux';
import ideas from './ideas';
import  {reducer as formReducer } from 'redux-form';


export default combineReducers({
	ideas,
	form: formReducer
});