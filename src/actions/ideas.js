export const ADD_NEW_IDEA = 'ADD_NEW_IDEA';
export const UPDATE_IDEA = 'UPDATE_IDEA';
let ideaId = 0;

export function addNewIdea(content) {
	return {
		type: ADD_NEW_IDEA,
		id: ideaId++,
		content
	}
}

export function toggleIdea(id) {
	return {
		type: UPDATE_IDEA,
		id
	}
}