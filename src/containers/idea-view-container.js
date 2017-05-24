import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {setActiveIdea, unsetActiveIdea, updateActiveIdea} from '../actions/actions-active-idea';
import { updateIdea } from '../actions/actions-ideas';
import IdeaView from '../views/idea-view';

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
	static propTypes = {
		idea: PropTypes.object		
	};

	componentWillMount(){
		this.props.fetchIdea(this.props.match.params.id);
		this.updateIdeaSections = this.updateIdeaSections.bind(this);
	}
	componentWillUnmount(){
		this.props.unsetActiveIdea();
	}
	render(){
		const {idea, match} = this.props;
		if(!idea) return <div>no idea in the view container</div>;
		return (
			<div>
				{idea && (
					<IdeaView
						idea={idea}
						id={match.params.id}
						updateIdeaSections={this.updateIdeaSections} />
				)}
			</div>
		)
	}
	updateIdeaSections(sections){
		this.props.updateActiveIdea({sections});
		this.props.updateIdea(this.props.match.params.id, {sections});
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaViewContainer);