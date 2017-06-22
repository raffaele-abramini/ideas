import {db, auth, storage} from '../lib/firebase';
export const FETCH_IDEAS = 'FETCH_IDEAS';

const Idea = () => {
	return db.ref(`ideas/${auth().currentUser.uid}`)
};

export function fetchIdeas() {
	return dispatch => Idea().on('value', (snapshot)=>{
		dispatch({
			type: FETCH_IDEAS,
			payload: snapshot.val()
		})
	})
}


export function addNewIdea({title, content, sections = [], coverImage, deadline}) {
	return dispatch => Idea().push({
		title,
		content: content || '',
		sections,
		coverImage: coverImage || '',
		timestamp: new Date().toISOString(),
		isCompleted: false,
		deadline: deadline || null
	})
}

export function deleteIdea(key, {coverImage}) {
	return () => {
		const deleteIdea = (err)=>{
			if(err)console.log(err);
			Idea().child(key).remove()
		}
		if(coverImage){
			const imageRef = storage.refFromURL(coverImage).location.path;
			return storage.ref(imageRef).delete().then(deleteIdea).catch(deleteIdea);
		} else {
			deleteIdea();
		}
	}
}


export function toggleIdea(key, previousState) {
	return dispatch => Idea().child(key).update({isCompleted: !previousState});
}

export function updateIdea(key, {title, content, sections, coverImage, deadline}) {
	const propsToUpdate = {};

	if(title) propsToUpdate.title = title
	if(content) propsToUpdate.content = content
	if(typeof coverImage !== 'undefined') propsToUpdate.coverImage = coverImage
	if(sections) propsToUpdate.sections = sections
	propsToUpdate.deadline = deadline || null


	return dispatch => Idea().child(key).update(propsToUpdate);
}