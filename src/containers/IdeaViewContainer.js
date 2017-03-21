import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setActiveIdea} from '../actions/actions-active-idea';
import IdeaView from '../components/IdeaView';

function mapStateToProps(state) {
	return {
		idea : state.activeIdea
	}
}

const mapDispatchToProps = {
	fetchIdea : setActiveIdea
};


class IdeaViewContainer extends Component {
	componentWillMount(){
		this.props.fetchIdea(this.props.match.params.id);
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