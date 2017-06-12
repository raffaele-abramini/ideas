export const TOGGLE_COMPLETED_IDEAS = 'TOGGLE_COMPLETED_IDEAS';

export const TOGGLE_ORDER_BY_DEADLINE = 'TOGGLE_ORDER_BY_DEADLINE';

export const toggleCompletedIdeas = ()=>{
	global.localStorage.getItem('hideCompletedIdeas')
		? global.localStorage.removeItem('hideCompletedIdeas')
		: global.localStorage.setItem('hideCompletedIdeas', 'true')

	return {
		type: TOGGLE_COMPLETED_IDEAS,
		payload: global.localStorage.getItem('hideCompletedIdeas')
	}
}

export const toggleOrderByDeadline = ()=>{
	global.localStorage.getItem('orderByDeadline')
		? global.localStorage.removeItem('orderByDeadline')
		: global.localStorage.setItem('orderByDeadline', 'true')

	return {
		type: TOGGLE_ORDER_BY_DEADLINE,
		payload: global.localStorage.getItem('orderByDeadline')
	}
}