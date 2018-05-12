import { TOGGLE_FILTER_TAB, TOGGLE_COMPACT_IDEA_VIEW } from '../actions/actions-header'

const initialState = {
  filterTabOpen: false,
  userTabOpen: false,
  ideaCompactView: false,
}


export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILTER_TAB:
      return { ...state, filterTabOpen: !state.filterTabOpen }
    case TOGGLE_COMPACT_IDEA_VIEW:
      return { ...state, ideaCompactView: !state.ideaCompactView }
  }

  return state
}