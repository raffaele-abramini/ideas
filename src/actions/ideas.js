import db from '../lib/db';
const Idea = db.ref('ideas');
export const FETCH_IDEAS = 'FETCH_IDEAS';
export const UPDATE_IDEA = 'UPDATE_IDEA';

export function fetchIdeas() {
	return dispatch => Idea.on('value', (snapshot)=>{
		dispatch({
			type: FETCH_IDEAS,
			payload: snapshot.val()
		})
	})
}


export function addNewIdea(content) {
	return dispatch => Idea.push({
		content,
		isCompleted: false
	})
}

export function deleteIdea(key) {
	return dispatch => Idea.child(key).remove();
}


export function toggleIdea(key, previousState) {
	return dispatch => Idea.child(key).update({isCompleted: !previousState});
}