export default {
	routes: {
		index: '/',
		addNewIdea: '/ideas/new',
		viewIdea: (id =':id') =>`/ideas/${id}`
	}
}