import {connect} from 'react-redux';
import FilterHeaderTab from '../components/filter-header-tab/filter-header-tab';
import {toggleFilterTab} from '../actions/actions-header';


function mapStateToProps({header}){
	return {
		isOpen: header.filterTabOpen
	}
}

export default connect(mapStateToProps, {triggerFilter:toggleFilterTab})(FilterHeaderTab);