import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setActiveIdea, unsetActiveIdea} from '../actions/actions-active-idea';
import IdeaView from '../components/idea-view';

function mapStateToProps(state) {
	return {
		idea : state.activeIdea
	}
}

const mapDispatchToProps = {
	fetchIdea : setActiveIdea,
	unsetActiveIdea
};


class IdeaViewContainer extends Component {
	componentWillMount(){
		this.props.fetchIdea(this.props.match.params.id);
	}
	componentWillUnmount(){
		this.props.unsetActiveIdea();
	}
	render(){
		const {idea, match} = this.props;
		if(!idea) {
			return <div>loading</div>
		}
		return <IdeaView idea={idea} id={match.params.id} />
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaViewContainer);