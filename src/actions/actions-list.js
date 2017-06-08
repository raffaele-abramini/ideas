export const TOGGLE_COMPLETED_IDEAS = 'TOGGLE_COMPLETED_IDEAS';

export const toggleCompletedIdeas = ()=>{
	global.localStorage.getItem('hideCompletedIdeas')
		? global.localStorage.removeItem('hideCompletedIdeas')
		: global.localStorage.setItem('hideCompletedIdeas', 'true')

	return {
		type: TOGGLE_COMPLETED_IDEAS
	}
}