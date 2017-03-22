import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setActiveIdea, unsetActiveIdea, updateActiveIdea} from '../actions/actions-active-idea';
import { updateIdea } from '../actions/actions-ideas';
import IdeaView from '../components/idea-view';

function mapStateToProps(state) {
	return {
		idea : state.activeIdea
	}
}

const mapDispatchToProps = {
	fetchIdea : setActiveIdea,
	unsetActiveIdea,
	updateActiveIdea,
	updateIdea
};


class IdeaViewContainer extends Component {
	componentWillMount(){
		this.props.fetchIdea(this.props.match.params.id);
		this.updateIdeaSections = this.updateIdeaSections.bind(this);
	}
	componentWillUnmount(){
		this.props.unsetActiveIdea();
	}
	render(){
		const {idea, match} = this.props;
		if(!idea) {
			return <div>loading</div>
		}
		return <IdeaView
			idea={idea}
			id={match.params.id}
			updateIdeaSections={this.updateIdeaSections} />
	}
	updateIdeaSections(sections){
		this.props.updateActiveIdea({sections});
		this.props.updateIdea(this.props.match.params.id, {sections});
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaViewContainer);