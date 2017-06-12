import {connect} from 'react-redux';
import FilterHeaderTab from '../components/filter-header-tab/filter-header-tab';
import {toggleFilterTab} from '../actions/actions-header';
import {toggleCompletedIdeas} from '../actions/actions-list';


function mapStateToProps({header, list}){
	return {
		isOpen: header.filterTabOpen,
		hideCompletedIdeas: list.hideCompletedIdeas
	}
}

export default connect(mapStateToProps, {
	triggerFilter:toggleFilterTab,
	toggleCompletedIdeas
})(FilterHeaderTab);