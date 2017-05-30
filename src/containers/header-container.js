import {connect} from 'react-redux';
import Header from '../components/header/header';
import {toggleCompletedIdeas} from '../actions/actions-list';


function mapStateToProps({list}){
	return {
		hideCompletedIdeas: list.hideCompletedIdeas
	}
}

export default connect(mapStateToProps, {toggleCompletedIdeas})(Header);