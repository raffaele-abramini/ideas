import db from '../lib/db';

export const SET_ACTIVE_IDEA = 'SET_ACTIVE_IDEA';
export const UNSET_ACTIVE_IDEA = 'UNSET_ACTIVE_IDEA';

export function setActiveIdea(id) {
	let Idea = db.ref(`ideas/-Kfkx5EF29aeY1HiVOWF`);
	console.log(`ideas/${id}`);
	return dispatch => Idea.on('value', snapshot =>{
		dispatch({
			type: SET_ACTIVE_IDEA,
			payload: snapshot.val()
		})
	})

}

export function unsetActiveIdea() {
	return {
		type: UNSET_ACTIVE_IDEA
	}
}