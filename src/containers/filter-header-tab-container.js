import {connect} from 'react-redux';
import FilterHeaderTab from '../components/filter-header-tab/filter-header-tab';
import {toggleFilterTab} from '../actions/actions-header';
import {toggleCompletedIdeas, toggleOrderByDeadline} from '../actions/actions-list';


function mapStateToProps({header, list: {hideCompletedIdeas, orderByDeadline}}){
	return {
		isOpen: header.filterTabOpen,
		hideCompletedIdeas,
		orderByDeadline
	}
}

export default connect(mapStateToProps, {
	triggerFilter:toggleFilterTab,
	toggleCompletedIdeas,
	toggleOrderByDeadline
})(FilterHeaderTab);