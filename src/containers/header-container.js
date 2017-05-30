import {connect} from 'react-redux';
import Header from '../components/header/header';
import {toggleCompletedIdeas} from '../actions/actions-list';
import {logOut} from '../actions/actions-auth';


function mapStateToProps({list, auth}){
	return {
		hideCompletedIdeas: list.hideCompletedIdeas,
		authed: auth.authed
	}
}

export default connect(mapStateToProps, {toggleCompletedIdeas, logOut})(Header);