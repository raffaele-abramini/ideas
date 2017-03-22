import db from '../lib/db';

export const SET_ACTIVE_IDEA = 'SET_ACTIVE_IDEA';
export const UPDATE_ACTIVE_IDEA = 'UPDATE_ACTIVE_IDEA';
export const UNSET_ACTIVE_IDEA = 'UNSET_ACTIVE_IDEA';

export function setActiveIdea(id) {
	return (dispatch, getState) => {
		if(getState().ideas[id]){
			return dispatch({
				type: SET_ACTIVE_IDEA,
				payload: getState().ideas[id]
			})
		}

		let Idea = db.ref(`ideas/${id}`);
		Idea.once('value', snapshot =>{
			dispatch({
				type: SET_ACTIVE_IDEA,
				payload: snapshot.val()
			})
		})
	}
}

export function updateActiveIdea({title, content, sections}) {
	const propsToUpdate = {};

	if(title) propsToUpdate.title = title;
	if(content) propsToUpdate.content = content;
	if(sections) propsToUpdate.sections = sections;
	return {
		type: UPDATE_ACTIVE_IDEA,
		payload: propsToUpdate
	}
}

export function unsetActiveIdea() {
	return {
		type: UNSET_ACTIVE_IDEA
	}
}