import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import config from '../config'
import Async from 'react-code-splitting';
import CssTransition from 'react-transition-group/CSSTransitionGroup';

const MainList = ()=> <Async load={import('../containers/main-list-container')}/>
const AddIdeaView = ()=> <Async load={import('../views/add-idea-view')}/>
const EditIdeaView = ()=> <Async load={import('../views/edit-idea-view')}/>
const IdeaView = ()=> <Async load={import('../containers/idea-view-container')}/>

import layout from '../styles/_layout.scss';

class IdeasList extends Component {
	constructor(props){
		super(props)
	}

	componentWillMount(){
		this.props.showLoader('Fetching your ideas');
		this.props.fetchIdeas();
	}

	render(){
		const {history} = this.props;
		if(global && global.document) global.document.title = 'Your ideas | Ideas';

		return (
			<div className={layout.innerContainer}>
				<MainList/>

				<CssTransition
					transitionName="slide-up"
					transitionEnterTimeout={250}
					transitionLeaveTimeout={250}>

					<Switch location={history.location} key={history.location.key}>
						<Route exact path={config.routes.addNewIdea} component={AddIdeaView} />
						<Route exact path={config.routes.viewIdea()} component={IdeaView} />
						<Route exact path={config.routes.editIdea()} component={EditIdeaView} />
					</Switch>
				</CssTransition>
			</div>
		)
	}
}

IdeasList.propTypes = {
	fetchIdeas : PropTypes.func.isRequired,
	handleUpdateClick : PropTypes.func.isRequired,
	handleDeleteClick : PropTypes.func.isRequired
};

export default withRouter(IdeasList);



