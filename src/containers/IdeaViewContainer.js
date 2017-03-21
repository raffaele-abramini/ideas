import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setActiveIdea, unsetActiveIdea} from '../actions/actions-active-idea';
import IdeaView from '../components/IdeaView';

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
		const {idea} = this.props;
		if(!idea) {
			return <div>loading</div>
		}
		return <IdeaView idea={idea} />
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaViewContainer);