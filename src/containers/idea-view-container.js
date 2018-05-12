import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setActiveIdea, unsetActiveIdea, updateActiveIdea } from '../actions/actions-active-idea'
import { updateIdea } from '../actions/actions-ideas'
import { toggleCompactIdeaView } from '../actions/actions-header'
import IdeaView from '../views/idea-view'

function mapStateToProps(state) {
  return {
    idea: state.activeIdea,
    ideaCompactView: state.header.ideaCompactView,
  }
}

const mapDispatchToProps = {
  fetchIdea: setActiveIdea,
  unsetActiveIdea,
  updateActiveIdea,
  updateIdea,
  toggleCompactIdeaView,
}


class IdeaViewContainer extends Component {
  static propTypes = {
    idea: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchIdea(this.props.match.params.id)
    this.updateIdeaSections = this.updateIdeaSections.bind(this)
  }

  componentWillUnmount() {
    this.props.unsetActiveIdea()
  }

  render() {
    const { idea, match, toggleCompactIdeaView, ideaCompactView } = this.props
    return (
      <div>
        {idea && (
          <IdeaView
            idea={idea}
            ideaCompactView={ideaCompactView}
            id={match.params.id}
            toggleCompactIdeaView={toggleCompactIdeaView}
            updateIdeaSections={this.updateIdeaSections}/>
        )}
      </div>
    )
  }

  updateIdeaSections(sections) {
    this.props.updateActiveIdea({ sections })
    this.props.updateIdea(this.props.match.params.id, { sections })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(IdeaViewContainer))