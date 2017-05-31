export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export const showLoader = (message)=> {
	return {
		type: SHOW_LOADER,
		payload: message
	}
}

export const hideLoader = ()=>{
	return {
		type: HIDE_LOADER
	}
}