export default {
	routes: {
		home: '/',
		list: '/ideas',
		addNewIdea: '/ideas/new',
		viewIdea: (id =':id') =>`/ideas/${id}`,
		editIdea: (id =':id') =>`/ideas/${id}/edit`,
		login: `/login`,
		signup: `/signup`
	}
}